/**
 * Definition of base resolver to add app-specific dynamically
 */
const BASE_RESOLVERS = [{
  Query: {
    _empty: () => true,
  },
  Mutation: {
    _empty: () => true,
  },
  Subscription: {
    _empty: () => true,
  },
}]

export default BASE_RESOLVERS
