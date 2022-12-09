import * as path from 'path'
import * as winston from 'winston'

const createLogger = (artifact: string) => winston
  .createLogger({
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.label({ label: path.basename(artifact) }),
    ),
    exitOnError: false,
    level: process.env.LOG_LEVEL || 'info',
    transports: [
      new winston.transports.Console({
        level: process.env.LOG_LEVEL || 'verbose',
        format: winston.format.combine(
          process.env.NODE_ENV !== 'production'
            ? winston.format.cli()
            : winston.format.json(),
        ),
      }),
      new winston.transports.File({
        level: process.env.LOG_LEVEL || 'silly',
        filename: 'app.log',
        format: winston.format.combine(
          winston.format.logstash(),
        ),
      }),
    ],
  })

export default createLogger
