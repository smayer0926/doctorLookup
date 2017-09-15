var apiKey = require('./../.env').apiKey;

import { Doctor } from './../js/doctorlookup.js';

$(function(){
  //Drop Down
  // Doctor.apiRequestForSpecialitys();
  //
  // function dropDown(speciality){
  //   speciality.forEach(speciality, function(list){
  //     $("#dropDown").append($('<option></option>').val(speciality[list]));
  //   })
  // };

  $("#doctorForm").submit(function(e){
    e.preventDefault();
    let problem = $("#problem").val();
    let doctorName = $("#doctorName").val();

    Doctor.apiRequestForDoctors(problem, displayDoctors);


    function displayDoctors(doctors){
      if(doctors.length === 0){
        $("#noDoc").append("There are no Doctors matching this search, please try again")
      }
      else{
       doctors.forEach(function(doctorInfo){
         $("#noDoc").empty();
         $("#output").append("<div class=panel-panel>" +  "<img src="+ doctorInfo.photo + "</>"+ "</br>"+ "<div class='panel-heading'"+ '<h3>' + doctorInfo.first_name + " " + doctorInfo.last_name + ", " + "</br>" + doctorInfo.title + '</h3>' + "</div>" + "<br>" + "<div class='panel-body'>" + "Address: " + doctorInfo.streetAddress + ", "+ doctorInfo.city + ", " + doctorInfo.state + " " + doctorInfo.zip + "<br>" + "Phone Number: " + doctorInfo.phone + "<br>" + "Accepting New Patients: " + doctorInfo.newPatients + "</div>" + "</div>");

         })
       }
     }
     $("input").val("");
     $("#output").empty();
     $("#noDoc").empty();
  });
  $("#doctorNameForm").submit(function(e){
    e.preventDefault();
    let doctorName = $("#doctorName").val();
    Doctor.apiRequestBasedOnDoctorsName(doctorName, displayDoctors)

    function displayDoctors(doctors){
      if(doctors.length === 0){
        $("#noDoc").append("There are no Doctors matching this search, please try again")
      }
      else{
       doctors.forEach(function(doctorInfo){
         $("#noDoc").empty();
         $("#output").append("<div class=panel-panel>" +  "<img src="+ doctorInfo.photo + "</>"+ "</br>"+ "<div class='panel-heading'"+ '<h3>' + doctorInfo.first_name + " " + doctorInfo.last_name + ", " + doctorInfo.title + '</h3>' + "</div>" + "<br>" + "<div class='panel-body'>" + "Address: " + doctorInfo.streetAddress + ", "+ doctorInfo.city + ", " + doctorInfo.state + " " + doctorInfo.zip + "<br>" + "Phone Number: " + doctorInfo.phone + "<br>" + "Accepting New Patients: " + doctorInfo.newPatients + "</div>" + "</div>");

         })
       }
     }
    $("#output").append('<a href=' + "https://betterdoctor.com" + '>' + "Powered by Better Doctor" + '</a>')
     $("input").val("");
     $("#output").empty();
     $("#noDoc").empty();

   });
});
