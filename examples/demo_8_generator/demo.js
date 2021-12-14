// --- 1 ---
// function* generator() {
//     yield 'h'
//     yield 'e'
//     yield 'l'
//     yield 'l'
//     yield 'o'
// }

// const gen = generator();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// --- 2 ---
// function* numberGenerator(n = 10) {
//     for (let i = 0; i < n; i++) {
//         yield i;
//     }
// }

// const gen = numberGenerator(3);
// for (let key of gen) {
//     console.log(key);
// }