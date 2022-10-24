const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());


const courses = require('./Data/courses.json');


app.get('/courses', (req, res) => {
    res.send(courses);
})



app.get('/', (req, res) => {
    res.send("Learner Academy is running Perfectly on F Drive")
})


app.listen(port, () => {
    console.log('Learner Academy is running on port', port)
})