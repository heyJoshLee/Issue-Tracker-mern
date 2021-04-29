import mongoose from 'mongoose';

const organizationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 120
  }
});

const organization = mongoose.model('Organization', organizationSchema);
export default organization;