// --- 1 ---
const arr = [1, 2, 3];
console.log([...arr]); // [ 1, 2, 3 ]

// --- 2 ---
// повторное использование в одном выражении
// const arr = [1, 2, 3];
// console.log([...arr, ...arr]); // [ 1, 2, 3, 1, 2, 3 ]

// --- 3 ---
// комбинирование с non-spread элементами
// const arr = [3, 4];
// console.log([1, 2, ...arr, 5, 6]); // [ 1, 2, 3, 4, 5, 6 ]
// без spread => [ 1, 2, [ 3, 4 ], 5, 6 ]

// --- 4 ---
// используется даже если передается больше параметров,
// чем функция будет использовать 
// const arr = [1, 2, 3, 4];
// function foo(a, b, c) {
//     console.log(`a = ${a}`); // a = 1
//     console.log(`b = ${b}`); // b = 2
//     console.log(`c = ${c}`); // c = 3
// }
// foo(...arr);

// --- 5 ---
// можно смешивать с параметрами без spread 
// const arr = [4, 5];
// function foo(a, b, c, d) {
//     console.log(`a = ${a}`); // a = 1
//     console.log(`b = ${b}`); // b = 4
//     console.log(`c = ${c}`); // c = 5
//     console.log(`d = ${d}`); // d = 10
// }
// foo(1, ...arr, 10);

// сравнение без spread оператора
// const arr = [1, 2, 3];
// function foo(a, b, c) {
//     console.log(`a = ${a}`); // a = 1,2,3
//     console.log(`b = ${b}`); // b = undefined
//     console.log(`c = ${c}`); // c = undefined
// }
// foo(arr);

// --- 6 ---
// математические вычисления
// const arr = [2, 4, 6, 8];
// console.log(Math.max(...arr)); // 8
// // сравнение до spread
// console.log(Math.max.apply(null, arr)); // 8

// --- 7 ---
// копирование массива
// const arr = [1, 2, 3];
// const arr2 = [...arr];
// console.log(arr === arr2); // false
// console.log(arr2); // [1, 2, 3]

// --- 8 ---
// преобразование строки в массив
// const text = 'hello';
// const arr = [...text];
// console.log(arr); // [ 'h', 'e', 'l', 'l', 'o' ]