// there will be contain all function of api 

// function: get all user (have req and res as param ) 
const getUsers = (req, res) => {
  res.status(200).json({
    message: 'Api get all user have called',
    data: {
      username: 'admin01',
      role: 'ADMIN',
      email: 'amdin01@gmail.com'
    }
  })
}

// module export
module.exports = {
  getUsers,
}



















