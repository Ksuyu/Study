// 1. ДНК

// Дезоксирибонуклеїнова кислота (ДНК) — це хімічна речовина, що міститься в ядрі клітин і несе «інструкції» для розвитку та функціонування живих організмів.

// У рядках ДНК символи «А» і «Т» доповнюють один одного, як «С» і «G». У вас є функція з однією стороною ДНК - вам потрібно отримати іншу комплементарну сторону. Нитку ДНК ніколи не буває порожнім або ДНК взагалі немає.

// let DNAchain = prompt('Введіть послідовність однієї зі сторін ДНК', "ATGC");

// function showDNAchain(DNAchain) {
//     let newDNAchain = '';

//     // Check for empty field

//     if (DNAchain === '') {
//         console.log('Увага! Ви забули ввести послідовність ДНК');
//     }

//     // Body
    
//     for (let i = DNAchain.length - 1; i >= 0; i--) {
//       let symbol = DNAchain[i];
 
//       if (symbol === 'A') {
//         newDNAchain += 'T';
//       } else if (symbol === 'T') {
//         newDNAchain += 'A';
//       } else if (symbol === 'C') {
//         newDNAchain += 'G';
//       } else if (symbol === 'G') {
//         newDNAchain += 'C';
//       } else {

//         // Check for wrong symbols

//         console.log('Увага! Зазначені символи не є ДНК'); 
//       }
//     } 

//     return newDNAchain;

// }

// console.log(showDNAchain(DNAchain));
    
  
  
// 2. Найкоротше слово

// Напишіть функцію, що отримує у якості аргумента рядок слів та повертає довижину найкоротшого

// Приклад:

// "bitcoin take over the world maybe who knows perhaps" --> 3

// let string = prompt('Введіть рядок слів', 'bitcoin take over the world maybe who knows perhaps');

// function findMinWordLength(string) {
//     let words = string.split(' ');
//     let minWord = words[0];
   
//     for (let i = 0; i < words.length; i++) {
        
//         if (minWord.length > words[i].length) {
//             minWord = words[i];
//         }
//     }  
//     return minWord.length;  
// }

// console.log(findMinWordLength(string));


// 3. Ваше замовлення Ваше завдання - відсортувати заданий рядок. Кожне слово в рядку міститиме одне число. Це число є позиція, яку має мати слово в результаті. Примітка. Числа можуть бути від 1 до 9. Отже, 1 буде першим словом (а не 0).

// Якщо вхідний рядок порожній, поверніть порожній рядок. Слова у вхідному рядку будуть містити лише дійсні послідовні числа. Приклад:

// "is2 Thi1s T4est 3a" --> "Thi1s is2 3a T4est"

// "4of Fo1r pe6ople g3ood th5e the2" --> "Fo1r the2 g3ood 4of th5e pe6ople"

// "" --> ""

let string = prompt('Введіть рядок слів', 'is2 Thi1s T4est 3a');
let wordsArr = string.split(' ');

function putInOrder(string) {

}






// 4. Чек-методи Створити масив, який описує чек у магазині. Кожен елемент масиву складається із назви товару, кількості та ціни за одиницю товару. Написати такі функції.

// Роздруківка чека на екран.

// Підрахунок загальної суми покупки.

// Отримання найдорожчої покупки у чеку.

// Підрахунок середньої вартості одного товару у чеку.