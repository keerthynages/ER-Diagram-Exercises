var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var doctorSchema= new Schema({
  SSN:{type:String,index:true,unique:true,trim:true,required:true},
  Name:{type:String},
  Speciality:{type:String},
  YearOfExperience:{type:Number}
},{collection:'doctors'});

doctorModel = mongoose.model('Doctors',doctorSchema);

module.exports={doctorModel};
