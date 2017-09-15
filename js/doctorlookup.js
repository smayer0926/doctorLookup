let apiKey = require('./../.env').apiKey;

export let Doctor = {

  apiRequestForDoctors: function( medicalIssue, displayDoctors){
    // let thisurl = 0;
    // if(doctorName === true ){
    //   let thisurl = 'https://api.betterdoctor.com/2016-03-01/doctors?name='+ doctorName +'&location=or-portland&user_location=45.512794%2C-122.679565&skip=0&limit=2&user_key=' + apiKey;
    // } else{
    //   let thisurl = 'https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue +'&location=or-portland&user_location=45.512794%2C-122.679565&skip=0&limit=10&user_key=' + apiKey;
    // }
    // console.log(thisurl);
    $.ajax({
      url: 'https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue +'&location=or-portland&user_location=45.512794%2C-122.679565&skip=0&limit=10&user_key=' + apiKey,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: (response) => {
        this.saveDoctorsToArray(response, displayDoctors);
      },
      error: function(){
        $("#output").text("There has been an error");
      }
    });
  },

  apiRequestBasedOnDoctorsName: function(doctorName, displayDoctors){
  console.log(doctorName);
    $.ajax({
      url: 'https://api.betterdoctor.com/2016-03-01/doctors?name='+ doctorName +'&location=or-portland&user_location=45.512794%2C-122.679565&skip=0&limit=10&user_key=' + apiKey,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: (response) => {
        this.saveDoctorsToArray(response, displayDoctors);
      },
      error: function(){
        $("#output").text("There has been an error");
      }
    });

  },

    saveDoctorsToArray: function(response, displayDoctors){
      let doctors = [];
      response.data.forEach(function(doctor){
        doctors.push(
          {
            first_name: doctor.profile.first_name,
            last_name: doctor.profile.last_name,
            title: doctor.profile.title,
            city: doctor.practices[0].visit_address.city,
            state: doctor.practices[0].visit_address.state,
            streetAddress: doctor.practices[0].visit_address.street,
            zip: doctor.practices[0].visit_address.zip,
            phone: doctor.practices[0].phones[0].number,
            newPatients: doctor.practices[0].accepts_new_patients,
            photo: doctor.profile.image_url
        })
      })
        console.log(doctors)

      displayDoctors(doctors)
    }

    // apiRequestPromise.then(function(response, displayDoctors){
    //   const doctor = JSON.parse(response);
    //   saveDoctorsToArray(doctor,displayDoctors)
    // })

  }
// }
