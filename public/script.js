//------------check user is authenticated or not starts------------//
//------------check user is authenticated or not ends-------------//

//Logout the user starts
function logout() {
  firebase.auth().signOut();
  window.location.replace("./signin.html");
}
//Logout the user ends

// $("#upload_data").submit(function () {
//   //  $("#status").empty().text("File is uploading...");
//   $(this).ajaxSubmit({
//     error: function (xhr) {
//       // status("Error: " + xhr.status);
//     },
//     success: function (response) {
//       // $("#status").empty().text(response);
//       alert(response);
//       location.reload();
//     },
//   });
//   //Very important line, it disable the page refresh.
//   return false;
// });

// ------------Death Counter Starts-----------//

window.onunload = () => {
  // Clear the local storage
  window.seconds.clear();
  window.theMinutes.clear();
};

const COUNTER = document.getElementById("counter");
const DEATHS = document.getElementById("death");

var theMinutes = 0;
var seconds = 0;

var count = 0;

if (sessionStorage.getItem("seconds")) {
  theMinutes = parseInt(sessionStorage.getItem("theMinutes"));
  seconds = parseInt(sessionStorage.getItem("seconds"));

  count = Math.trunc(theMinutes * 60 + seconds + 1.75);
}

document.addEventListener("DOMContentLoaded", countSeconds());

function countSeconds() {
  // Display text for the counters
  COUNTER.innerHTML = theMinutes + ":" + seconds;
  DEATHS.innerHTML = count;
  // Count up by one
  seconds++;
  // Count up by two
  count += 1.75;
  count = Math.trunc(count);

  // Set up the timer
  // If the seconds hit the 60th second, they restart from 0 seconds and a minute is incremented by one
  if (seconds % 60 == 0) {
    seconds = 0;
    theMinutes++;
    // If the minutes are below 10, a 0 is attached in front of a number
    if (theMinutes < 10) {
      theMinutes = "0" + theMinutes;
    }
  }
  // If the seconds are below 10, a 0 is attached in front of a number
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  sessionStorage.setItem("theMinutes", theMinutes);
  sessionStorage.setItem("seconds", seconds);
}
// Cause the function to work after each 1000 miliseconds
var time = setInterval(countSeconds, 1000);

// ------------Death Counter Ends -----------//
