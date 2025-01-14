// this will be main file of project 

// require expres 
const express = require('express');

// require dotenv 
const dotenv = require('dotenv');

//load file dotenv 
dotenv.config();

// require router 
const apiRouter = require('./route/api');

// router auth 
const authRouter = require('./route/auth');

const cors = require('cors');

// const app 
const app = express();

// const port 
const port = process.env.PORT || 3000;
// const jwtSecret = process.env.JWT_SECRET;
// console.log(`test read dotenv: ${process.env.PORT}`);
// console.log(`Test file env port: ${port} and secret: ${jwtSecret}`);

// add middlewere
app.use(express.json());
app.use(cors());

// allow encode url 
// app.use(express.urlencoded({ extended: true }));

// use api router 
app.use('/api', apiRouter);

// use auth router 
app.use('/auth', authRouter);

// app listen 
app.listen(port, () => {
  console.log(`App is running at: http://localhost:${port}`)
})



















