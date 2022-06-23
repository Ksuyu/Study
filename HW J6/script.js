//! Find a Chair
// So you've found a meeting room - phew! You arrive there ready to present, and find that someone has taken one or more of the chairs!! You need to find some quick.... check all the other meeting rooms to see if all of the chairs are in use.

// Your meeting room can take up to 8 chairs. need will tell you how many have been taken. You need to find that many.

// Find the spare chairs from the array of meeting rooms. Each meeting room array will have the number of occupants as a string. Each occupant is represented by 'X'. The room array will also have an integer telling you how many chairs there are in the room.

// You should return an array of integers that shows how many chairs you take from each room in order, up until you have the required amount.

// example: [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX',2]] when you need 4 chairs:

// result -- > [0, 1, 3] (no chairs free in room 0, take 1 from room 1, take 3 from room 2. No need to consider room 4 as you have your 4 chairs already.

// If you need no chairs, return 'Game On'. If there aren't enough spare chairs available, return 'Not enough!'

// Examples:

// meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4) ---> [0, 1, 3]

// meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5) ---> [0, 0, 1, 2, 2]

// meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0) ---> 'Game On'


// function meeting(occupant, need) {
//     if(need === 0) {
//         return 'Game On';
//     }

//     let counter = 0;
//     let result = [];
//     for (let i = 0; i < occupant.length; i++) {
//         let temp = occupant[i][1] - occupant[i][0].length;
//         if(temp < 0) {
//             temp = 0;
//         }

//         if(counter + temp >= need) {
//             temp = need - counter;
//         }
//         result[i] = temp;
//         counter += temp;

//         if(counter === need) {
//             break;
//         }
//     }
//     return counter < need ? 'Not enough!' : result;
// }
// console.log(meeting([['XXX', 2], ['XXXXX', 6], ['XXXXXX', 9]], 4));
// console.log(meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5));
// console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0));
// console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 10));



//! Tic-Tac-Toe Checker
// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
// [0, 1, 2],
// [2, 1, 0]]
// We want our function to return:

// -1 if the board is not yet finished (there are empty spots and no winners),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw, all spots are filled).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.


let board = [[1,2,1], [2,2,2], [1,1,0]];
let newArr = [[board[0][0] * board[0][1] * board[0][2]], 
              [board[1][0] * board[1][1] * board[1][2]], 
              [board[2][0] * board[2][1] * board[2][2]], 
              [board[0][0] * board[1][1] * board[2][2]], 
              [board[0][0] * board[1][0] * board[2][0]], 
              [board[2][0] * board[1][1] * board[0][2]], 
              [board[0][1] * board[1][1] * board[2][1]], 
              [board[0][2] * board[1][2] * board[2][2]]];


function ticTactoe (newArr) {
    for (let i = 0; i < newArr.length; i++) {
       
        if (newArr[i][0] = 1) {
            return "X won";
        } else

        if (newArr[i][0] = 6) {
            return "O won";
        } else
        if (newArr[i][0] = 0) {
            return "Draw";
        } else {
            return 'game is not finished yet'
        }
    }
}

console.log(ticTactoe(newArr));
         

    









// Калькулятор
// Написати функцію – калькулятор. Функція приймає рядок з прикладом, визначає, яка дія необхідна виконати (+ - * /), переводить операнди у числа, вирішує приклад та повертає результат.

// calc(12, 4, '+') //16
// calc(1, 4, '-') //-3
// calc(12, 5, '/') //2.4
// calc(1.2, 3, '*') //3.6

