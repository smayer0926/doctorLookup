var apiKey = require('./../.env').apiKey;

import { Doctor } from './../js/doctorlookup.js';

$(function(){
  $("#doctorForm").submit(function(e){
    e.preventDefault();
    let problem = $("#problem").val();

    Doctor.apiRequestForDoctors(problem, displayDoctors);

    function displayDoctors(doctors){
      console.log(doctors)
       doctors.forEach(function(doctorInfo){
         console.log(doctorInfo)
         console.log(doctorInfo.first_name)
         $("#output").append("<li>" + doctorInfo.first_name + " " + doctorInfo.last_name + "<br>" + "Title: " + doctorInfo.title + "<br>" + " " + "Gender: "+ doctorInfo.gender + "<br>" + "Doctors Bio: " + doctorInfo.bio + "<br>" + "Known Languages: " + doctorInfo.languagesKnown);
      });
    }

    $("#output").empty()
  });
});
