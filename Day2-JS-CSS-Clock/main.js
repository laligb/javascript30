function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  return { hours, minutes, seconds };
}

function digitalClock() {
  const digital = document.getElementById("digital-clock");
  const { hours, minutes, seconds } = setDate();
  digital.textContent = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  // Clock hands update
  const hourHand = document.getElementsByClassName("arrow-hours");
  const minuteHand = document.getElementsByClassName("arrow-minutes");
  const secondHand = document.getElementsByClassName("arrow-seconds");

  const hourDegrees = hours * 30 + minutes * 0.5 + seconds * 0.00833 + 90;
  const minuteDegrees = (minutes / 60) * 360 + 90;
  const secondDegrees = (seconds / 60) * 360 + 90;
  console.log("hours", hours);
  console.log("minutes", minutes);

  hourHand[0].style.transform = `rotate(${hourDegrees}deg)`;
  minuteHand[0].style.transform = `rotate(${minuteDegrees}deg)`;
  secondHand[0].style.transform = `rotate(${secondDegrees}deg)`;
}

setInterval(digitalClock, 1000);
digitalClock();
