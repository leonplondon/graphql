import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

import { loadResolvers, loadTypes } from './artifactLoader'

import AppContext from './context'
import BASE_RESOLVERS from './baseResolver'
import createLogger from '../../config/logger'
import DataLoaderModule from '../../modules/dataLoaderModule'
import plugins from './pugins'
import serverConfiguration from '../../config/serverConfiguration'
import UseCaseModule from '../../modules/useCaseModule'

const logger = createLogger(__filename)

const getServerOptions = (dataLoaderModule: DataLoaderModule)  => ({
  listen: {
    port: serverConfiguration.getPort(),
  },
  context: async () => {
    logger.info('Creating new context holder')

    return Promise.resolve({
      dataLoaders: {
        authors: dataLoaderModule.authorDataLoaderFactory.create(),
      },
    })
  },
})

const initGraphQlApp = async (
  dataLoaderModule: DataLoaderModule,
  useCaseModule: UseCaseModule,
) => {
  const resolvers = loadResolvers(useCaseModule)
  const typeDefs = loadTypes()

  const server = new ApolloServer<AppContext>({
    typeDefs,
    resolvers: BASE_RESOLVERS.concat(resolvers),
    plugins,
  })
  
  return startStandaloneServer(server, getServerOptions(dataLoaderModule))
    .then(({ url }) => { logger.info(`Server listening at ${url}`) })
    .catch(() => process.exit(-1))
}

export default initGraphQlApp


