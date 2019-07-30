var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pharmacySchema= new Schema({
  Name:{type:String,index:true,unique:true,trim:true,required:true},
  Address:{type:String},
  PhoneNumber:{type:Number,default:}
},{collection:'pharmacy'});

pharmacyModel = mongoose.model('Pharmacies',pharmacySchema);

module.exports={pharmacyModel};
