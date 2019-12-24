/*Getting current datetimestamp and passing it to the 
the currentDay field*/
    var cdt = moment().format("MM/DD/YYYY");
    var pcdt = document.getElementById('currentDay');
    pcdt.textContent = cdt;

/*Appending index.html page time slots for time, user input field, and save button*/
    var ts = [9,10,11,12,13,14,15,16,17]

    for (let i=0; i<ts.length; i++){

        $('#calendar').append(
        '<li id=TS' + ts[i] + '">' 
        + moment().hour(ts[i]).minute(0).second(0).format('hh mm A') + 
        '<input type="text" id=txt' + ts[i] + '></input><button type="button">Save</button></li>')
    }

/*Pulling and storing user input with local storage*/

/*     function storeScore(){
        let initials = document.getElementById("initials").value;
        localStorage.setItem("initials",quizTime);
        const score = {
            initials: initials,
            yourscore: quizTime,
          };
        scores.push(score);
        localStorage.setItem("highscores", JSON.stringify(scores));
        scoreDiv.style.display = "none";
        start.style.display = "block";
        timespan.innerHTML = initialQuizTime;
    } */




/*   Psuedo coding
  1 - Pull current date/time information and pass that info to a variable
      and load that into the page
  2 - Prep a function to continuously update that datetimestamp
  2a - Pull from local storage
  3 - Prepare an array for the 8 hour container
  4 - Populate the page elements using an array upon loading of the page
  5 - Structure would be hourtime, textarea for data input, button to store
      the data to the local storage
  6 - Prepare a function to continuously update the containers individual
      color coding scheme */

//$( '#calendar').append('<li class=" col-sm-12 col-md-12 col-lg-12 list-group-item' + bgClass +'" id="time-slot-' + index + '">' + item +': <input type="text" class=" col-sm-8 col-md-8 col-lg-9" id="input"></input><button type="button" class="btn col-sm-2 col-md-2 col-lg-1 ml-1 btn-dark">Save</button></li>' );