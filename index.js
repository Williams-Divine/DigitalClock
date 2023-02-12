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

// THEME1
document.getElementById("theme1").addEventListener("click", function() {
  document.body.style.backgroundColor = "#140142";
  document.body.style.color = "#F0A07C";
  document.getElementById("time").style.color = "#F0A07C"
 
});

// THEME2
document.getElementById("theme2").addEventListener("click", function() {
  document.body.style.backgroundColor = "#161B21";
  document.body.style.color = "#F4A950";
  document.getElementById("time").style.color = "#F4A950"
});

// THEME3
document.getElementById("theme3").addEventListener("click", function() {
  document.body.style.backgroundColor = "#295F2D";
  document.body.style.color = "#FFE67C";
  document.getElementById("time").style.color = "#FFE67C"

});