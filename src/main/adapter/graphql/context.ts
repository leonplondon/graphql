import { Loader } from './dataLoaders/loader'

import Author from '../../domain/author'

type AppContext = {
  dataLoaders: {
    authors: Loader<number, Author>
  }
}

export default AppContext
