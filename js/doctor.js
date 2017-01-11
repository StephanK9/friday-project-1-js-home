var apiKey = require('./../.env').apiKey;

Doctor = function(){
}

Doctor.prototype.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function(result) {
    $('#showDoctors').empty();
    result.data.forEach(function(doctor) {
      var drFirstName = doctor.profile.first_name;
      var drLastName = doctor.profile.last_name;
      console.log(result);
      $('.showDoctors').append('<li><h2>Dr. ' + drFirstName + ' ' + drLastName + "</h2><ul id='" + drFirstName.toLowerCase() + "-" + drLastName.toLowerCase() + "'></ul></li>");
    });

  })
  .fail(function(error){
    $('#showDoctors').append('unknown error');
  });
};

exports.doctorModule = Doctor;
