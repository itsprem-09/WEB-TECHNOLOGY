const express = require('express');

const app = express();

app.use(express.json());

var students = [
    {
        "id":1023,
        "name":"prem",
        "course":"cse",
        "spi":9.46
    }
];

app.get('/students',(req,res)=>{
    res.send(students);
})


app.post('/students',(req,res)=>{
    const tempStudent = req.body;
    students.push(tempStudent);
    res.send(students);
})

app.put('/students/:id',(req,res)=>{
    const idToEdit = students.findIndex((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });
    const bodyObj = req.body;
    students[idToEdit] = {...students[idToEdit],...bodyObj};
    res.send(students);
})

app.delete('/students/:id',(req,res)=>{
    const idToEdit = students.findIndex((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });
    students.splice(idToEdit,1);
    res.send(students);
})


app.listen(9999,()=>{
    console.log('Server is Running on 9999');
})



