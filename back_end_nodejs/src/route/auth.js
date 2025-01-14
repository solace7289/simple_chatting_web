// authentication route 
const express = require('express');

const generateToken = require('../utils/generateToken');

const authMidddleware = require('../middleware/authMiddleware');

// require hashPassword
const { hashPassword } = require('../utils/hashPassword');
const authMiddleware = require('../middleware/authMiddleware');

// express.Router 
const router = express.Router();

// JWT_SECRET
const JWT_SECRET = 'rg-7PYk9Qhs4mtg60_OsgH5OOf9nGhCY-UbjpyrGfeHVfmmsI8l7c6gfuMnIz3KoF7-QieytY8CFnhJ4HljkXg';

// register route 
router.get('/register', async (req, res) => {
  const oriPass = "123123";

  const hashedPass = await hashPassword(oriPass);

  console.log(`Test hash password: ${hashedPass}`);

  res.json({
    hashP: hashedPass
  });
});

// login route 
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  const token = generateToken(username, JWT_SECRET, '24h');
  res.json({ token });

});

// protected route 
router.get('/protected', authMiddleware, (req, res) => {
  res.json({
    message: 'You have accessed!',
    user: req.user,
  });
});

// module exports
module.exports = router;















