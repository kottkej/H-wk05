/*Getting current datetimestamp and passing it to the 
the currentDay field*/
    var cdt = moment().format("MM/DD/YYYY");
    var pcdt = document.getElementById('currentDay');
    pcdt.textContent = cdt;
    var x = moment().format("hh:mm A");
    let schs = JSON.parse(localStorage.getItem('sch')) || [];
/*Appending index.html page time slots for time, user input field, and save button*/
    var ts = [9, 10, 11, 12, 13, 14, 15, 16, 17];

    for (let i = 0; i < ts.length; i++) {

    $('#calendar').append(
        '<li class = "col-sm-12 col-md-12 col-lg-12 list-group-item" id="TS' + ts[i] + '">'
        + moment().hour(ts[i]).minute(0).second(0).format('hh mm A') +
        '<input type="text" id=txt' + ts[i] + ' class = "col-sm-8 col-md-8 col-lg-9"></input><button type="button" col-sm-2 col-md2 col-lg-1 ml-1 btn-dark id=btn'
        + ts[i] + ' class="saveBtn">Save</button></li>')
    }
//Color coding past, present, future
/*$("#calendar").on("click",".saveBtn",function) - evaluation of different 
way to process the button... would still a function to 
reference the button id to populate only one object
*/

function ColorUpdate(){
    let mccafe=moment().hour();
    console.log(ts.length, mccafe);
    for (let i = 0; i < ts.length; i++) {
        if (ts[i]==mccafe){
        $("#TS"+ ts[i]).addClass("present");
        }
        else if( ts[i]>mccafe){
            $("#TS"+ ts[i]).addClass("future");
        }
        else {
            $("#TS"+ ts[i]).addClass("past");
        }
    }
}

$(document).ready(function(){
    ColorUpdate();
    setInterval(ColorUpdate,60*1000); //1000ms = 1 second
});

var m = parseInt(moment().format('k'));


/*Pulling and storing user input with local storage*/
//Timeslot 9
     $(document).ready(function() {

        const litxt9 = document.querySelector("#txt9");
        const btn9Button = document.querySelector("#btn9");

    btn9Button.addEventListener("click", function(event) {
        event.preventDefault();  
       //set array
        const lcl9 = {
            txt9: litxt9.value.trim(),
            txt9time: x,
        };
        // set new submission
        localStorage.setItem("lcl9", JSON.stringify(lcl9));
    });
        // get most recent submission
        const lastlcl9 = JSON.parse(localStorage.getItem("lcl9"));
        document.getElementById("txt9").value = lastlcl9.txt9;
    });
//Timeslot 10
    $(document).ready(function() {

        const litxt10 = document.querySelector("#txt10");
        const btn10Button = document.querySelector("#btn10");

    btn10Button.addEventListener("click", function(event) {
        event.preventDefault();  
        //set array
        const lcl10 = {
            txt10: litxt10.value.trim(),
            txt10time: x,
        };
        // set new submission
        localStorage.setItem("lcl10", JSON.stringify(lcl10));
    });
        // get most recent submission
        const lastlcl10 = JSON.parse(localStorage.getItem("lcl10"));
        document.getElementById("txt10").value = lastlcl10.txt10;
    });
//Timeslot 11
    $(document).ready(function() {

        const litxt11 = document.querySelector("#txt11");
        const btn11Button = document.querySelector("#btn11");

    btn11Button.addEventListener("click", function(event) {
        event.preventDefault();  
        //set array
        const lcl11 = {
            txt11: litxt11.value.trim(),
            txt11time: x,
        };
        // set new submission
        localStorage.setItem("lcl11", JSON.stringify(lcl11));
    });
        // get most recent submission
        const lastlcl11 = JSON.parse(localStorage.getItem("lcl11"));
        document.getElementById("txt11").value = lastlcl11.txt11;
    });
//Timeslot 12
$(document).ready(function() {

    const litxt12 = document.querySelector("#txt12");
    const btn12Button = document.querySelector("#btn12");

btn12Button.addEventListener("click", function(event) {
    event.preventDefault();  
    //set array
    const lcl12 = {
        txt12: litxt12.value.trim(),
        txt12time: x,
    };
    // set new submission
    localStorage.setItem("lcl12", JSON.stringify(lcl12));
});
    // get most recent submission
    const lastlcl12 = JSON.parse(localStorage.getItem("lcl12"));
    document.getElementById("txt12").value = lastlcl12.txt12;
});
//Timeslot 13
$(document).ready(function() {

    const litxt13 = document.querySelector("#txt13");
    const btn13Button = document.querySelector("#btn13");

btn13Button.addEventListener("click", function(event) {
    event.preventDefault();  
    //set array
    const lcl13 = {
        txt13: litxt13.value.trim(),
        txt13time: x,
    };
    // set new submission
    localStorage.setItem("lcl13", JSON.stringify(lcl13));
});
    // get most recent submission
    const lastlcl13 = JSON.parse(localStorage.getItem("lcl13"));
    document.getElementById("txt13").value = lastlcl13.txt13;
});
//Timeslot 14
$(document).ready(function() {

    const litxt14 = document.querySelector("#txt14");
    const btn14Button = document.querySelector("#btn14");

btn14Button.addEventListener("click", function(event) {
    event.preventDefault();  
    //set array
    const lcl14 = {
        txt14: litxt14.value.trim(),
        txt14time: x,
    };
    // set new submission
    localStorage.setItem("lcl14", JSON.stringify(lcl14));
});
    // get most recent submission
    const lastlcl14 = JSON.parse(localStorage.getItem("lcl14"));
    document.getElementById("txt14").value = lastlcl14.txt14;
});
//Timeslot 11
$(document).ready(function() {

    const litxt11 = document.querySelector("#txt11");
    const btn11Button = document.querySelector("#btn11");

btn11Button.addEventListener("click", function(event) {
    event.preventDefault();  
    //set array
    const lcl11 = {
        txt11: litxt11.value.trim(),
        txt11time: x,
    };
    // set new submission
    localStorage.setItem("lcl11", JSON.stringify(lcl11));
});
    // get most recent submission
    const lastlcl11 = JSON.parse(localStorage.getItem("lcl11"));
    document.getElementById("txt11").value = lastlcl11.txt11;
});
//Timeslot 15
$(document).ready(function() {

    const litxt15 = document.querySelector("#txt15");
    const btn15Button = document.querySelector("#btn15");

btn15Button.addEventListener("click", function(event) {
    event.preventDefault();  
    //set array
    const lcl15 = {
        txt15: litxt15.value.trim(),
        txt15time: x,
    };
    // set new submission
    localStorage.setItem("lcl15", JSON.stringify(lcl15));
});
    // get most recent submission
    const lastlcl15 = JSON.parse(localStorage.getItem("lcl15"));
    document.getElementById("txt15").value = lastlcl15.txt15;
});
//Timeslot 16
$(document).ready(function() {

    const litxt16 = document.querySelector("#txt16");
    const btn16Button = document.querySelector("#btn16");

btn16Button.addEventListener("click", function(event) {
    event.preventDefault();  
    //set array
    const lcl16 = {
        txt16: litxt16.value.trim(),
        txt16time: x,
    };
    // set new submission
    localStorage.setItem("lcl16", JSON.stringify(lcl16));
});
    // get most recent submission
    const lastlcl16 = JSON.parse(localStorage.getItem("lcl16"));
    document.getElementById("txt16").value = lastlcl16.txt16;
});
//Timeslot 17
$(document).ready(function() {

    const litxt17 = document.querySelector("#txt17");
    const btn17Button = document.querySelector("#btn17");

btn17Button.addEventListener("click", function(event) {
    event.preventDefault();  
    //set array
    const lcl17 = {
        txt17: litxt17.value.trim(),
        txt17time: x,
    };
    // set new submission
    localStorage.setItem("lcl17", JSON.stringify(lcl17));
});
    // get most recent submission
    const lastlcl17 = JSON.parse(localStorage.getItem("lcl17"));
    document.getElementById("txt17").value = lastlcl17.txt17;
});