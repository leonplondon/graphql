/* eslint-disable @typescript-eslint/no-non-null-assertion */

class RestServiceConfiguration {
  private readonly authorsUrl: string
  private readonly postsUrl: string

  constructor() {
    const apiUrl = process.env.URL_API!
    this.authorsUrl = `${apiUrl}${process.env.AUTHORS_ENDPOINT!}`
    this.postsUrl = `${apiUrl}${process.env.POSTS_ENDPOINT!}`
  }

  getPostsUrl() {
    return this.postsUrl
  }

  getAuthorsUrl() {
    return this.authorsUrl
  }
}

export default new RestServiceConfiguration()
