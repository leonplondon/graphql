import Post from '../../domain/post'
import GetPostsQuery from '../port/in/GetPostsQuery'
import PostRepository from '../port/out/PostRepository'

class GetPostsUseCase implements GetPostsQuery {
  
  constructor(
    private readonly postRepository: PostRepository,
  ) {
  }

  async execute(): Promise<Post[]> {
    return this.postRepository.findAll()
  }
}

export default GetPostsUseCase
