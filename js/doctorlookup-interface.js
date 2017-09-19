var apiKey = require('./../.env').apiKey;

import { Doctor } from './../js/doctorlookup.js';

$(function(){

  Doctor.apiRequestForSpecialitys(newDropDown);

  function displayDoctors(doctors){
    if(doctors.length === 0){
      return $("#noDoc").append("There are no Doctors matching this search, please try again")
    }
    else{
     doctors.forEach(function(doctorInfo){
       $("#noDoc").empty();
       console.log(doctorInfo.photo)
        return $("#output").append("<div class='panel-panel'>" +  "<img src='" + doctorInfo.photo + "'</>" + "</br>"+ "<div class='panel-heading'>"+ '<h3>' + doctorInfo.first_name + " " + doctorInfo.last_name + ", " + doctorInfo.title + '</h3>' + "</div>" + "<br>" + "<div class='panel-body'>" + "Address: " + doctorInfo.streetAddress + ", "+ doctorInfo.city + ", " + doctorInfo.state + " " + doctorInfo.zip + "<br>" + "Phone Number: " + doctorInfo.phone + "<br>" + "Accepting New Patients: " + doctorInfo.newPatients + "</div>" + "</div>");
       })

     }
   }

  function newDropDown(speciality){
    speciality.forEach(function(list){
      $("#dropDown").append('<option>' + list.speciality + '</option>');
    })
  };
  $("#dropDownForm").submit(function(e){
    e.preventDefault();
    let dropDown = $("#dropDown").val();

    Doctor.apiRequestForDoctors(dropDown, displayDoctors);
    this.displayDoctors();

     $("input").val("");
     $("#output").empty();
     $("#noDoc").empty();

  })
  $("#doctorForm").submit(function(e){
    e.preventDefault();
    let problem = $("#problem").val();
    let doctorName = $("#doctorName").val();

    Doctor.apiRequestForDoctors(problem, displayDoctors);

     $("input").val("");
     $("#output").empty();
     $("#noDoc").empty();
  });
  $("#doctorNameForm").submit(function(e){
    e.preventDefault();
    let doctorName = $("#doctorName").val();
    Doctor.apiRequestBasedOnDoctorsName(doctorName, displayDoctors)

     $("input").val("");
     $("#output").empty();
     $("#noDoc").empty();

   });
});
