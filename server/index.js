const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// In-memory user list (for now, not saved to a database)
const users = [];

// 🔐 LOGIN endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  console.log('Login attempt:', email, password);

  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

// 🆕 SIGNUP endpoint
app.post('/signup', (req, res) => {
  const { email, password } = req.body;

  // Check if email already exists
  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    return res.status(409).json({ message: 'User already exists' });
  }

  // Save new user
  users.push({ email, password });
  console.log('New user registered:', email);

  res.status(201).json({ message: 'Signup successful. You can now log in.' });
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
