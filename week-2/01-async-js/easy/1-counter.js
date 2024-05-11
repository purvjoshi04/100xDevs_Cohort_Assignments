let counter = 0;

let countFn = () => {
  counter++;
  console.log(counter);
};

setInterval(countFn, 1000);
