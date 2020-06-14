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

// NEED TO STORE INPUT IN LOCAL STORAGE 
$('button').on("click",function(){
    localStorage.setItem("9", nine.val());
    localStorage.setItem("10", ten.val());
    localStorage.setItem("11", eleven.val());
    localStorage.setItem("12", twelve.val());
    localStorage.setItem("13", one.val());
    localStorage.setItem("14", two.val());
    localStorage.setItem("15", three.val());
    localStorage.setItem("16", four.val());
    localStorage.setItem("17", five.val());
});

// NEED TO GETITEM FROM LOCAL STORAGE 