//! Фокус
// Создайте функцию, в которой есть двумерный массив карт 13 на 4(4 масти карт от 2 до туза). Функция возращает случайную карту из массива используя Math.random()

let cards = [
    ['diamonds_2', 'diamonds_3', 'diamonds_4', 'diamonds_5', 'diamonds_6', 'diamonds_7', 'diamonds_8', 'diamonds_9', 'diamonds_10', 'diamonds_Jack', 'diamonds_Queen', 'diamonds_King', 'diamonds_Ace'],
    ['hearts_2', 'hearts_3', 'hearts_4', 'hearts_5', 'hearts_6', 'hearts_7', 'hearts_8', 'hearts_9', 'hearts_10', 'hearts_Jack', 'hearts_Queen', 'hearts_King', 'hearts_Ace'],
    ['clubs_2', 'clubs_3', 'clubs_4', 'clubs_5', 'clubs_6', 'clubs_7', 'clubs_8', 'clubs_9', 'clubs_10', 'clubs_Jack', 'clubs_Queen', 'clubs_King', 'clubs_Ace'],
    ['spades_2', 'spades_3', 'spades_4', 'spades_5', 'spades_6', 'spades_7', 'spades_8', 'spades_9', 'spades_10', 'spades_Jack', 'spades_Queen', 'spades_King', 'spades_Ace'],
];

function getRandom(cards) {  
        return cards[Math.floor(Math.random() * cards.length)][Math.floor(Math.random() * cards[0].length)];
}

console.log(getRandom(cards));


//! Соревнования по бегу
// Создайте функцию, которая принимает массив из 6 объектов, в каждом есть фамилия бегуна и результаты трех его забегов в секундах. Вернуть объект с полями:

// фамилию самого медленного
// фамилию самого быстрого спортсмена.
// общую таблицу забегов(сформированную на ваше усмотрение)

let runArray = [{surname: 'Evans   ', run1: 50, run2: 52, run3: 48,},
                {surname: 'Joyner  ', run1: 51, run2: 48, run3: 52,},
                {surname: 'Christen', run1: 47, run2: 48, run3: 49,},
                {surname: 'Owens   ', run1: 52, run2: 47, run3: 46,},
                {surname: 'Lewis   ', run1: 49, run2: 52, run3: 55,},
                {surname: 'Felix   ', run1: 54, run2: 50, run3: 51,},];


const runWithtotal = runArray.map(function(item) {
    const newRunArray = {
        ... item, //деструктуризация объекта item - разбивка на все его свойства
        totalRun: +((item.run1 + item.run2 + item.run3) / 3).toFixed(2),
    }

    return newRunArray;
});

console.log(runWithtotal);



самый медленный спортсмен

 
const slowestRunner = Math.max.apply(Math, runWithtotal.map(function(item) { //apply передает массив данных в качестве параметров функции
    return item.totalRun; 
}));


function slowestRunnerName(runWithtotal) {
 
    for (let i = 0; i < runWithtotal.length; i++) {
        if (runWithtotal[i].totalRun === slowestRunner) {
            return runWithtotal[i].surname;
        }
    }
}

console.log(`Самый медленный спортсмен: ${slowestRunnerName(runWithtotal)}`);


//самый быстрый спортсмен


const fastestRunner = Math.min.apply(Math, runWithtotal.map(function(item) { 
    return item.totalRun;
}));

function fastestRunnerName(runWithtotal) {
 
    for (let i = 0; i < runWithtotal.length; i++) {
        if (runWithtotal[i].totalRun === fastestRunner) {
            return runWithtotal[i].surname;
        }
    }
}

console.log(`Самый быстрый спортсмен: ${fastestRunnerName(runWithtotal)}`);



//таблица забегов

function printRunTable(runWithtotal) {

    let str = '';
    for (let i = 0; i < runWithtotal.length; i++) {
    str += `
    -----------------------------------------------------------
    || ${runWithtotal[i].surname} ||   ${runWithtotal[i].run1}   ||   ${runWithtotal[i].run2}   ||   ${runWithtotal[i].run3}   ||   ${runWithtotal[i].totalRun}`;
    }
    
   return str;
    
}

  let strTitle = '|| SURNAME  || TIME 1 || TIME 2 || TIME 3 ||   AVERAGE TIME';
  
  console.log(`
    ${strTitle} 
    ${printRunTable(runWithtotal)}`);


let str = `------

    || SURNAME || RUN1 || RUN2 || RUN3 ||
    -------------------------------------
    || ${runWithtotal[0].surname}   || ${runWithtotal[0].run1}   || ${runWithtotal[0].run2}   || ${runWithtotal[0].run3}   ||
    -------------------------------------
    || ${runWithtotal[1].surname}   || ${runWithtotal[1].run1}   || ${runWithtotal[1].run2}   || ${runWithtotal[1].run3}   ||`;  
    


//! Пользователе-генератор.
// Напишите функцию, которая принимает пол пользователя и возвращает объект данных о пользователе сгенерированных случайно. Имена выбирайте из заранее созданных массивов разных имен размером не меньше 50 элементов для каждого пола.

// randUser('male') //{name:"Ivan", age : 77, gender:"male"}
// randUser('female') //{name:"Inna", age : 3, gender:"female"}

let users = [[{name:"Ivan1", age : 77, gender:"male"},
            {name:"Ivan2", age : 77, gender:"male"},
            {name:"Ivan3", age : 77, gender:"male"},
            {name:"Ivan4", age : 77, gender:"male"},
            {name:"Ivan5", age : 77, gender:"male"},
            {name:"Ivan6", age : 77, gender:"male"},
            {name:"Ivan7", age : 77, gender:"male"},
            {name:"Ivan8", age : 77, gender:"male"},
            {name:"Ivan9", age : 77, gender:"male"},
            {name:"Ivan10", age : 77, gender:"male"},
            {name:"Ivan11", age : 77, gender:"male"},
            {name:"Ivan12", age : 77, gender:"male"},
            {name:"Ivan13", age : 77, gender:"male"},
            {name:"Ivan14", age : 77, gender:"male"},
            {name:"Ivan15", age : 77, gender:"male"},
            {name:"Ivan16", age : 77, gender:"male"},
            {name:"Ivan17", age : 77, gender:"male"},
            {name:"Ivan18", age : 77, gender:"male"},
            {name:"Ivan19", age : 77, gender:"male"},
            {name:"Ivan20", age : 77, gender:"male"},
            {name:"Ivan21", age : 77, gender:"male"},
            {name:"Ivan22", age : 77, gender:"male"},
            {name:"Ivan23", age : 77, gender:"male"},
            {name:"Ivan24", age : 77, gender:"male"},
            {name:"Ivan25", age : 77, gender:"male"},
            {name:"Ivan26", age : 77, gender:"male"},
            {name:"Ivan27", age : 77, gender:"male"},
            {name:"Ivan28", age : 77, gender:"male"},
            {name:"Ivan29", age : 77, gender:"male"},
            {name:"Ivan30", age : 77, gender:"male"},
            {name:"Ivan31", age : 77, gender:"male"},
            {name:"Ivan32", age : 77, gender:"male"},
            {name:"Ivan33", age : 77, gender:"male"},
            {name:"Ivan34", age : 77, gender:"male"},
            {name:"Ivan35", age : 77, gender:"male"},
            {name:"Ivan36", age : 77, gender:"male"},
            {name:"Ivan37", age : 77, gender:"male"},
            {name:"Ivan38", age : 77, gender:"male"},
            {name:"Ivan39", age : 77, gender:"male"},
            {name:"Ivan40", age : 77, gender:"male"},
            {name:"Ivan41", age : 77, gender:"male"},
            {name:"Ivan42", age : 77, gender:"male"},
            {name:"Ivan43", age : 77, gender:"male"},
            {name:"Ivan44", age : 77, gender:"male"},
            {name:"Ivan45", age : 77, gender:"male"},
            {name:"Ivan46", age : 77, gender:"male"},
            {name:"Ivan47", age : 77, gender:"male"},
            {name:"Ivan48", age : 77, gender:"male"},
            {name:"Ivan49", age : 77, gender:"male"},
            {name:"Ivan50", age : 77, gender:"male"},],

            [{name:"Mary1", age : 77, gender:"female"},
            {name:"Mary2", age : 77, gender:"female"},
            {name:"Mary3", age : 77, gender:"female"},
            {name:"Mary4", age : 77, gender:"female"},
            {name:"Mary5", age : 77, gender:"female"},
            {name:"Mary6", age : 77, gender:"female"},
            {name:"Mary7", age : 77, gender:"female"},
            {name:"Mary8", age : 77, gender:"female"},
            {name:"Mary9", age : 77, gender:"female"},
            {name:"Mary10", age : 77, gender:"female"},
            {name:"Mary11", age : 77, gender:"female"},
            {name:"Mary12", age : 77, gender:"female"},
            {name:"Mary13", age : 77, gender:"female"},
            {name:"Mary14", age : 77, gender:"female"},
            {name:"Mary15", age : 77, gender:"female"},
            {name:"Mary16", age : 77, gender:"female"},
            {name:"Mary17", age : 77, gender:"female"},
            {name:"Mary18", age : 77, gender:"female"},
            {name:"Mary19", age : 77, gender:"female"},
            {name:"Mary20", age : 77, gender:"female"},
            {name:"Mary21", age : 77, gender:"female"},
            {name:"Mary22", age : 77, gender:"female"},
            {name:"Mary23", age : 77, gender:"female"},
            {name:"Mary24", age : 77, gender:"female"},
            {name:"Mary25", age : 77, gender:"female"},
            {name:"Mary26", age : 77, gender:"female"},
            {name:"Mary27", age : 77, gender:"female"},
            {name:"Mary28", age : 77, gender:"female"},
            {name:"Mary29", age : 77, gender:"female"},
            {name:"Mary30", age : 77, gender:"female"},
            {name:"Mary31", age : 77, gender:"female"},
            {name:"Mary32", age : 77, gender:"female"},
            {name:"Mary33", age : 77, gender:"female"},
            {name:"Mary34", age : 77, gender:"female"},
            {name:"Mary35", age : 77, gender:"female"},
            {name:"Mary36", age : 77, gender:"female"},
            {name:"Mary37", age : 77, gender:"female"},
            {name:"Mary38", age : 77, gender:"female"},
            {name:"Mary39", age : 77, gender:"female"},
            {name:"Mary40", age : 77, gender:"female"},
            {name:"Mary41", age : 77, gender:"female"},
            {name:"Mary42", age : 77, gender:"female"},
            {name:"Mary43", age : 77, gender:"female"},
            {name:"Mary44", age : 77, gender:"female"},
            {name:"Mary45", age : 77, gender:"female"},
            {name:"Mary46", age : 77, gender:"female"},
            {name:"Mary47", age : 77, gender:"female"},
            {name:"Mary48", age : 77, gender:"female"},
            {name:"Mary49", age : 77, gender:"female"},
            {name:"Mary50", age : 77, gender:"female"},],];

function randUser(item) {
    
    if (item === users[0][0].gender) {
        return users[0][Math.floor(Math.random() * users[0].length)];
    }

    if (item === users[1][1].gender) {
        return users[1][Math.floor(Math.random() * users[1].length)];
    }
}

console.log(randUser("male"));
console.log(randUser("female"));
