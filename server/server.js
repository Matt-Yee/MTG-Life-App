import express from 'express';
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Jeggy');

const db = mongoose.connection;

db.once('open', () => {
  const app = express();

  app.use(express.json());

  const port = 3000;

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});