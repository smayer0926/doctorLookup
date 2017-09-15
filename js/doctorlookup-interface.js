var apiKey = require('./../.env').apiKey;

import { Doctor } from './../js/doctorlookup.js';

$(function(){
  $("#doctorForm").submit(function(e){
    e.preventDefault();
    let problem = $("#problem").val();
    let doctorName = $("#doctorName").val();

    Doctor.apiRequestForDoctors(problem, displayDoctors);
    // Doctor.apiRequestBasedOnDoctorsName(doctorName, displayDoctors)

    function displayDoctors(doctors){
      if(doctors.length === 0){
        $("#output").text("There are no Doctors matching this search, please try again")
      }
      else{
       doctors.forEach(function(doctorInfo){
             console.log(doctorInfo.photo)
         $("#output").append("<div class=col-md-4>" +  "<img src="+ doctorInfo.photo + "</>"+ "</br>"+ doctorInfo.first_name + " " + doctorInfo.last_name + ", " + doctorInfo.title + "<br>" + "Address: " + doctorInfo.streetAddress + ", "+ doctorInfo.city + ", " + doctorInfo.state + " " + doctorInfo.zip + "<br>" + "Phone Number: " + doctorInfo.phone + "<br>" + "Accepting New Patients: " + doctorInfo.newPatients + "</div>");

         })

       }
     }
    $("#output").text("<a href=https://betterdoctor.com>Powered by Better Doctor</a>")
    $("input").val("");
    $("#output").empty()
  });
  $("#doctorNameForm").submit(function(e){
    e.preventDefault();
    let doctorName = $("#doctorName").val();
    Doctor.apiRequestBasedOnDoctorsName(doctorName, displayDoctors)

    function displayDoctors(doctors){
      if(doctors.length === 0){
        $("#output").text("There are no Doctors matching this search, please try again")
      }
      else{
       doctors.forEach(function(doctorInfo){
             console.log(doctorInfo.photo)
         $("#output").append("<div class=col-md-4>" +  "<img src="+ doctorInfo.photo + "</>"+ "</br>"+ doctorInfo.first_name + " " + doctorInfo.last_name + ", " + doctorInfo.title + "<br>" + "Address: " + doctorInfo.streetAddress + ", "+ doctorInfo.city + ", " + doctorInfo.state + " " + doctorInfo.zip + "<br>" + "Phone Number: " + doctorInfo.phone + "<br>" + "Accepting New Patients: " + doctorInfo.newPatients + "</div>");

         })

       }
     }
    $("#output").text("<a href=https://betterdoctor.com>Powered by Better Doctor</a>")
    $("input").val("");
    $("#output").empty()

});
});
