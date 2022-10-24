const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());


const courses = require('./Data/courses.json');
const courseDetails = require('./Data/courseDetails.json');

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedCourse = courses.find( course => course.id === id);
    res.send(selectedCourse);
})



app.get('/', (req, res) => {
    res.send("Learner Academy is running Perfectly on F Drive")
})


app.listen(port, () => {
    console.log('Learner Academy is running on port', port)
})