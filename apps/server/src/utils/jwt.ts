import jwt = require('jsonwebtoken')
import createError = require('http-errors')
import * as dotenv from 'dotenv'
dotenv.config()

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET
export const jwtfuncs = {
    signAccessToken(payload) : Promise<string> {
        return new Promise((resolve, reject) => {
            jwt.sign({ payload }, accessTokenSecret, {
            }, (err, token) => {
                if (err) {
                reject(createError.InternalServerError())
                }
                resolve(token)
            })
        })
    },
    verifyAccessToken(token) : Promise<object> {
        return new Promise((resolve, reject) => {
            jwt.verify(token, accessTokenSecret, (err, payload) => {
                if (err) {
                    const message = err.name == 'JsonWebTokenError' ? 'Unauthorized' : err.message
                    return reject(createError.Unauthorized(message))
                }
                resolve(payload)
            })
        })
    }
}