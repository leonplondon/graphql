import AuthorRepository from '../application/port/out/AuthorRepository'
import GetAuthorByIdQuery from '../application/port/in/GetAuthorByIdQuery'
import GetAuthorByIdUseCase from '../application/usecase/GetAuthorById'
import GetAuthorsQuery from '../application/port/in/GetAuthorsQuery'
import GetAuthorsUseCase from '../application/usecase/GetAuthors'
import GetPostByIdQuery from '../application/port/in/GetPostByIdQuery'
import GetPostByIdUseCase from '../application/usecase/GetPostById'
import GetPostsQuery from '../application/port/in/GetPostsQuery'
import GetPostsUseCase from '../application/usecase/GetPosts'
import PostRepository from '../application/port/out/PostRepository'

class UseCaseModule {
  readonly getAuthorByIdUseCase: GetAuthorByIdQuery
  readonly getAuthorsUseCase: GetAuthorsQuery
  readonly getPostByIdUseCase: GetPostByIdQuery
  readonly getPostsUseCase: GetPostsQuery

  constructor(
    authorRepository: AuthorRepository,
    postRepository: PostRepository,
  ) {
    this.getAuthorByIdUseCase = new GetAuthorByIdUseCase(authorRepository)
    this.getAuthorsUseCase = new GetAuthorsUseCase(authorRepository)
    this.getPostByIdUseCase = new GetPostByIdUseCase(postRepository)
    this.getPostsUseCase = new GetPostsUseCase(postRepository)
  }
}

export default UseCaseModule
