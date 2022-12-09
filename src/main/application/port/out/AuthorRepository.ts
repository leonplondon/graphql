import Author from '../../../domain/author'

interface AuthorRepository {
  findAll(ids: readonly number[]): Promise<Author[]>
  findById(id: number): Promise<Author>
}

export default AuthorRepository
