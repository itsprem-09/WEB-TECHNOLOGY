const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name : String,
    rollNo : Number,
    age : Number
});

const Student = mongoose.model('Student',schema);

module.exports = Student;

