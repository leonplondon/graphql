import Post from '../../../domain/post'

interface GetPostsQuery {
  execute(): Promise<Post[]>;
}

export default GetPostsQuery
