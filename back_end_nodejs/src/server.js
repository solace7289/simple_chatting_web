// this will be main file of project 

// require expres 
const express = require('express')

// require router 
const apiRouter = require('./route/api')
const cors = require('cors');

// const app 
const app = express();

// const port 
const port = 3000;

// add middlewere
app.use(express.json());
app.use(cors());

// allow encode url 
// app.use(express.urlencoded({ extended: true }));

// use api router 
app.use('/api', apiRouter);

// app listen 
app.listen(port, () => {
  console.log(`App is running at: http://localhost:${port}`)
})



















