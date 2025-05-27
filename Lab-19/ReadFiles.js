const express = require('express');

const app = express();

const fs = require('fs');

app.get('/',(req,res)=>{
    res.send('Default Page')
})

app.get('/about',(req,res)=>{
    fs.readFile('About.txt',(err,data)=>{
        if (err) {
            console.log(err);
        }
        else{
            res.end(data);
        }
    })
})

app.get('/contact',(req,res)=>{
    fs.readFile('Contact.txt',(err,data)=>{
        if (err) {
            console.log(err);
        }
        else{
            res.end(data);
        }
    })
})

app.get('/home',(req,res)=>{
    fs.readFile('Home.txt',(err,data)=>{
        if (err) {
            console.log(err);
        }
        else{
            res.end(data);
        }
    })
})

app.listen(9999,()=>{
    console.log('Server Listining....');
})