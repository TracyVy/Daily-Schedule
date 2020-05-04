// Display current date
var m = moment();
var currentHour = m.format("HH");
var currentDate = m.format("MMMM Do, YYYY");
const FIRST_HOUR = 9;
const LAST_HOUR = 17;
var tasks = {};
console.log(currentHour);
$(".dateLabel").html(currentDate);

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

  tasks = JSON.parse(localStorage.getItem("tasks")) || {};
  console.log("tasks from localStorage=" + JSON.stringify(tasks));

  // Loop through and create task list
  var myTaskList = $("#myTaskList");
  var htmlTasks = "";
  for (i = FIRST_HOUR; i < LAST_HOUR; i++) {
    htmlTask +=
      '<tr class="hour' + i + ">' + 
      '<th scope="row" id="hourKey">9:00 AM</th>' + 
      '<td><input class="inputEl" id="hour1" type="text" /></td>' + 
      `<td>
        <input
          class="saveBtn"
          type="button"
          id="saveBtn1"
          value="SAVE"
          onclick="save("hour' + i + ")"
        />
      </td>` +
    `</tr>`
  }

  // Set color-coded functions: past (grey), current (red), future (green)
  /**  
  if (currentHour > 9) {
    $(".hour1").attr("style", "background-color: grey;");
  } else if (currentHour == 9) {
    console.log("XXX hour1=" + $(".hour1"));
    $(".hour1").attr("style", "background-color: rgb(200, 35, 20)");
  } else {
    $(".hour1").attr("style", "background-color: #77dd77;");
  }

  if (currentHour > 10) {
    $(".hour2").attr("style", "background-color: grey;");
  } else if (currentHour == 10) {
    $(".hour2").attr("style", "background-color: rgb(200, 35, 20)");
  } else {
    $(".hour2").attr("style", "background-color: #77dd77;");
  }

  if (currentHour > 11) {
    $(".hour3").attr("style", "background-color: grey;");
  } else if (currentHour == 11) {
    $(".hour3").attr("style", "background-color: rgb(200, 35, 20)");
  } else {
    $(".hour3").attr("style", "background-color: #77dd77;");
  }

  if (currentHour > 12) {
    $(".hour4").attr("style", "background-color: grey;");
  } else if (currentHour == 12) {
    $(".hour4").attr("style", "background-color: rgb(200, 35, 20)");
  } else {
    $(".hour4").attr("style", "background-color: #77dd77;");
  }

  if (currentHour > 13) {
    $(".hour5").attr("style", "background-color: grey;");
  } else if (currentHour == 13) {
    $(".hour5").attr("style", "background-color: rgb(200, 35, 20)");
  } else {
    $(".hour5").attr("style", "background-color: #77dd77;");
  }

  if (currentHour > 14) {
    $(".hour6").attr("style", "background-color: grey;");
  } else if (currentHour == 14) {
    $(".hour6").attr("style", "background-color: rgb(200, 35, 20)");
  } else {
    $(".hour6").attr("style", "background-color: #77dd77;");
  }

  if (currentHour > 15) {
    $(".hour7").attr("style", "background-color: grey;");
  } else if (currentHour == 15) {
    $(".hour7").attr("style", "background-color: rgb(200, 35, 20)");
  } else {
    $(".hour7").attr("style", "background-color: #77dd77;");
  }

  if (currentHour > 16) {
    $(".hour8").attr("style", "background-color: grey;");
  } else if (currentHour == 16) {
    console.log("XXX");
    $(".hour8").attr("style", "background-color: rgb(200, 35, 20)");
  } else {
    $(".hour8").attr("style", "background-color: #77dd77;");
  }

  if (currentHour > 17) {
    $(".hour9").attr("style", "background-color: grey;");
  } else if (currentHour == 17) {
    $(".hour9").attr("style", "background-color: rgb(200, 35, 20)");
  } else {
    $(".hour9").attr("style", "background-color: #77dd77;");
  }
  */

  // Allow user's input to persist, even after refresh
  var savedText = document.getElementById(".inputEl");
  /**  
  function displayToDo(){
    console.log("Enter To Do");
    inputEl.addEventListener("save", function(e){
      e.preventDefault;
      userInput = inputEl.value;
      localStorage.setItem("savedText", savedText.value);
    }
  }
  */
});

function save(hourId) {
  console.log("hourId=" + hourId);
  console.log("value=" + $("#" + hourId).val());
  tasks[hourId] = $("#" + hourId).val();
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
