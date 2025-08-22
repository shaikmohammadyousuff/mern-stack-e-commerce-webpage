let http = require('http')

let server = http.createServer((req,res)=>{
    console.log('server is running on port 3000');
    res.write('hello')
    res.end()
})
server.listen(3000)