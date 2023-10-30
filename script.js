let hr = "00";
let min = "00";
let sec = "00";
let ms = "00";
let startTimer;

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

function start() {
  startBtn.classList.add("active");
  stopBtn.classList.remove("stopActive");

  startTimer = setInterval(() => {
    ms++;
    ms = ms < 10 ? "0" + ms : ms;

    if (ms == 100) {
      sec++;
      sec = sec < 10 ? "0" + sec : sec;
      ms = "00";
    }

    if (sec == 60) {
      min++;
      min = min < 10 ? "0" + min : min;
      sec = "00";
    }

    if (min == 60) {
      hr++;
      hr = hr < 10 ? "0" + hr : hr;
      min = "00";
    }

    putValue();
  }, 10);
}

function stop() {
  startBtn.classList.remove("active");
  stopBtn.classList.remove("stopActive");
  clearInterval(startTimer);
}

function reset() {
  startBtn.classList.remove("active");
  stopBtn.classList.remove("stopActive");
  clearInterval(startTimer);
  hr = "00";
  min = "00";
  sec = "00";
  ms = "00";
  putValue();
}

function putValue() {
  document.querySelector(".millisecond").innerHTML = ms;
  document.querySelector(".second").innerHTML = sec;
  document.querySelector(".minute").innerHTML = min;
  document.querySelector(".hour").innerHTML = hr;
}