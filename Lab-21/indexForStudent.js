const express = require('express');
const mongoose = require('mongoose');
const Student = require('./student');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();


const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@labmanual.2iz5a.mongodb.net/LabManual`;
mongoose.connect(dbUrl).then(() => {
    console.log('Database Connected !!');

    const app = express();

    app.use(bodyParser.urlencoded());
    app.use(cors());

    app.get('/students', async (req,res) => {
        const data = await Student.find();
        res.send(data);
    });

    app.get('/students/:id',async (req,res) => {
        const data = await Student.findOne({rollNo : req.params.id});
        if (data) {
            res.send(data);
        }
        else{
            res.send('DATA NOT FOUND');
        }
    })

    app.post('/students', async (req,res) => {
        const stu = new Student({...req.body});
        const ans = await stu.save();
        res.send(ans);
    })

    app.delete('/students/:id', async (req,res) => {
        const ans = await Student.deleteOne({rollNo:req.params.id});
        res.send(ans);
    })

    // app.patch('/students/:id', async (req,res) => {
    //     const stu = await Student.findOne({rollNo:req.params.id});
    //     stu.name = req.body.name;
    //     const ans = await stu.save();
    //     res.send(ans);
    // })

    app.patch('/students/:id', async (req,res) => {
        //in url id which is _id 
        let id = req.params.id;
        let data = req.body;
        let stu = await Student.findByIdAndUpdate(id,data);

        // if you want to show updated student on response
        // stu = await Student.findById(id);
        res.send(stu);
    })

    app.get('/students/search/:name', async (req,res) => {
        let stu = await Student.findOne({name :{ $regex:req.params.name}});
        res.send(stu);
    });

    app.get('/students/search/:minAge/:maxAge', async (req, res) => {
        const { minAge, maxAge } = req.params;
      
        // Regular expression to check if input is a number
        const numberRegex = /^\d+$/;
      
        // Validate URL parameters with regex
        if (!numberRegex.test(minAge) || !numberRegex.test(maxAge)) {
          return res.status(400).send('minAge and maxAge must be positive integers');
        }
      
        const min = parseInt(minAge, 10);
        console.log('MIn : '+min);
        const max = parseInt(maxAge, 10);
        console.log('mAX : '+max);
      
        // Ensure min is less than or equal to max
        if (min > max) {
          return res.status(400).send('minAge must be less than or equal to maxAge');
        }
      
        const filteredStudents = await Student.find({ age :{$gte: min, $lte: max }});
        res.send(filteredStudents);
      });

    
    app.listen(process.env.PORT,() => {
        console.log('Server Started... on http://localhost:'+process.env.PORT+"/");
    })

});