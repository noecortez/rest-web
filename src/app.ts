import { readFileSync } from 'fs'
import http2, { Http2ServerRequest, Http2ServerResponse } from 'http2'

const PORT = 8080

const handleHttpRequest = (
  request: Http2ServerRequest,
  response: Http2ServerResponse
) => {
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

  try {
    const responseContent = readFileSync(`./public${request.url}`, 'utf-8')
    response.end(responseContent)
  } catch (error) {
    console.error(error)
    response.writeHead(404, { 'Content-Type': 'text/html' })
    response.end('<h1>404 Not Found</h1>')
  }
}

const server = http2.createSecureServer(
  {
    key: readFileSync('./keys/server.key'),
    cert: readFileSync('./keys/server.crt'),
  },
  handleHttpRequest
)

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
