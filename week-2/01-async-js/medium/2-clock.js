function time(date) {
  let Hours = date.getHours();
  let Minute = date.getMinutes();
  let Second = date.getSeconds();

  let merdiem = Hours >= 12 ? "PM" : "AM";

  Hours = Hours < 12 ? "0" + Hours : Hours;
  Minute = Minute < 10 ? "0" + Minute : Minute;
  Second = Second < 10 ? "0" + Second : Second;
  return `${Hours}:${Minute}:${Second} ${merdiem}`;
}

function getCurrentTime() {
    const date = new Date();

    let currentTime = time(date)
    console.log(currentTime)
}

setInterval(getCurrentTime, 1000)