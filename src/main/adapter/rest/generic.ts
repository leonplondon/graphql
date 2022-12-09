class GenericAdapter {
  private readonly restUrl: string

  constructor(restUrl: string) {
    this.restUrl = restUrl
  }

  getResourcesUrl() {
    return this.restUrl
  }
  
  getResourceByIdUrl(id: string) {
    return this.restUrl.concat(id)
  }
}

export default GenericAdapter
