$(document).ready(function () {
  // GET CURRENT TIME AND DATE
  $("#currentDay").text(
    moment().format("dddd MMMM Do YYYY, h:mm:ss a")
  );

  // CURRENT HOUR - used to update time slots
  var currentHour = parseInt(moment().format("HH"));

  // SETTING VAR DAYPLANNER TO RENDER IF OBJ IS NOT EMPTY
  var dayPlanner = localStorage.getItem("dayPlanner");
  if (!dayPlanner) {
    dayPlanner = {};
  } else {
    renderPlanner();
  }


  // FUNCTION TO RECOGNIZE WHAT TIME IT IS AND UPDATE THE TIMESLOTS.
  $("textarea").each(function () {
    var timeSlot = parseInt($(this).attr("id"));
    if (timeSlot < currentHour) {
      $(this).addClass("past");
    } else if (timeSlot === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });

  // SETTING ITEMS TO LOCAL STORAGE - workded with tutor on this. 
  $("button").on("click", function (event) {
    var idValue = $(this).attr("data-id");
    dayPlanner[idValue] = $(`#${idValue}`).val();
    console.log(dayPlanner[idValue]);

    localStorage.setItem("dayPlanner", JSON.stringify(dayPlanner));
  });

  // GETTING ITEMS FROM LOCAL STORAGE
  function renderPlanner() {
    dayPlanner = JSON.parse(dayPlanner);

    for (var key in dayPlanner) {
      $(`#${key}`).val(dayPlanner[key]);
    }
  }
});
