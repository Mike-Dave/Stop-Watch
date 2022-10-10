"use strict";
let millisecs = 0;
let secs = 0;
let mins = 0;
const displayMins = document.querySelector(".mins");
const displaySecs = document.querySelector(".secs");
const displayMillisecs = document.querySelector(".millisecs");
const time = document.querySelector(".time");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");
let interval;

function startTime() {
  millisecs++;
  displayMillisecs.textContent = `${millisecs}`.padStart(2, 0);
  if (millisecs > 99) {
    secs++;
    displaySecs.textContent = `${secs}`.padStart(2, 0);
    millisecs = 0;
    displayMillisecs.textContent = `${millisecs}`.padStart(2, 0);
  }
  if (secs > 59) {
    mins++;
    displayMins.textContent = `${mins}`.padStart(2, 0);
    secs = 0;
    displaySecs.textContent = `${secs}`.padStart(2, 0);
  }
}

startBtn.addEventListener("click", function () {
  clearInterval(interval);
  interval = setInterval(startTime, 10);
});
stopBtn.addEventListener("click", function () {
  clearInterval(interval);
});
resetBtn.addEventListener("click", function () {
  clearInterval(interval);
  millisecs = 0;
  secs = 0;
  mins = 0;
  displayMillisecs.textContent = `${millisecs}`.padStart(2, 0);
  displaySecs.textContent = `${secs}`.padStart(2, 0);
  displayMins.textContent = `${mins}`.padStart(2, 0);
});
