import fs from 'node:fs'
import http from 'node:http'

const server = http.createServer()

server.on('request', (request, response) => {
    const result = fs.readFileSync('./test.txt')

    response.setHeader('Content-Type', 'text/plain')

    response.end(result)
})

server.listen(4080, '127.0.0.1', () => {
    console.log('server has started on: ', server.address())
})
