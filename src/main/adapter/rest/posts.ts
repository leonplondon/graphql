import axios from 'axios'

import createLogger from '../../config/logger'
import GenericAdapter from './generic'
import Post from '../../domain/post'
import PostRepository from '../../application/port/out/PostRepository'
import RestServiceConfiguration from '../../config/restServiceConfiguration'

const logger = createLogger(__filename)

class PostRestAdapter extends GenericAdapter implements PostRepository {
  
  constructor() {
    super(RestServiceConfiguration.getPostsUrl())
  }

  async findAll(): Promise<Post[]> {
    logger.info('Reading all posts')
    
    const { data } = await axios.get<Post[]>(this.getResourcesUrl())
    return data
  }

  async findById(id: number): Promise<Post> {
    logger.info(`Reading post with id ${id}`)
    
    const resourceId = id.toString()
    const { data } = await axios.get<Post>(this.getResourceByIdUrl(resourceId))
    return data
  }
}

export default PostRestAdapter
