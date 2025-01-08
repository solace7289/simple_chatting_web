//there will be contain all path and function for each api path 

// require express
const express = require('express')

// require all function from apiController
const { getUsers } = require('../controller/apiController')

// const router 
const router = express.Router();

// set api path and function for each
router.get('/user', getUsers)

//module export 
module.exports = router;




















