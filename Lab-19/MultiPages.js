const express = require('express');

const app = express();

app.get('/home',(req,res)=>{
    res.send('Home Page');
})

app.get('/about',(req,res)=>{
    res.send('About Page');
})

app.get('/contact',(req,res)=>{
    res.send('Contact Page');
})

app.get('/',(req,res)=>{
    res.send('Default Page');
})

app.listen(9999,()=>{
    console.log('Server is Listining....');
})