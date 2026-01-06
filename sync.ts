// use node's built-in filesystem lib
import fs from 'fs';

// read & display food
const food: string = fs.readFileSync('food.txt', 'utf8');
console.log(food);
console.log('We ate this');

// read & display drinks
const drinks: string = fs.readFileSync('drinks.txt', 'utf8');
console.log(drinks);
console.log('We drank this');