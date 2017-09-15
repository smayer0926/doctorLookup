var apiKey = require('./../.env').apiKey;

import { Doctor } from './../js/doctorlookup.js';

$(function(){
  $("#doctorForm").submit(function(e){
    e.preventDefault();
    let problem = $("#problem").val();
    let doctorName = $("#doctorName").val();

    Doctor.apiRequestForDoctors(problem, displayDoctors);

    function displayDoctors(doctors){
      if(doctors.length === 0){
        $("#noDoc").text("There are no Doctors matching this search, please try again")
      }
      else{
       doctors.forEach(function(doctorInfo){
         console.log(doctorInfo.photo)
         $("#output").append("<div class=panel-panel>" +  "<img src="+ doctorInfo.photo + "</>"+ "</br>"+ "<div class='panel-heading'"+ '<h3>' + doctorInfo.first_name + " " + doctorInfo.last_name + ", " + doctorInfo.title + '</h3>' + "</div>" + "<br>" + "<div class='panel-body'>" + "Address: " + doctorInfo.streetAddress + ", "+ doctorInfo.city + ", " + doctorInfo.state + " " + doctorInfo.zip + "<br>" + "Phone Number: " + doctorInfo.phone + "<br>" + "Accepting New Patients: " + doctorInfo.newPatients + "</div>" + "</div>");

         })

       }
     }
  });
  $("#doctorNameForm").submit(function(e){
    e.preventDefault();
    let doctorName = $("#doctorName").val();
    Doctor.apiRequestBasedOnDoctorsName(doctorName, displayDoctors)

    function displayDoctors(doctors){
      if(doctors.length === 0){
        $("#noDoc").text("There are no Doctors matching this search, please try again")
      }
      else{
       doctors.forEach(function(doctorInfo){
         console.log(doctorInfo.photo)
         $("#output").append("<div class=panel-panel>" +  "<img src="+ doctorInfo.photo + "</>"+ "</br>"+ "<div class='panel-heading'"+ '<h3>' + doctorInfo.first_name + " " + doctorInfo.last_name + ", " + doctorInfo.title + '</h3>' + "</div>" + "<br>" + "<div class='panel-body'>" + "Address: " + doctorInfo.streetAddress + ", "+ doctorInfo.city + ", " + doctorInfo.state + " " + doctorInfo.zip + "<br>" + "Phone Number: " + doctorInfo.phone + "<br>" + "Accepting New Patients: " + doctorInfo.newPatients + "</div>" + "</div>");

         })
       }
     }
     });
    $("#output").text("<a href=https://betterdoctor.com>"+'Powered by Better Doctor'+"</a>")
    $("input").val("");
    $("#output").empty()


});
