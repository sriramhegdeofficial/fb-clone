
import { ApolloServer,ApolloServerPluginStopHapiServer,gql} from 'apollo-server-hapi';
import * as Hapi from '@hapi/hapi';
import { register, login} from './routes/auth'





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



const port  = process.env.PORT || 4000;



  async function startApolloServer(typeDefs, resolvers) {
    const app = Hapi.server({ 
      port: port,
     host: 'localhost',
  
       });



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
.then(() => console.log(`successfully running on port ${port}`))