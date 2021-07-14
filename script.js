// working clock and date with moment.js
  
//add missing html elements
var date = moment().format("dddd LL");
$("#date").append(date);

var time = moment().format("LT");
$("#time").append(time);

const store = window.localStorage;

const container = $(".container");
const now = moment();


// web API's in Jquery

// time blocks can be made with the for loops in js

// when user clicks time block they need to be able to type in text

//Time-blocks must adjust color based on real time.
function pastPresentFuture() {
    hour = time.hours();
    $(".time-block").each(function () {
        var thisHour = parseInt($(this).attr("id"));

        if (thisHour > hour) {
            $(this).addClass("future")
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
}

pastPresentFuture();
// text needs to be stored through local storage.

