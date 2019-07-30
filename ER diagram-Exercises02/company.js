var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pharmacySchema= new Schema({
  Name:{type:String,index:true,unique:true,trim:true,required:true},
  PhoneNumber:{type:Number,default:}
},{collection:'company'});

companyModel = mongoose.model('Company',pharmacySchema);

module.exports={companyModel};
