/*Q23:Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/

let car: string = 'subaru';

// Tests evaluating to True
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True

console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota'); // True

console.log("Is car.length > 0? I predict True.");
console.log(car.length > 0); // True

console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru'); // True

console.log("Does car start with 'sub'? I predict True.");
console.log(car.indexOf('sub') === 0); // True

// Tests evaluating to False
console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota'); // False

console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru'); // False

console.log("Is car.length < 5? I predict False.");
console.log(car.length < 5); // False

console.log("Is car.toUpperCase() == 'SUBARU'? I predict False.");
console.log(car.toUpperCase() != 'SUBARU'); // False

console.log("Does car end with 'sub'? I predict False.");
console.log(car.indexOf('sub') === 1); // False