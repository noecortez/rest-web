import http from 'http'

const PORT = 8080

const server = http.createServer((request, response) => {
  console.log('🚀 ~ server ~ request.url:', request.url)

  const data = { name: 'John Doe', age: 30, city: 'New York' }
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end(JSON.stringify(data))
})

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
