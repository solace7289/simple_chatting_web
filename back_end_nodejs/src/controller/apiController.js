// there will be contain all function of api 

// require mysql2
const pool = require('../config/connectionDB');


// function: get all user (have req and res as param ) 
const getUsers = async (req, res) => {
  
  const [rows, fields] = await pool.execute(`select username, role, email from users`);

  res.status(200).json({
    message: 'Api get all user have called',
    data: rows 
  })
}

// add new user 
const addUser = async (req, res) => {

  //mapping data from request 
  let { username, password, role, email } = req.body;

  const query = 'insert into `users`(`username`, `password`, `role`, `email`) values(?, ?, ?, ?)';
  const values = [username, password, role, email];

  try {
    const [rows, fields] = await pool.execute(query, values);
    res.status(200).json({
      message: 'A new user have been added!',
      result: rows
    });

  } catch (error) {
    console.log(error); 
  } 
  
 }

// module export
module.exports = {
  getUsers,
  addUser,
}



















