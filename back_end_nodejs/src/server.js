// this is main file of project 

//require express
const express = require('express')

// require router
const apiRouter = require('./route/api');

// const app and port of project 
const app = express();
const port = 3000;

// set midderware
app.use(express.json());

// use router and path start with: /api 
app.use('/api', apiRouter);

// app listen
app.listen(port, () => {
  console.log(`App is running at: http://localhost:${port}`)
})





















