// there will be contain all function of api 

// require mysql2
const pool = require('../config/connectionDB');


// function: get all user (have req and res as param ) 
const getUsers = async (req, res) => {
  
  const [rows, fields] = await pool.execute(`select * from users`);

  res.status(200).json({
    message: 'Api get all user have called',
    data: rows 
  })
}

// module export
module.exports = {
  getUsers,
}



















