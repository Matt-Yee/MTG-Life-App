import express from 'express';
import mongoose from 'mongoose';
import authRouter from './api/authRouter.js';

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Jeggy');

const db = mongoose.connection;

db.once('open', () => {
  const app = express();

  app.use(express.json());
  app.use('/auth', authRouter);


  const port = 3000;

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});