import http from 'http'

const PORT = 8080

const server = http.createServer((request, response) => {
  console.log('🚀 ~ server ~ request.url:', request.url)

  response.write('Welcome to the App Rest Server!')
  response.end()
})

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
