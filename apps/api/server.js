// Import the framework and instantiate it
import Fastify from 'fastify'
import cors from '@fastify/cors'

const fastify = Fastify({
  logger: true
})

await fastify.register(cors, {
  // put your options here
})

fastify.get('/', async function handler (request, reply) {
  return { hello: 'world' }
})

fastify.get('/htmx-demo', async function handler (request, reply) {
  return { hello: 'world' }
})

// Run the server!
try {
  await fastify.listen({ port: 4000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}