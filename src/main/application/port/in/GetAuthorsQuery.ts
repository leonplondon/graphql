import Author from '../../../domain/author'

interface GetAuthorsQuery {
  execute(ids: readonly number[]): Promise<Author[]>;
}

export default GetAuthorsQuery
