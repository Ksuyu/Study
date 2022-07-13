// !Маркер
// Реалізувати клас, який описує простий маркер. У класі мають бути такі компоненти:

// поле, яке зберігає колір маркера;
// поле, яке зберігає кількість чорнила в маркері (у відсотках);
// метод друку (метод приймає рядок і виводить текст відповідним кольором; текст виводиться до тих пір, поки в маркері є чорнило; один не пробіловий символ – це 0,5% чорнила в маркері).


class Marker {
    constructor(color) {
        this.color = color;
        this.ink = 100;
    }

    print (phrase) {
        let text = "phrase";
        let result = " ";
        for(let i = 0; i < 200; i++) {
            if (this.ink != 0) {
                // if (phrase[i] == " ") {
                //     this.ink += 0.5;
                //     }
                this.ink -= 0.5;
                console.log(this.ink);
                
                result += " " + phrase;
            } 
            else {
                console.log("Marker is over");
                break;
            }
            
        }
        // result += " ";
        return result;

    }
}
        


let marker = new Marker("pink");
console.log (marker.print("hi there"));




// !Коло
// Реалізувати клас, що описує коло. У класі мають бути такі компоненти:

// поле, що зберігає радіус кола;
// get-властивість, що повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, що повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.
// Продемонструвати роботу властивостей та методів.


// class Circle {
//     constructor(radius) {
//         this._radius = radius;
//     }

//     get radius() {
//         return this._radius;
//     }

//     set radius(value) {
//         return this._radius = value;
//     }

//     get diametr() {
//         return this._radius *2;
//     }

//     area () {
//         return Math.PI * this.radius * this.radius;

//     }

//     length () {
//         return 2 * Math.PI * this.radius;
//     }
// }

// let circle = new Circle(5);
// console.log(circle.area());
// console.log(circle.length());
// console.log(circle.radius);
// console.log(circle);





//! Count IP Addresses
// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

// Examples ipsBetween("10.0.0.0", "10.0.0.50") === 50 ipsBetween("10.0.0.0", "10.0.1.0") === 256 ipsBetween("20.0.0.10", "20.0.1.0") === 246



