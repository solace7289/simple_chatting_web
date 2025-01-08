// there will be contain alll funtion of api controller should have 

// function with req and res 
const getUsers = (req, res) => {
  res.status(200).json({
    message: "Api get all user have been called!",
    data: {
      username: 'amdin',
      role: 'ADMIN'
    }
  })
}

// module export
module.exports = {
  getUsers,
}




















