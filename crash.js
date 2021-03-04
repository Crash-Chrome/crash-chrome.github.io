var copy = document.getElementById("copy");
var demo = document.getElementById("demo");

var i = 1;

function replicate() {
  for (var j = 0; j < i; j++) {
    demo.innerHTML += copy.innerHTML;
    crash();
  }
  
  i++;
}

setInterval(replicate, 1);
