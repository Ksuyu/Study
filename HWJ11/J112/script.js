// !Clicker
// Напишите приложение, которое помогает пользователю натренироваться кликать левой кнопкой мыши.
// При входе появляется кнопка "Начать". По нажатии на кнопку - она пропадает, а вместо нее появляется овальная область в которой нужно кликать мышкой.
// Справа вверху начинает отсчет таймер с 30 секунд и счетчик кликов пользователя. По окончании этого времени счет кликов не засчитывается. По окончании времени(30 секунд) поле кликов пропадает, появляется таблица статистики и кнопка "Начать". Показывать общее количество кликов и среднюю скорость кликов в минуту.

const btn = document.querySelector(".button-start");
const clickArea = document.querySelector(".click-area");
const countdown = document.querySelector(".countdown p");
const clickCounter = document.querySelector(".click-counter p");
const table = document.querySelector(".table");
const totalClicks = document.querySelector(".total-clicks p");
const averageSpeed = document.querySelector(".average-speed p");

let timerID;
let click = 0;

// кнопка пропадает, появляется поле для кликов

btn.onclick = function () {
  if (table.classList.contains("hide")) {
    btn.classList.add("hide");
    clickArea.classList.remove("hide");

    // старт таймера

    let t = 30;
    timerID = setInterval(function () {
      t--;
      countdown.innerText = t;

      // остановка таймера

      if (t <= 0) {
        clearInterval(timerID);
        countdown.innerText = 0;

        btn.classList.remove("hide");
        btn.innerText = "RESET";
        clickArea.classList.add("hide");
        table.classList.remove("hide");
      }
    }, 1000);
  } else {
    table.classList.add("hide");
    btn.innerText = "START";
    click = 0;
    clickCounter.innerText = click;
  }
};

// количество кликов

clickArea.onclick = function () {
  click++;
  totalClicks.innerText = click;
  clickCounter.innerText = click;

  // скорость кликов

  averageSpeed.innerText = click * 2 + "/min";
};
