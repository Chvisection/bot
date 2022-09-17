const Eris = require('chvisection-eris')
const http = require('http')

const client = new Eris(process.env.TOKEN)

client.connect()
console.log('Connected!')

http
  .createServer((_req, res) => res.end('Hello World!'))
  .listen(3000)