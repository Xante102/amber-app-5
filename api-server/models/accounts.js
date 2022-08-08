const mongoose = require ('mongoose');

const Schema = mongoose.Schema;
 
// Define collection and schema
const Account = new Schema({
  accNumber: {
    type: Number,
  },
  bank: {
    type: String,
  },
  branch: {
    type: String,
  },
  accType: {
    type: String,
  },
  status: {
    type: Boolean,
  },
  studentId: {
    type: String,
  }
}, {
  collection: 'accounts'
});


const accounts = mongoose.model('accounts', Account);

module.exports = accounts;


