var currentDate = moment();
var currentDate = moment().format("MMMM Do YYYY");
console.log(currentDate);
$("#currentDate").html(currentDate);

window.onload = function () {
  document.getElementById("submitBtn").onclick = function (e) {
    e.preventDefault();
    refilter();
    document.getElementById("inputForm").onsubmit();
  };
};

var storedItem = localStorage.getItem("storedItem");
function save() {
  var item = document.getElementById("input_1").value;
  localStorage.setItem("storedItem", item);
  document.getElementById("savedText").innerHTML = item + "SAVED";
}

function get() {
  localStorage.getItem("storedItem");
  document.getElementById("openedText").innerHTML = storedITem + "OPENED";
}

// let currentDate > hour_id set color attribute accordinglly.

// look into save f(n).
// $(document).ready(function () {
//   var userInput = "";
// });
