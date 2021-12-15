import { sum, divide, pi } from './modules/demo_3.js';
import { File, VERSION } from './modules/demo_4.js';

console.log(sum(12, 3));
console.log(divide(9, 3));
console.log(pi);


console.log(VERSION);

const file = new File();
file.printFileName('image.jpg');