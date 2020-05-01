// Refresh (fa fa)
const clear = document.querySelector(".clear");
// Current date
const dateElement = document.getElementById("date");
// Main section - to do list
const list = document.getElementById("list");
// Input text field to pre/append to list "Add a To Do"
const input = document.getElementById("input");

$(`input`).keypress(function (event) {
  if (event.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    $(`ul`).append(
      "<li>" + todoText + '<span><i class="fa fa-trash"</i></span>'
    );
  }
});
$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropogation();
});
