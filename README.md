# Learner Academy
Learner Academy is a online platform which provide different courses related to computer science and programming languages. There are some courses added in this project. A user can easily select a course based on his interest and can get the premium access also if he logged in. There are many other features also which is described below.

This website is made by using React Router DOM, Firebase authentication is the major part of this project. Besides React Bootstrap is used for the styling purpose. Custom css is used where necessary. React toastify and sweet alert is added to show the alerts for better user experience.

This is project is basically divided in two parts. 
- Client Side
- Server Side

Here only the server side will be described only.
- As this project is about online course providing for the students, I needed much data regarding the courses and course details. Fo that I have used node.js and express.js for the server purpose. I have created many data according to the courses and all the data are fetch from the client side. there is no static data in this project.

## Make Courses Data
- As this ia project which needs many data regarding to the course and course details, so I have made the data into two files.
- One file(courses.json) contains the data about the course id, course name, course image
- The other data file (curseDetails.json) contains all the detailed information about the individual course
- course details data contains course duration, course fee, instructor name, instructor image, course description, rating, enrolled students etc
- I have hosted all the data to vercel and fetch the data when needed from the client side
- To process the course data of each course based on the course id I have used .find method on the index.js file.
- As I have single course details in my data set(means each curse is unique and has its own details) so that to get the course details based on course id i have also used here .find method (as I have to get only 1 course details)



### GitHub Link (Client Side) of This Project: 
Github Link Client Side: https://github.com/Fahimsakib1/learner-academy-client

### Firebase Hosting Live Website Link:
Live Site: https://learner-academy.web.app