import GetPostByIdQuery from '../port/in/GetPostByIdQuery'
import Post from '../../domain/post'
import PostRepository from '../port/out/PostRepository'

class GetPostByIdUseCase implements GetPostByIdQuery {

  constructor(
    private readonly postRepository: PostRepository,
  ) {
  }

  async execute(id: string): Promise<Post> {
    return this.postRepository.findById(Number.parseInt(id))
  }
}

export default GetPostByIdUseCase
