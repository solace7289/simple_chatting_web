// require jwt 
const jwt = require('jsonwebtoken');

// JWT_SECRET
const JWT_SECRET = 'rg-7PYk9Qhs4mtg60_OsgH5OOf9nGhCY-UbjpyrGfeHVfmmsI8l7c6gfuMnIz3KoF7-QieytY8CFnhJ4HljkXg';

// const authMiddleware 
const authMiddleware = (req, res, next) => {
  // get token from request 
  const token = req.headers.authorization?.split(' ')[1];
  
  // check req.headers.authoriztion has token or not 
  if (!token) {
    res.status(401).json({
      message: "No token provided!"
    });
  }

  // try: decode token 
  try {
    // decode token by function verify
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log(`Test decoded: ${decoded.id} `);

    // set response user equal to decoded
    res.user = decoded;

    // then continue to handle request if it's right token 
    next();
  } catch (error) {
    res.status(401).json({
      message: "Invalid token!", 
    })
  }

}

// module exports
module.exports = authMiddleware;
















