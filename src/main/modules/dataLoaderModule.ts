import Author from '../domain/author'
import AuthorLoaderFactory from '../adapter/graphql/dataLoaders/authorsLoader'
import LoaderFactory from '../adapter/graphql/dataLoaders/loader'
import GetAuthorsQuery from '../application/port/in/GetAuthorsQuery'

export default class DataLoaderModule {
  readonly authorDataLoaderFactory: LoaderFactory<number, Author>
  
  constructor(
    getAuthorsQuery: GetAuthorsQuery,
  ) {
    this.authorDataLoaderFactory = new AuthorLoaderFactory(getAuthorsQuery)
  }
}
