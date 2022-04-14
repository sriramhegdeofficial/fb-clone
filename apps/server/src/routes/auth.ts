import { ResponseToolkit, Request } from 'hapi';
import * as Boom from '@hapi/boom';
import * as  bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import { jwtfuncs } from './../utils/jwt';


const prisma = new PrismaClient();

interface UserInput {
  email: string;
  password: string;
}

export const register = {
  method: 'POST',
  path: '/api/register',
  options: {
    cors: {
      origin: ['*'],
      credentials: true,
      additionalHeaders: ['cache-control', 'x-requested-with', 'X_AUTH_TOKEN'],
    },

    handler: async (request: Request, h: ResponseToolkit) => {
      console.log(`started at register`)
      const usercred = request.payload as UserInput;

      const userAlreadyExists = await prisma.user.findUnique({
        where: {
          email: usercred.email,
        },
      });
        console.log(`fetched useralready exists ${userAlreadyExists}`)
      if (userAlreadyExists) {
        return Boom.badRequest('Email is taken.');
      }
          
      const password = bcrypt.hashSync(usercred.password, 8);
      const user = await prisma.user.create({
        data: {
          email: usercred.email,
          password: password,
        },
      });
      const accessToken = await jwtfuncs.signAccessToken(user);

      return h
        .response({
          accessToken,
        })
        .code(200);
    },
  },
};

export const login = {
  method: 'POST',
  path: '/api/login',

  options: {
    cors: {
      origin: ['*'],
      credentials: true,
      additionalHeaders: ['cache-control', 'x-requested-with', 'X_AUTH_TOKEN'],
    },

    handler: async (request: Request, h: ResponseToolkit) => {
      const { email, password } = request.payload as UserInput;
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });
      if (!user) {
        return Boom.notFound('User not registered');
      }
      const checkPassword = bcrypt.compareSync(password, user.password);
      if (!checkPassword) {
        Boom.unauthorized('Email or passsword is invalid');
      }
      delete user.password;
      delete user.id;
      const accessToken = await jwtfuncs.signAccessToken(user);

          return h.response({  accessToken }).code(200)
      
      
    },
  },
};
