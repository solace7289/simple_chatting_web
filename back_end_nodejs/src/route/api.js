// there will be contain all path and funtion of each path for api 

// require express
const express = require('express')

// require all function from apiController
const { getUsers, addUser } = require('../controller/apiController')

// const router from express.Router()
const router = express.Router();

// set path for function 
router.get('/user', getUsers);
router.post('/add-user', addUser);

// module export 
module.exports = router;





















