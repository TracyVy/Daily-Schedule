// Display current date
var m = moment();
var currentHour = m.format("h a");
var currentDate = m.format("MMMM Do, YYYY");
console.log(currentHour);
$("#currentDate").html(currentDate);

// AJAX: quote of the day
$(document).ready(function () {
  console.log("hello");
  var ajaxConfig = {
    url: "http://quotes.rest/qod.json",
    type: "GET",
    dataType: "JSON",
  };

  $.ajax(ajaxConfig).then(function (response) {
    var output = response.contents.quotes[0];
    console.log(output.author, output.quote);
    //.html replaces previous html
    $("#quoteOTD").html(`<p>${output.quote}  ${output.author}</p>`);
  });

  // if currentHour >
});

// Color-code time block: past (grey), current (red), future (green)
// console.log(currentTime);

// var currentTime = moment().format("LT");
// var pastTime = currentTime.format(h);
// var presentTime = moment().format;
// var futureTime = moment().format("LT") > currentTime;

// function getPastTime()
// Allow user's input to persist, even after refresh
// var savedText = document.getElementById("#input");
// localStorage.setItem("savedText", savedText.value);
