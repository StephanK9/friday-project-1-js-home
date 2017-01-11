var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function(){
  var doctor = new Doctor();
  $('#searchDoctor').click(function(event){
    event.preventDefault();
    var medicalIssue = $('#symptom').val();
    var result = doctor.getDoctors(medicalIssue);
    });
  });
