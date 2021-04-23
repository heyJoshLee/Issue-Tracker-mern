import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 120
  },
  body: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 10000
  },
  userUsername: {
    type: String,
    required: true
  }
});

const post = mongoose.model('Post', postSchema);
export default post;