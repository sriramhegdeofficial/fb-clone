import { ResponseToolkit, Request } from 'hapi';
import * as Boom from '@hapi/boom';
import bcrypt = require('bcryptjs');
import { PrismaClient } from '@prisma/client'
import  { jwtfuncs }  from './../utils/jwt'



const prisma = new PrismaClient()

interface UserInput {
    email: string;
    password: string;
}

export const register = {
    method: 'POST',
    path: '/register',
    handler: async (request: Request , h: ResponseToolkit) => {
    
        const usercred  = request.payload as UserInput;
        const userAlreadyExists = await prisma.user.findUnique({
            where: {
              email: usercred.email,
            },
          })
          console.log(userAlreadyExists)
          console.log(usercred)
         
          if(userAlreadyExists)  {
             return  Boom.badRequest("Email is taken.")
          }
          
        
        let {  password }  = request.payload as UserInput;
       
        password = bcrypt.hashSync(password, 8);
        const user = await prisma.user.create({
            data: {
                email: usercred.email,
                password: password,
              },
        })
        const accessToken   = await jwtfuncs.signAccessToken(user);

        return h.response({
            accessToken
        }).code(200)
            
 
            
        
        
    }

}

export const login = {
    method: 'POST',
      path: '/login',
      handler: async (request: Request , h: ResponseToolkit) => {
        const { email, password } = request.payload as UserInput;
      const user = await prisma.user.findUnique({
          where: {
              email
          }
      });
      if (!user) {
          return Boom.notFound("User not registered")
      }
      const checkPassword = bcrypt.compareSync(password, user.password)
      if (!checkPassword) {
        Boom.unauthorized("Email or passsword is invalid")
      }
      delete user.password
      const accessToken = await jwtfuncs.signAccessToken(user)
      return  h.response({
        ...user,
        accessToken
      }).code(200)
  }
 
      
  }