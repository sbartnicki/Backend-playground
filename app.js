const http = require('http')

const server = http.createServer(function (req, res) {
  if (req.url === '/') {
    res.write('Hello world')
    res.end()
  }
  if (req.url === '/api/courses') {
    res.write('courses here')
    res.end()
  }
})

server.listen(3000)

console.log('listening on port 3000')
