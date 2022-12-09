import AuthorRepository from '../application/port/out/AuthorRepository'
import AuthorRestAdapter from '../adapter/rest/authors'
import PostRepository from '../application/port/out/PostRepository'
import PostRestAdapter from '../adapter/rest/posts'

export default class RestModule {
  readonly authorsRepository: AuthorRepository
  readonly postsRepository: PostRepository

  constructor() {
    this.authorsRepository = new AuthorRestAdapter()
    this.postsRepository = new PostRestAdapter()
  }
}
