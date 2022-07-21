//! Маркер 2
// Реалізувати клас, що описує маркер, що заправляється, успадкувавши його від простого маркера і додавши метод для заправки маркера. Продемонструвати роботу написаних методів

// class Marker{
//   regExpSpace = /\s/g;
//   WORD_INK_COUNT = .5;
//   constructor(ink = 100, color = 'black'){
//       this.ink = ink;
//       this.color = color;
//   }

//   set ink(value){
//       if(value >= 0 && value <= 100){
//           this._ink = value;
//       }else{
//           this._ink = 0;
//           console.warn(`Expect Ink property as Number in range [0,100]. Result: ${ value }`);
//       }
//   }

//   print(text){
//       const countedInk = text.replace(this.regExpSpace, '').length * this.WORD_INK_COUNT;
//       let resultText = text;
//       if(this._ink > countedInk){
//           this._ink -= countedInk;
//       }else{
//           resultText = '';
//           for(let i = 0; this._ink >= this.WORD_INK_COUNT; i++){
//               resultText += text[i];
//               this._ink -= this.regExpSpace.test(text[i]) ? 0 : this.WORD_INK_COUNT;
//           }
//       }
//       this.#printText(resultText);
//   }

//   #printText(text){
//       console.log(`%c${ text }`, `color: ${ this.color }`);
//   }


// }

// const m = new Marker(4, 'green');

// m.print('hello');
// m.print('hello');
// m.print('hello');

// // заправка маркера

// class FilledMarker extends Marker {
//   fill(ink) {
//     if (ink > 100) {
//       ink = 100;
//     } else {
//       this._ink += ink;
//     }
//   }
// }

// let filledM = new FilledMarker(4, 'red');

// filledM.fill(5);

// console.log(filledM);

// filledM.print('hello');
// filledM.print('hello');
// filledM.print('hello');
// filledM.print('hello');



//! Morse
// You have to write a simple Morse code decoder.

// The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−− ·−−− ··− −·· ·.

// NOTE: Extra spaces before or after the code have no meaning and should be ignored.

// In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

// Your task is to implement a function that would take the morse code as input and return a decoded human-readable string. Good luck!

// Examples:

// decodeMorse('.... . -.-- .--- ..- -.. .') //should return "HEY JUDE"











//! Клікер
// Створити html-сторінку з клікером.

// При кліку на кнопку "Додати" рахунок додається на 1
// При кліку на кнопку "Відняти" рахунок віднімається на 1


const btnMinus = document.querySelector('[data-action="minus"]');

const btnPlus = document.querySelector('[data-action="plus"]');

const counter = document.querySelector('[data-counter]');

btnMinus.addEventListener('click', function(){

  counter.innerText = --counter.innerText;

});

btnPlus.addEventListener('click', function(){

  counter.innerText = parseInt(counter.innerText) + 1;

});