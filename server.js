const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());
let classrooms = [];
let teachers = [];
let students = [];
app.get('/api/classrooms', (req, res) => res.json(classrooms));
app.post('/api/classrooms', (req, res) => {
    const { name, startTime, endTime, days } = req.body;
    const newClassroom = { name, startTime, endTime, days };
    classrooms.push(newClassroom);
    res.status(201).json(newClassroom);
});
app.get('/api/teachers', (req, res) => res.json(teachers));
app.post('/api/teachers', (req, res) => {
    const { name, email } = req.body;
    const newTeacher = { name, email };
    teachers.push(newTeacher);
    res.status(201).json(newTeacher);
});
app.get('/api/students', (req, res) => res.json(students));
app.post('/api/students', (req, res) => {
    const { name, email } = req.body;
    const newStudent = { name, email };
    students.push(newStudent);
    res.status(201).json(newStudent);
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

