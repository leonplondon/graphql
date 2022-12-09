import { FilterAuthorDto } from '../../model/authors'

import createLogger from '../../../../config/logger'
import GetAuthorByIdQuery from '../../../../application/port/in/GetAuthorByIdQuery'

const logger = createLogger(__filename)

export const createAuthorResolver = (getAuthorByIdUseCase: GetAuthorByIdQuery) => ({
  Query: {
    author: async (_: unknown, args: FilterAuthorDto) => {
      logger.info('Gonna execute author query', { authorId: args.filter.id })
      return getAuthorByIdUseCase.execute(args.filter.id)
    },
  },
  Mutation: {},
  Subscription: {},
})
