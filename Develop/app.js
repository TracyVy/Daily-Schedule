// display current date
var currentDate = moment().format("MMMM Do YYYY");
console.log(currentDate);
$("#currentDate").html(currentDate);

// Allow user's input to persist, even after refresh
// var savedText = document.getElementById("#input");
// localStorage.setItem("savedText", savedText.value);

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
});

/*
window.onload = function () {
  document.getElementById("#saveBtn").onclick = function (e) {
    e.preventDefault();
    refilter();
    document.getElementById("input").onsubmit();
  };
};

var storedItem = localStorage.getItem("storedItem");
function save() {
  var item = document.getElementById("input1").value;
  localStorage.setItem("storedItem", item);
  document.getElementById("savedText").innerHTML = item + "SAVED";
}

function get() {
  localStorage.getItem("storedItem");
  document.getElementById("openedText").innerHTML = storedITem + "OPENED";
}

Color-code time block: past (grey), current (red), future (green)
var currentTime = moment().format("LT");
console.log(currentTime);
*/
