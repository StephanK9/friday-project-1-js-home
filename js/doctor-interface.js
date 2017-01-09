var apiKey = require('./../.env').apiKey;

var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function(){
  var currentDoctorObject = new Doctor();
  currentDoctorObject.getDoctor();
})

$(document).ready(function(){
  $('#searchDoctor').click(function(){
    var medicalIssue = $('#symptom').val();
    $('#symptom').val("");

    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=' + apiKey).then(function(response){
      $('.showDoctors').append("<li>" + response.profile + "</li>");
    }).fail(function(error){
      $('.showDoctors').text(error.responseJSON.message);
    });
  });
});
