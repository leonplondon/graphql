import Author from '../../../domain/author'

interface GetAuthorByIdQuery {
  execute(id: number): Promise<Author>;
}

export default GetAuthorByIdQuery
