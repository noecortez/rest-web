import { readFileSync } from 'fs'
import http from 'http'

const PORT = 8080

const server = http.createServer((request, response) => {
  console.log('🚀 ~ server ~ request.url:', request.url)

  if (request.url === '/') {
    const htmlFile = readFileSync('./public/index.html', 'utf-8')
    response.writeHead(200, { 'Content-Type': 'text/html' })

    response.end(htmlFile)
    return
  }

  if (request.url?.endsWith('.js')) {
    response.writeHead(200, { 'Content-Type': 'application/javascript' })
  } else if (request.url?.endsWith('.css')) {
    response.writeHead(200, { 'Content-Type': 'text/css' })
  }

  const responseContent = readFileSync(`./public${request.url}`, 'utf-8')
  response.end(responseContent)
})

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
