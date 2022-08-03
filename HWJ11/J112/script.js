// !Clicker
// Напишите приложение, которое помогает пользователю натренироваться кликать левой кнопкой мыши. 
// При входе появляется кнопка "Начать". По нажатии на кнопку - она пропадает, а вместо нее появляется овальная область в которой нужно кликать мышкой. 
// Справа вверху начинает отсчет таймер с 30 секунд и счетчик кликов пользователя. По окончании этого времени счет кликов не засчитывается. По окончании времени(30 секунд) поле кликов пропадает, появляется таблица статистики и кнопка "Начать". Показывать общее количество кликов и среднюю скорость кликов в минуту.

const btn = document.querySelector('.button-start');
const clickArea = document.querySelector('.click-area');
const countdown = document.querySelector('.countdown p');
const clickCounter = document.querySelector('.click-counter p');
const table = document.querySelector('.table');
const totalClicks = document.querySelector('.total-clicks p');
const averageSpeed = document.querySelector('.average-speed p');

let timerID = 0;
let t = 30;
let click = 0;


// кнопка пропадает, появляется поле для кликов

btn.onclick = function() {
  console.log('Click');

  btn.classList.add('hide');
  clickArea.classList.remove('hide');

// старт таймера
  
  timerID = setInterval(function(){
    t--;
    countdown.innerText = t;

// остановка таймера

    if(t <= 0) {
      clearInterval(t);
      countdown.innerText = 0;

      btn.classList.remove('hide');
      clickArea.classList.add('hide');
      table.classList.remove('hide');
    }

  }, 1000);

}

// количество кликов

clickArea.onclick = function() {
  click++;
  totalClicks.innerText = click;
  clickCounter.innerText = click;

// скорость кликов

  averageSpeed.innerText = (click / 30).toFixed(2);
}










