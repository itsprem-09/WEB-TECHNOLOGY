const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url);
    if (req.url === '/about' ) {
        res.end('About Page')
    }
    else if (req.url === '/home') {
        res.end('home page')
    }
    else if (req.url === '/contact') {
        res.end('Contact Page')
    }
    else{
        res.end('Hello World');
    }
})

const port = 9999;

server.listen(port,()=>{
    console.log('Server Listening');
})