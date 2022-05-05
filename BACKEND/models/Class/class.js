const mongoose = require('mongoose');
const classSchema = new mongoose.Schema({

Class_Type:{
  type:String,
  required:true
},

Subject:{
    type:String,
    required:true
},
Teacher_Name:{
    type:String,
    required:true
},
Starting_Time:{
    type:String,
    required:true
},
Ending_Time:{
  type:String,
  required:true
},
Contact_Number:{
    type:String,
    required:true
},
Day:{
  type:String,
  required:true
}


});

module.exports = mongoose.model('Class',classSchema);