import mongoose from 'mongoose';

const stickyMessageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 120
  },
  body: {
    type: String
  },
  userUserName: {
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
  }
});

const stickyMessage = mongoose.model('StickyMessage', stickyMessageSchema);
export default stickyMessage;