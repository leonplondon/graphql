/* eslint-disable @typescript-eslint/no-non-null-assertion */

class ServerConfiguration {
  private readonly port: number

  constructor() {
    this.port = Number.parseInt(process.env.SERVER_PORT!, 10)
  }

  getPort() {
    return this.port
  }
}

export default new ServerConfiguration()
