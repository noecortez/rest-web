import { readFileSync } from 'fs'
import http from 'http'

const PORT = 8080

const server = http.createServer((request, response) => {
  console.log('🚀 ~ server ~ request.url:', request.url)

  if (request.url === '/') {
    const htmlFile = readFileSync('./public/index.html', 'utf-8')
    response.writeHead(200, { 'Content-Type': 'text/html' })

    response.end(htmlFile)
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' })
    response.end('<h1>404</h1>')
  }
})

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
