import { DocumentNode } from 'graphql'
import { gql } from 'graphql-tag'

import * as fs from 'fs'
import * as path from 'path'

import { createAuthorResolver } from './resolvers/authors'
import { createPostResolver } from './resolvers/posts'

import createLogger from '../../config/logger'
import UseCaseModule from '../../modules/useCaseModule'

const logger = createLogger(`${__dirname}:${__filename}}`)

/**
 * Options to read plain-text files
 * @constant
 * @type {Object}
 * @default
 */
const FILE_OPTIONS: fs.ObjectEncodingOptions & { withFileTypes: true } = {
  encoding: null,
  withFileTypes: true,
}

const getTypeFiles = (dir: string): string[] => {
  logger.info('Start reading GraphQL definitions')

  const dirPath = path.resolve(dir)

  const filePaths = fs
    .readdirSync(dirPath, FILE_OPTIONS)
    .filter(file => !file.isFile() || !file.name.endsWith('.map'))
    .reduce((accumulated, current) => {
      const absolutePath = path.join(dir, current.name)
      logger.info(`Absolute path got ${absolutePath}`)
      return current.isFile()
        ? [...accumulated, absolutePath]
        : [...accumulated, ...getTypeFiles(absolutePath)]
    }, [] as string[])

  logger.info(`GraphQL types read from dir ${dir}: ${filePaths.length}`)

  return filePaths
}

function compileFiles<T>(list: string[], compile: (asset: string) => T) {
  logger.info('Compiling files', list)
  return list.map(compile)
}

type GqlResolver = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Query: any, Mutation: any, Subscription: any
}

const compileType: (file:string)=> DocumentNode = (file: string) => {
  const filePath = path.resolve(file)
  const node = fs.readFileSync(filePath, 'utf-8')
  logger.debug('Compiling file', filePath)
  return gql(node)
}

type GraphQLCompiledType = () => DocumentNode[]

export const loadTypes: GraphQLCompiledType = () => {
  return compileFiles<DocumentNode>(getTypeFiles('src/resources/graphql'), compileType)
}

export const loadResolvers = (useCaseModule: UseCaseModule): GqlResolver[] => [
  createPostResolver(useCaseModule.getPostsUseCase, useCaseModule.getPostByIdUseCase),
  createAuthorResolver(useCaseModule.getAuthorByIdUseCase),
]

