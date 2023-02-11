//Function for digital clock
function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
}

setInterval(updateClock, 1000);
//Background changers
document.getElementById("teal").addEventListener("click", function() {
  document.body.style.backgroundColor = "#008080";
});

document.getElementById("green").addEventListener("click", function() {
  document.body.style.backgroundColor = "hsl(96, 51%, 51%)";
});

document.getElementById("amber").addEventListener("click", function() {
  document.body.style.backgroundColor = "#fdb750";
});