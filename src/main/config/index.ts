import * as dotEnv from 'dotenv'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const environment: string = process.env.NODE_ENV!

dotEnv.config({
  debug:  environment !== 'production',
  path: `.env.${environment}`,
})

