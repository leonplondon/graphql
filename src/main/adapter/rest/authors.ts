import axios from 'axios'

import Author from '../../domain/author'
import AuthorRepository from '../../application/port/out/AuthorRepository'
import createLogger from '../../config/logger'
import GenericAdapter from './generic'
import RestServiceConfiguration from '../../config/restServiceConfiguration'

const logger = createLogger(__filename)

class AuthorRestAdapter extends GenericAdapter implements AuthorRepository {

  constructor() {
    super(RestServiceConfiguration.getAuthorsUrl())
  }

  async findAll(): Promise<Author[]> {
    logger.info('Reading all authors')

    const { data } = await axios.get<Author[]>(this.getResourcesUrl())
    return data
  }

  async findById(id: number): Promise<Author> {
    logger.info(`Reading author with id ${id}`)

    const resourceId = id.toString()
    const { data } = await axios.get<Author>(this.getResourceByIdUrl(resourceId))
    return data
  }
}

export default AuthorRestAdapter
