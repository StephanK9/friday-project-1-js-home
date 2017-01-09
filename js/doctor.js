function Doctor(){
}

Doctor.prototype.getDoctor = function(){
  console.log("Hi! I'm your doctor object.");
}

exports.doctorModule = Doctor;
