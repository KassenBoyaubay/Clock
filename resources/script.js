function setDate() {
  let fullDate = new Date();

  let hours = fullDate.getHours();
  let minutes = fullDate.getMinutes();
  let seconds = fullDate.getSeconds();

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  if (minutes < 10) {
    minutes = "0" + minutes; //`0${minutes}`
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

setInterval(setDate, 1000);
