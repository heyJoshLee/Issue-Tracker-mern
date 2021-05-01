import mongoose from 'mongoose';

const issueSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 120
  },
  body: {
    type: String
  },
  priority: {
    type: Number,
    require: true
  },
  status: {
    type: String,
    require: true
  },
  userUsername: {
    type: String,
    required: true
  },
  projectProjectTitle: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const issue = mongoose.model('Issue', issueSchema);
export default issue;