const http = require('http')


const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end('Welcome to our home')
    }
    else if(req.url == '/about'){
        res.end('Here is our History')
    }
    else {res.end(`
    <h1>Oops!</h1>
    <p>We cant find the page you are looking for</p>
    <a href="/">Back Home</a>
    `)
    }
})

server.listen(5000)