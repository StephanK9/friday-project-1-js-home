var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function(){
  $('#doctorSearch').click(function(){
    event.preventDefault();
    $(".showDoctors").show();
    var medicalIssue = $('#search').val();
    var doctor = new Doctor();
    doctor.getDoctors(medicalIssue);
  });
});
