import Author from '../../domain/author'
import AuthorRepository from '../port/out/AuthorRepository'
import GetAuthorsQuery from '../port/in/GetAuthorsQuery'

class GetAuthorsUseCase implements GetAuthorsQuery {

  constructor(
    private readonly authorRepository: AuthorRepository,
  ) {
  }

  async execute(ids: readonly number[]): Promise<Author[]> {
    return this.authorRepository.findAll(ids)
  }
}

export default GetAuthorsUseCase
