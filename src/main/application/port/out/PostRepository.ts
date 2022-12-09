import Post from '../../../domain/post'

interface PostRepository {
  findAll(): Promise<Post[]>
  findById(id: number): Promise<Post>
}

export default PostRepository
