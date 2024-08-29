const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

// Endpoint to register a user with password encryption
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  try {
    // Generate salt and hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    // In a real application, you'd save the user and hashed password to the database here
    // For simplicity, we will just return the hashed password
    res.status(200).json({
        username: username,
        hashedPassword: hashedPassword,
      });
    } catch (error) {
      res.status(500).json({ error: 'Error registering user' });
    }
  });
  module.exports = router;  