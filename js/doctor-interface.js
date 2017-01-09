

var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function(){
  var currentDoctorObject = new Doctor();
  $('#searchDoctor').click(function(){
    var medicalIssue = $('#symptom').val();
    $('#symptom').val("");
    var doctor = currentDoctorObject.getDoctor(medicalIssue);
    $('.showDoctors').text("The doctors for your symptom: " + medicalIssue + " are " + doctor + "%");
    console.log(doctor);
  });
});
