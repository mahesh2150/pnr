var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  userName: {
    type: String
  },
  password: {
    type: String
  },
  email: {
    type: String
  },
  mobileNo: {
    type: Number
  },
 created_Date: {
    type: Date,
    default: Date.now
  },
  facebook:{
    id:String,
    token:String,
    email:String,
    name:String
  }
  
})

module.exports = mongoose.model('userDetails',userSchema);
