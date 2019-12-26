/*Getting current datetimestamp and passing it to the 
the currentDay field*/
    var cdt = moment().format("MM/DD/YYYY");
    var pcdt = document.getElementById('currentDay');
    pcdt.textContent = cdt;

/*Appending index.html page time slots for time, user input field, and save button*/
    var ts = [9, 10, 11, 12, 13, 14, 15, 16, 17]

    for (let i = 0; i < ts.length; i++) {

        $('#calendar').append(
            '<li id=TS' + ts[i] + '">'
            + moment().hour(ts[i]).minute(0).second(0).format('hh mm A') +
            '<input type="text" id=txt' + ts[i] + ' class="flush"></input><button type="button" id=btn'
            + ts[i] + ' onclick="ftxt'+ts[i]+'()">Save</button></li>')
    }
//Color coding past, present, future
    const listItems = document.getElementsByTagName("li");

    $(document).ready(function() {
    for (let i=0; i < listItems.length; i++){
        document.getElementsByTagName("li")[i].setAttribute("value", ts[i]);
    }
    });

    console.log(listItems);

    var m = parseInt(moment().format('k'));
    console.log(m);

    /// this is not working... need to find out how to loop and perform if/else
    $(document).ready(function() {
        for (let i=0; i < listItems.length; i++){
            y = (parseInt(listItems[i].value));
            if (y < m) {
                document.getElementsByTagName("li")[0].setAttribute("class", "past");
                document.getElementsByTagName("li")[1].setAttribute("class", "past");
                document.getElementsByTagName("li")[2].setAttribute("class", "past");
                document.getElementsByTagName("li")[3].setAttribute("class", "past");
                document.getElementsByTagName("li")[4].setAttribute("class", "past");
                document.getElementsByTagName("li")[5].setAttribute("class", "past");
                document.getElementsByTagName("li")[6].setAttribute("class", "past");
                document.getElementsByTagName("li")[7].setAttribute("class", "past");
                document.getElementsByTagName("li")[8].setAttribute("class", "past");
            }
            else if (y == m){
                document.getElementsByTagName("li")[0].setAttribute("class", "present");
                document.getElementsByTagName("li")[1].setAttribute("class", "present");
                document.getElementsByTagName("li")[2].setAttribute("class", "present");
                document.getElementsByTagName("li")[3].setAttribute("class", "present");
                document.getElementsByTagName("li")[4].setAttribute("class", "present");
                document.getElementsByTagName("li")[5].setAttribute("class", "present");
                document.getElementsByTagName("li")[6].setAttribute("class", "present");
                document.getElementsByTagName("li")[7].setAttribute("class", "present");
                document.getElementsByTagName("li")[8].setAttribute("class", "present");
            }else (y > m);{
                document.getElementsByTagName("li")[0].setAttribute("class", "future");
                document.getElementsByTagName("li")[1].setAttribute("class", "future");
                document.getElementsByTagName("li")[2].setAttribute("class", "future");
                document.getElementsByTagName("li")[3].setAttribute("class", "future");
                document.getElementsByTagName("li")[4].setAttribute("class", "future");
                document.getElementsByTagName("li")[5].setAttribute("class", "future");
                document.getElementsByTagName("li")[6].setAttribute("class", "future");
                document.getElementsByTagName("li")[7].setAttribute("class", "future");
                document.getElementsByTagName("li")[8].setAttribute("class", "future");
            }
        }
    });

// evaluating cde for potential use in evaluting time conditions
/* var time = moment('09:34:00',format),
  beforeTime = moment('08:34:00', format),
  afterTime = moment('10:34:00', format);

if (time.isBetween(beforeTime, afterTime)) {

  console.log('is between')

} else {

  console.log('is not between')

} */

//Code evaluation
/*$(".saver").click(function() {
    $('input[type="text"]').each(function() {
        const id = $(this).attr('id');
        const value = $(this).val();
        localStorage.setItem(id, value);
        const getter = localStorage.getItem(id);
        });
    });

*/



/*Pulling and storing user input with local storage*/
 
 /*    let text9 = JSON.parse(localStorage.getItem('txt9')) || []; 
    console.log(text9);    

    function ftxt9(){
        let data9 = document.getElementById("txt9").value;
        console.log(data9);
        const score = {
            one: data9,
            timestamp: moment().format("LLL")
        }
        text9.push(score);
        localStorage.setItem("txt9", JSON.stringify(text9));

        }
    let new9 = localStorage.getItem('txt9');
        console.log(new9);  

    txt9.textContent = new9;
    txt10.textContent = "textbox10";
    document.getElementById('txt11').setAttribute("funny", "100");
    console.log(txt9);
    console.log(txt10); */

document.getElementById("txt9").value = "Johnny Bravo";

/*Psuedo coding
    2 - Prep a function to continuously update that datetimestamp
    2a - Pull from local storage
    3 - set the color of the class

/* Create a simple calendar application that allows the user to save events for each hour of the day. 
This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

Clicking on the save button will store the time and user input in `localStorage`.

Near the top of the calendar, the application should display the current day. 
Additionally, each hour should be color coded to reflect whether the time slot 
is in the past, the present, or the future. This will change depending on the time of day. */