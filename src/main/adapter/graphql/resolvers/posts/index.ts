import { IdFilter, NumberFilter, PostDto } from '../../model/posts'

import AppContext from '../../context'
import createLogger from '../../../../config/logger'  
import GetPostByIdQuery from '../../../../application/port/in/GetPostByIdQuery'
import GetPostsQuery from '../../../../application/port/in/GetPostsQuery'

const logger = createLogger(__filename)

export const createPostResolver = (
  getPostsUseCase: GetPostsQuery,
  getPostByIdUseCase: GetPostByIdQuery,
) => ({
  Query: {
    posts: async () => {
      logger.info('Get all posts')
      return getPostsUseCase.execute()
    },
    post: async (root: unknown, args: IdFilter) => {
      logger.info(`Get post by id ${JSON.stringify(args)}`)
      return getPostByIdUseCase.execute(args.id)
    },
  },
  Post: {
    author: async (author: NumberFilter, _: never, context: AppContext) => {
      logger.info('Get author of post', author)
      return await context.dataLoaders.authors.get(author.id)
    },
  },
  Mutation: {
    createPost: async (root: unknown, post: PostDto) => {
      return Promise.resolve(post)
    },
  },
  Subscription: {},
})
