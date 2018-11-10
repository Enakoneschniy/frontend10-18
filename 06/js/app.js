;'use strict';
// alert('Hello JavaScript!');

// alert(foo);
// alert(number); // fatal error
var foo = 56; // deprecated
// alert(foo);

let number = 4; // number
const PI = 3.14; // number
const string = "Hello world"; // string
const string1 = 'Hello world'; // string
const string2 = `Hello world`; // string
const isAuth = true; // true / false - boolean
const bar = undefined; // undefined
const baz = null; // null (!) object
const obj = {}; // object

console.log(1, typeof number);
console.log(2, typeof string);
console.log(3, typeof isAuth);
console.log(4, typeof bar);
console.log(5, typeof baz);
console.log(6, typeof obj);

const age = 25;
const vozrast = 25; //не правильное название
const возраст = 25; //не правильное название
const userName = 'Petya'; // camelCase
const user_name = 'Petya'; // snake_case

const sum = 0.1 + 0.2;
console.log(sum);

// const a = +prompt('Input a', '');
// const b = +prompt('Input b', '');
// const a = parseInt( prompt('Input a', '') );
// const b = parseInt( prompt('Input b', '') );
// const a = parseFloat( prompt('Input a', '') );
// const b = parseFloat( prompt('Input b', '') );
// console.log(a + b);
// console.log(3 + (+'4'));
// "334.3", "45etr465", "3e4"
let a1 = 5;
let sum2 = 6;

sum2 += a1; // sum2 = sum2 + a1; +=, -=, *=, /=, %=

console.log(sum2);

let x = 5;
x++; // 5
++x; // 7
console.log(x); // 7

let c = 1;
let f = 2;
let g = 3;
const res = c++ + --f - g-- / c;












