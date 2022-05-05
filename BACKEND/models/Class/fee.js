const mongoose = require('mongoose');
const feeSchema = new mongoose.Schema({

Class_Type:{
  type:String,
  required:true
},

Subject:{
    type:String,
    required:true
},
Fee:{
    type:String,
    required:true
},
Date:{
  type:String,
  required:true
},
Special_Notes:{
  type:String,
  required:true
}


});

module.exports = mongoose.model('Fee',feeSchema);