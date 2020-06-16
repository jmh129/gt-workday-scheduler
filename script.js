$(document).ready(function () {
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

  var dayPlanner = localStorage.getItem("dayPlanner");
  if (!dayPlanner) {
    dayPlanner = {};
  } else { renderPlanner();
  };

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
    } else if (timeSlot === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });

  // SETTING ITEMS TO LOCAL STORAGE
  $("button").on("click", function (event) {
    console.log(event.target)
    var idValue = $(this).attr("data-id");
    dayPlanner[idValue] = $(`#${idValue}`).val();
    console.log(dayPlanner);

    localStorage.setItem("dayPlanner", JSON.stringify(dayPlanner));

    // localStorage.setItem("9", nine.val());
    // localStorage.setItem("10", ten.val());
    // localStorage.setItem("11", eleven.val());
    // localStorage.setItem("12", twelve.val());
    // localStorage.setItem("13", one.val());
    // localStorage.setItem("14", two.val());
    // localStorage.setItem("15", three.val());
    // localStorage.setItem("16", four.val());
    // localStorage.setItem("17", five.val());
  });

  // GETTING ITEMS FROM LOCAL STORAGE
  function renderPlanner() {
    dayPlanner = JSON.parse(dayPlanner);

    for (var key in dayPlanner) {
      // console.log(`${property}: ${object[property]}`);
      $(`#${key}`).val(dayPlanner[key])
    }
  };

  // $("9").val(localStorage.getItem("9"));
  // $("10").append(localStorage.getItem("10"));
  // $("11").append(localStorage.getItem("11"));
  // $("12").append(localStorage.getItem("12"));
  // $("13").append(localStorage.getItem("1"));
  // $("14").append(localStorage.getItem("2"));
  // $("15").append(localStorage.getItem("3"));
  // $("16").append(localStorage.getItem("4"));
  // $("17").append(localStorage.getItem("5"));
});
