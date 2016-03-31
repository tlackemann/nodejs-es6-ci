import Hapi from 'hapi'
import config from 'config'
import Log from './log'

const log = new Log('nodejs-app')

const server = new Hapi.Server()
server.connection({
  port: process.env.PORT || config.get('app.port'),
})

log.info('Starting server ...')
log.info({ environment: process.env }, 'Environment: %s', process.env.NODE_ENV)

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply({
      message: 'Hello, ElasticBeanstalk!',
    })
  }
})

// Run!
if (!module.parent) {
  server.start((err) => {
    if (err) {
      log.error('Could not start server: %s', err)
      process.exit(1)
    }
    log.info('Server running at %s', server.info.uri)
  })
}

module.exports = server
