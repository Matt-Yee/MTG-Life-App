import express from 'express';
const router = express.Router();
import User from '../schemas/user.js';
import jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';

router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  const user = new User({ username, email, password });
  try {
    await user.save();
    res.status(200).json({ message: 'Signed up!' });
  } catch (err) {
    res.status(500).json({ error: 'Error signing up' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({ error: 'No user with that email' });
      return;
    }
    const isCorrectPassword = await user.isCorrectPassword(password);
    if (!isCorrectPassword) {
      res.status(401).json({ error: 'Incorrect password' });
      return;
    }
    const token = jwt.sign({ email }, process.env.SECRET, { expiresIn: '1d' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Error logging in' });
  }
});

export default router;