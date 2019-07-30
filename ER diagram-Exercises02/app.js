var mongoose = require('mongoose');
var database = require('./database');
var doctor = require('./doctor');
var patient = require('./patient');
var pharmacy = require('./pharmacy');
var company = require('./company');
var drug = require('./drug');

var Schema = mongoose.Schema;
database.init();

var callback = function(err,data){

  if(err)
    console.log(err);
  else
    console.log(data);

}
var doctor= new doctorModel({SSN:'',Name:'abc',speciality:'MBBS',YearOfExperience:5});
doctor.save(callback);

var patient = new patientModel({SSN:'',Name:"xyz",Adress:"point pedro",Age:"21"});
patient.save(callback);

var pharmacy = new pharmacyModel({Name:'',Address:'',PhoneNumber:1});
pharmacy.save(callback);

var drugs= new drugModel({Tradename:'',Formula:''});
drugs.save(callback);
