const time = document.querySelector(".time");

const minutes = document.querySelector(".mm");
const seconds = document.querySelector(".ss");
const milisec = document.querySelector(".ms");

const circle = document.querySelector(".circles-paragraph");

const buttonStart = document.querySelector(".start");
const buttonStop = document.querySelector(".stop");
const buttonCircle = document.querySelector(".circle");
const buttonPause = document.querySelector(".pause");

let counterMM = 0;
let counterSS = 0;
let counterMS = 0;
let timerID;

//Старт

buttonStart.onclick = function () {
  console.log("btnStart");

  timerID = 0;
  timerID = setInterval(function () {
    // milisec

    counterMS++;
    milisec.innerText = counterMS;

    if (counterMS > 99) {
      counterSS++;
      seconds.innerText = "0" + counterSS;
      counterMS = 0;
      milisec.innerText = counterMS;
    }

    // sec

    if (counterSS > 9) {
      seconds.innerText = counterSS;
    }

    // minutes

    if (counterSS > 59) {
      counterMM++;
      minutes.innerText = "0" + counterMM;
      counterSS = 0;
      seconds.innerText = "0" + counterSS;
    }

    if (counterMM > 9) {
      minutes.innerText = counterMM;
    }
  }, 10);
};

//Стоп

buttonStop.onclick = function () {
  console.log("btnStop");
  clearInterval(timerID);
  milisec.innerText = 0;
  seconds.innerText = "0" + 0;
  minutes.innerText = "0" + 0;
  circle.innerText = "";
  counterMM = 0;
  counterSS = 0;
  counterMS = 0;
};

//Пауза

buttonPause.onclick = function () {
  console.log("btnPause");
  clearInterval(timerID);
};

//Интервал

buttonCircle.onclick = function () {
  console.log("btnCircle");

  const container = document.querySelector(".circles-paragraph");

  const newCircle = document.createElement("div");
  minutes.innerText = "0" + 0;
  newCircle.innerText = `${minutes.innerText}:${seconds.innerText}.${milisec.innerText}`;

  container.append(newCircle);
};
