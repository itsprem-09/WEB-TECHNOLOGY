const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    console.log(req.url);
    // res.write('<a href="./home.html"><button>Home</button></a>');
    // res.write('<a href="./contact.html"><button>Contact</button></a>');
    // res.write('<a href="./about.html"><button>About Us</button></a>');
    if (req.url === '/about') {
        fs.readFile('about.html',(err,data)=>{
            if (err) {
                res.end(err)
            }
            else{
                res.end(data)
            }
        })
    }
    else if (req.url == '/contact') {
        fs.readFile('contact.html',(err,data)=>{
            if (err) {
                res.end(err)
            }
            else{
                res.end(data)
            }
        })
    }
    else if (req.url == '/about') {
        fs.readFile('about.html',(err,data)=>{
            if (err) {
                res.end(err)
            }
            else{
                res.end(data)
            }
        })
    }

    else{
        fs.readFile('home.html',(err,data)=>{
            if (err) {
                res.end(err)
            }
            else{
                res.end(data)
            }
        })
    }
})

const port = 9999;

server.listen(port,()=>{
    console.log('Server Listening');
})