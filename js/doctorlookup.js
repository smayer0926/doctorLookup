let apiKey = require('./../.env').apiKey;

export let Doctor = {

  // apiRequestPromise: function(medicalIssue, displayDoctors){
  //   return new Promise(function(resolve, reject){
  //     let request = new XMLHttpRequest();
  //     let url = 'https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue +'&location=or-portland&user_location=45.512794%2C-122.679565&skip=0&limit=15&user_key=' + apiKey;
  //     request.onload = function(){
  //       if (this.status === 200){
  //         resolve(request.response);
  //         // console.log(displayDoctors(request.response));
  //       } else{
  //         reject(Error(request.statusText));
  //       }
  //     }
  //     request.open("GET", url, true);
  //     request.send();
  //   }).then(this.saveDoctorsToArray)
  // },
  apiRequestForDoctors: function(medicalIssue, displayDoctors){
    $.ajax({
      url: 'https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue +'&location=or-portland&user_location=45.512794%2C-122.679565&skip=0&limit=15&user_key=' + apiKey,
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
            gender: doctor.profile.gender,
            languagesKnown: doctor.profile.languages[0].name,
            bio: doctor.profile.bio
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
