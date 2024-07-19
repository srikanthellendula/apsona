const express = require('express');
const router = express.Router();
const db = require('../db/db'); // Adjust path as per your project
const bcrypt = require('bcrypt');

// Register route
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    db.run(`INSERT INTO users (username, email, password) VALUES (?, ?, ?)`,
      [username, email, hashedPassword],
      function(err) {
        if (err) {
          console.error('Error inserting data:', err.message);
          return res.status(500).json({ error: 'Failed to register user' });
        }
        console.log(`A row has been inserted with rowid ${this.lastID}`);
        res.status(200).json({ message: 'User registered successfully' });
      }
    );
  } catch (error) {
    console.error('Error hashing password:', error.message);
    res.status(500).json({ error: 'Failed to register user' });
  }
});

// Login route
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log(email, password)
  db.get(`SELECT * FROM users WHERE email = ?`, [email], async (err, user) => {
    if (err) {
      console.error('Error fetching data:', err.message);
      return res.status(500).json({ error: 'Failed to login user' });
    }

    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      res.status(200).json({
        message: 'Login successful',
        user: { id: user.id, username: user.username, email: user.email }
      });
    } else {
      res.status(400).json({ error: 'Invalid email or password' });
    }
  });
});

module.exports = router;
