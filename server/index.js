import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

// ROUTES IMPORT
import userRoutes from './routes/users.js';
import projectRoutes from './routes/projects.js';
import authRoutes from './routes/auth.js';
import organizationRoutes from './routes/organizations.js';
import stickyMessageRoutes from './routes/stickyMessages.js'; 
import commentRoutes from './routes/comments.js'; 
import issueRoutes from './routes/issues.js';

dotenv.config();
const app = express();

app.use(cors());
// @ts-ignore
app.use(bodyParser.json({ limit: '30mb', extended :true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended :true }))

// ROUTES
app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/organizations', organizationRoutes);
app.use('/organizations/:id/projects', projectRoutes);
app.use('/organizations/:orgId/projects/:projectId/issues', issueRoutes);
app.use('/stickyMessages', stickyMessageRoutes); 
app.use('/comments', commentRoutes); 


// CONNECT TO MONGO DB
const CONNECTION_URL = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`)
  }))
  .catch((error) => console.log(error.message));

  mongoose.set('useFindAndModify', false);