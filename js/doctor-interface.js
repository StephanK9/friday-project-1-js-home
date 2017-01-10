var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(drFirstName, drLastName) {
  $('.showDoctors').text("The doctors for your symptom " + medicalIssue + " are " + drLastname);

  var doctors = drLastName.split(",");

  doctors.forEach(function(name){
    $('.showDoctors').apped(name + ", ");
  });
};

$(document).ready(function(){
  var doctorObject = new Doctor();
  $('#searchDoctor').click(function(){
    var currentDoctorObject = new Doctor();
    var medicalIssue = $('#symptom').val();
    $('#symptom').val("");
    doctorObject = currentDoctorObject.getDoctors(medicalIssue, displayDoctors);
  });
});
