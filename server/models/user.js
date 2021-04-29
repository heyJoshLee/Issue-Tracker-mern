import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 12
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100
  },
  email: {
    type: String,
    required: true,
    minlength: 3
  },
  organizationIds: {
    type: [String]
  }
});

const user = mongoose.model('User', userSchema);
export default user;