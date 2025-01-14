// require jsonwebtoken
const jwt = require('jsonwebtoken');

// const generateToken
const generateToken = ( userId, secret, expiresIn ) => {
  // user method sign to create jwt 
  return jwt.sign({id: userId}, secret, { expiresIn });
}

// export module 
module.exports = generateToken;















