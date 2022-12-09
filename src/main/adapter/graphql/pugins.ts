import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default' 

const landingPagePlugin = () => process.env.NODE_ENV === 'production' 
  ? ApolloServerPluginLandingPageDisabled()
  : ApolloServerPluginLandingPageLocalDefault()

export default [
  landingPagePlugin(),
]
