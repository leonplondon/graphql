import Post from '../../../domain/post'

interface GetPostByIdQuery {
  execute(id: string): Promise<Post>;
}

export default GetPostByIdQuery
