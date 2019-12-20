let cdt = moment().format('MMMM Do YYYY, h:mm:ss a');
const cdt = $("<p>").text("Today is " + cdt);
/*let currentTime = moment().format()*/

const calendarDiv = $('<div>');
//console.log(currentDate);
let timeSlots = JSON.parse(localStorage.getItem('timepart')) || [];


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