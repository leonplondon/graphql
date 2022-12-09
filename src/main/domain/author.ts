class Author {
 
  constructor(
    readonly id: number,
    readonly email: string,
    readonly name?: string,
    readonly username?: string,
    readonly website?: string,  
  ) {
  }
}

export default Author
