const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());

const students = [
    {
        id:1083,
        name:'devansh',
        email:'devansh@darshan.ac.in',
        age:26
    },
    {
        id:1291,
        name:'deep',
        email:'deep@darshan.ac.in',
        age:62
    }
];

//getAllX
app.get('/students',(req,res)=>{
    res.send(students);
})

//getXByID
app.get('/students/:id',(req,res)=>{
    const ans = students.find(stu=>stu.id==req.params.id);
    res.send(ans);
});

//Create
app.post('/students',(req,res)=>{
    students.push(req.body);
    res.send(students);
});

app.patch('/students/:id',(req,res)=>{
    const idToEdit = students.findIndex((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });
    students[idToEdit] = req.body;
    res.send("student updated");
});

app.delete('/students/:id',(req,res)=>{
    const idToEdit = students.findIndex((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });
    if (idToEdit == -1) {
        res.send('Students not Found')
        return;
    }
    students.splice(idToEdit,1);
    res.send(students);
});



app.listen(9999,()=>{
    console.log("Server started at 9999");
})