import DataLoader from 'dataloader'

import Author from '../../../domain/author'
import GetAuthorsQuery from '../../../application/port/in/GetAuthorsQuery'
import LoaderFactory, { Loader } from './loader'

class AuthorLoader implements Loader<number, Author> {

  private readonly dataLoader: DataLoader<number, Author | null>

  constructor(
    readonly getAuthorsQuery: GetAuthorsQuery,
  ) {
    this.dataLoader = new DataLoader<number, Author | null>(async (keys: readonly number[]) => {
      const authors = await getAuthorsQuery.execute(keys)
      if (authors.length >= keys.length) {
        return authors.slice(0, keys.length)
      } else {
        const missingItems = keys.length - authors.length
        const emptyArray = new Array<Author | null>(missingItems).fill(null)
        return [...authors, ...emptyArray]
      }
    })
  }

  get(key: number): Promise<Author | null> {
    return this.dataLoader.load(key)
  }
}

export default class AuthorLoaderFactory implements LoaderFactory<number, Author> {

  constructor(
    readonly getAuthorsQuery: GetAuthorsQuery,
  ) {
  }

  create(): Loader<number, Author> {
    return new AuthorLoader(this.getAuthorsQuery)
  }
}
