import Author from '../../domain/author'
import AuthorRepository from '../port/out/AuthorRepository'
import GetAuthorByIdQuery from '../port/in/GetAuthorByIdQuery'

class GetAuthorByIdUseCase implements GetAuthorByIdQuery {
  
  constructor(
    private readonly authorRepository: AuthorRepository,
  ) {
  }
  
  async execute(id: number): Promise<Author> {
    return this.authorRepository.findById(id)
  }
}

export default GetAuthorByIdUseCase
