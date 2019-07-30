var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var drugSchema= new Schema({
  Tradename:{type:String,index:true,unique:true,trim:true,required:true,ref:},
  Formula:{type:String},
  Price:{type:Number},
},{collection:'drugs'});

drugModel = mongoose.model('Drugs',drugSchema);

module.exports={drugModel};
