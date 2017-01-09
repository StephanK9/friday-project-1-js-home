var apiKey = "f9040cfe6c7c460a034f37bc3a4311e7";

$(document).ready(function(){
  $('#searchDoctor').click(function(){
    var medicalIssue = $('#symptom').val();
    $('#symptom').val("");
    $('#showDoctors').text("The symptom you are looking up is " + medicalIssue + ".");
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=' + apiKey, function(response){
      console.log(JSON.stringify(response));
    });
  });
});
