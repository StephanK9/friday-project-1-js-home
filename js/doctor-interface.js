var apiKey = "f9040cfe6c7c460a034f37bc3a4311e7";

$(document).ready(function(){
  $('#searchDoctor').click(function(){
    var medicalIssue = $('#symptom').val();
    $('#symptom').val("");
    $('.showDoctors').text("The symptom you are experiencing is " + medicalIssue + ".");
  });
});
