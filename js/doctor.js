var apiKey = require('./../.env').apiKey;

function Doctor(name){
  this.name = name;
}

var search = new Doctors();

Doctor.prototype.getDoctor = function(medicalIssue, doctorData){
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=' + apiKey).then(function(response){
    if(response.Response == 'True') {
      results(name, response.profile.first_name);
      return doctorObject;
    } else if(response.Response == 'False') {
      $('.showDoctors').text(response.Error);
    } else {
      $('.showDoctors').text('fuck you');
    }
  });
};

exports.doctorModule = Doctor;
