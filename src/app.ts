import http from 'http'

const PORT = 8080

const server = http.createServer((request, response) => {
  console.log('🚀 ~ server ~ request.url:', request.url)

  response.writeHead(200, { 'Content-Type': 'text/html' })
  response.write(`
    <h1>
        Welcome to path:
        <code style="color: gray;">${request.url}</code>
    </h1>
  `)
  response.end()
})

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
