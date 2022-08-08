const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define collection and schema
const Student = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  cohort: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  }
}, {
  collection: 'students'
});


const students = mongoose.model('Student', Student);

module.exports = students;


