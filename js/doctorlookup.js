let apiKey = require('./../.env').apiKey;

export let Doctor = {

  apiRequestForDoctors: function( medicalIssue, displayDoctors){
    $.ajax({
      url: 'https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue +'&location=or-portland&user_location=45.512794%2C-122.679565&skip=0&limit=12&user_key=' + apiKey,
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

//Drop Down
  apiRequestForSpecialitys: function(newDropDown){
    $.ajax({
      url: 'https://api.betterdoctor.com/2016-03-01/specialties?limit=100&user_key='+ apiKey,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: (response) => {
        this.saveSpecialityToArray(response, newDropDown)
      },
      error: function(){
        $("#output").text("There has been an error");
      }

    })
  },

    saveDoctorsToArray: function(response, displayDoctors){
      let doctors = [];
      let patients = "No";
      let image = ""

      response.data.forEach(function(doctor){
        if (doctor.practices[0].accepts_new_patients === true){
          patients = "Yes";
        }
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
            newPatients: patients,
            photo: doctor.profile.image_url
        })
      })
      displayDoctors(doctors)
    },
//Drop Down
    saveSpecialityToArray: function(response, newDropDown){
      let speciality = [];
      response.data.forEach(function(doctorSpeciality){
        speciality.push(
          {
            speciality: doctorSpeciality.name
          })
      })
      let sorted = speciality.sort(function(a,b){
        var textA = a.speciality.toUpperCase();
        var textB = b.speciality.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
      newDropDown(sorted);
    }
  }
