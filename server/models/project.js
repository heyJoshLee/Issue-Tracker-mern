import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 120
  },
  organizationName: {
    type: String,
    required: true
  }
});

const project = mongoose.model('Project', projectSchema);
export default project;