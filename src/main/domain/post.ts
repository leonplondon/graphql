class Post {
  private readonly id: number
  private readonly body: string
  private readonly title: string
  private readonly userId: number

  private validated: boolean | undefined

  constructor(id: number, body: string, title: string, userId: number) {
    this.id = id
    this.body = body
    this.title = title
    this.userId = userId
  }

  setValidated(validated: boolean): Post {
    if (this.validated == validated) {
      throw new Error('No changes on validated value')
    }

    this.validated = validated
    return this
  }
}

export default Post
