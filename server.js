const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const app = express();
app.use(cors({
  origin: 'http://localhost:3000', 
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type'
}));
app.use(bodyParser.json());
const PORT = process.env.PORT || 5000;
let classrooms = [];
app.get('/api/classrooms', (req, res) => {
  res.json(classrooms);
});
app.post('/api/classrooms', (req, res) => {
  const { name, startTime, endTime, days } = req.body;
  const newClassroom = { name, startTime, endTime, days };
  classrooms.push(newClassroom);
  res.status(201).json(newClassroom);
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


