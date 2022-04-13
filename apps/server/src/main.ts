
import { ApolloServer,ApolloServerPluginStopHapiServer,gql} from 'apollo-server-hapi';
import * as Hapi from '@hapi/hapi';
import { register, login} from './routes/auth'
import { ResponseToolkit, Request } from 'hapi';




const typeDefs = gql`

type Query {
    sayHi: String!
}

`

const resolvers = {
    Query: {
        sayHi: () => 'hello hi'
    }
}







  async function startApolloServer(typeDefs, resolvers) {
    const app = Hapi.server({ 
      port: process.env.PORT,
      host: 'facebooksri.herokuapp.com'
  
       });


    app.route({
      method: 'GET',
      path: '/',
      handler: (request: Request, h: ResponseToolkit) => {
        return h.response("hello")
      }
    })
    app.route(register);
    app.route(login)

    


    const server = new ApolloServer({
      typeDefs,
      resolvers,
      plugins: [ApolloServerPluginStopHapiServer({ hapiServer: app })],
    });
  
    await server.start();
    await server.applyMiddleware({ app });
    await app.start();
  }

 startApolloServer(typeDefs, resolvers)
.then(() => console.log(`successfully running on port ${process.env.PORT}`))