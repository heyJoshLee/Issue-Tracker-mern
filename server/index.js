import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

// ROUTES IMPORT
import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';
import authRoutes from './routes/auth.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended :true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended :true }))

// ROUTES
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/auth', authRoutes);

// CONNECT TO MONGO DB
const CONNECTION_URL = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`)
  }))
  .catch((error) => console.log(error.message));

  mongoose.set('useFindAndModify', false);