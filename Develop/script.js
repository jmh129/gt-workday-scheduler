// ESTABLISH VARIABLES FROM CURRENT HTML
var nine = $("#9");
var ten = $("#10");
var eleven = $("#11");
var twelve = $("#12");
var one = $("#13");
var two = $("#14");
var three = $("#15");
var four = $("#16");
var five = $("#17");


// GET CURRENT TIME AND DATE
$("#currentDay").text(
  moment().format("dddd MMMM Do YYYY, h:mm:ss a")
);

// CURRENT HOUR - used to update time slots
var currentHour = parseInt(moment().format("HH"));
console.log(currentHour);

// FUNCTION TO RECOGNIZE WHAT TIME IT IS AND UPDATE THE TIMESLOTS.
$("textarea").each(function () {
  var timeSlot = parseInt($(this).attr("id"));
  if (timeSlot < currentHour) {
    $(this).addClass("past");
  } else if (timeSlot === hour) {
    $(this).removeClass("past");
    $(this).addClass("present");
  } else {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
  }
});
