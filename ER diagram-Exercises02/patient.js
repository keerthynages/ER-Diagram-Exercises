var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var patientSchema= new Schema({
  SSN:{type:String,index:true,unique:true,trim:true,required:true},
  Name:{type:String},
  Address:{type:String},
  Age:{type:Number}
},{collection:'patients'});

patientModel = mongoose.model('Patients',patientSchema);

module.exports={patientModel};
