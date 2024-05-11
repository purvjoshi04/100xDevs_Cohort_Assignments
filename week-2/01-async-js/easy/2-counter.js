let counter = 0;

function handleTimeout(callback, duration) {
  setTimeout(callback, duration);
}

function counterFn() {
  console.log(counter);
  counter++;
  handleTimeout(counterFn, 1000);
}

counterFn();
