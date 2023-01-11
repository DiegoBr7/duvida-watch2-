import http from 'node:http'

// const server = http.createServer((req,res)=>{
//   return res.end('Hello World')
// })
// server.listen(3333)

// -----------------AULA-2----------------

const server = http.createServer(()=>{
  const {method , url} = req

  console.log(method , url)

  return resizeBy.end('Hello World')

})

server.listen(3333)