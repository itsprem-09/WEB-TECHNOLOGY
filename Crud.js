const express = require('express');

const app = express();

app.use(express.json());

var students = [];

app.get('/display',(req,res)=>{
    res.send(students);
})

app.post('/display',(req,res)=>{
    const {name} = req.body;
    students.push(name);
    res.send(students);
})

app.put('/change/:index',(req,res)=>{
    const id = req.params.index;
    const {name} = req.body;

    students[id] = name;
    res.send(students);
})

app.delete('/delete/:index',(req,res)=>{
    const id = req.params.index;

    students.splice(id,1);
    res.send(students);
})

app.listen(9999,()=>{
    console.log('Server is Listing on @9999');
})