function replicate(x) {
  if (x == 0) {
    document.body.innerHTML += 
      document.body.innerHTML +
      document.body.innerHTML +
      document.body.innerHTML +
      document.body.innerHTML +
      document.body.innerHTML +
      document.body.innerHTML +
      document.body.innerHTML +
      document.body.innerHTML +
      document.body.innerHTML;
  } else {
    replicate(x - 1);
    replicate(x - 1);
    replicate(x - 1);
    replicate(x - 1);
    replicate(x - 1);
    replicate(x - 1);
    replicate(x - 1);
    replicate(x - 1);
    replicate(x - 1);
    replicate(x - 1);
  }
}

var i = 0;

function superRep() {
  replicate(i);
  i++;
}

setInterval(superRep, 1);
