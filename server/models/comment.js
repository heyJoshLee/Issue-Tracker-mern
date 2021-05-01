import mongoose from 'mongoose';

const commentSchema= new mongoose.Schema({
  body: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 15000
  },
  userUsername: {
    type: String,
    require: true
  },
  objectType: {
    type: String,
    require: true
  },
  objectId: {
    type: String,
    require: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const comment = mongoose.model('Comment', commentSchema);
export default comment;