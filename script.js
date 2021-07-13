// working clock and date with moment.js
  
//add missing html elements
// window.onload= function() {
//     document.querySelector('.container');
//         .addEventListener('click', function(event) {
//             containerClicked(event, timeblock);
//         });
//         setText(timeblock);
// }

var date = moment().format("dddd LL");
$("#date").append(date);

var time = moment().format("LT");
$("#time").append(time);

// web API's in Jquery

// time blocks can be made with the for loops in js

// when user clicks time block they need to be able to type in text

// text needs to be stored through local storage.

