import './config'

// GraphQL API initializr
import initGraphQlApp from './adapter/graphql'

// Application modules
import RestModule from './modules/restModule'
import UseCaseModule from './modules/useCaseModule'
import DataLoaderModule from './modules/dataLoaderModule'

const restModule: RestModule = new RestModule()

const useCaseModule: UseCaseModule = new UseCaseModule(
  restModule.authorsRepository,
  restModule.postsRepository,
)

const dataLoaderModule: DataLoaderModule = new DataLoaderModule(useCaseModule.getAuthorsUseCase)

void initGraphQlApp(dataLoaderModule, useCaseModule)
