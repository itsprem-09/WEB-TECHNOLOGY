const express = require('express');
const path = require('path');

const app = express()

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.send('HELLO');
})

// var cb0 = function (req,res,next) {
//     console.log('cb0');
//     next();
// }
// var cb1 = function (req,res,next) {
//     console.log('cb1');
//     next();
// }
// var cb2 = function (req,res,next) {
//     res.send('Hello From Cb');
// }

// app.get('/example/c',[cb0,cb1,cb2]);    

// var cb0 = function (req,res,next) {
//     console.log('cb0');
//     next();
// }
// var cb1 = function (req,res,next) {
//     console.log('cb1');
//     next();
// }

// app.get('/example/d',[cb0,cb1],function (req,res,next){
//     console.log('this response from functionn in d.');
//     next();
// } , function (req,res) { res.send('Hello From d');});

app.get('/user/:id', function (req, res,next){
    if (req.params.id == 0) {
        next('route');
    } else {
        next();
    }
}, function (req,res,next) {
    res.end('regular');
});

app.get('/user/:id',function (req,res,next) {
    res.send('special');
})

// app.use('/user/:id', function (req,res,next) {
//     console.log('Request : '+req.method);
//     next();
// })

// app.get('/user/:id', function (req,res,next) {
//     res.send('User');
// })


app.listen(9999,()=>{
    console.log('Sever is Listing....');
})