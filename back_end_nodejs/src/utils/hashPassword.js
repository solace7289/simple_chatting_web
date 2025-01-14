// this will contain function to hash and decode password 
const bcrypt = require('bcryptjs'); 

// function hash password 
async function hashPassword (password) {
  const salt = await bcrypt.genSalt(10);   
  return await bcrypt.hash(password, salt);
}

// function decode password 
async function comparePassword(enteredPassword, hashedPassword) {
  return await bcrypt.compare(enteredPassword, hashPassword);
}

// module exports
module.exports = {
  hashPassword,
  comparePassword,
};

















