/*Q24:More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
// Tests for equality and inequality with strings
// Tests for equality and inequality with strings
var string1 = 'hello';
var string2 = 'world';
console.log("Is string1 equal to 'hello'? I predict True.");
console.log(string1 == 'hello'); // True
console.log("Is string1 not equal to string2? I predict True.");
console.log(string1 != string2); // True
// Tests using the lower case function
var word = 'HELLO';
console.log("Is word in lowercase equal to 'hello'? I predict True.");
console.log(word.toLowerCase() == 'hello'); // True
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 10;
var num2 = 5;
console.log("Is num1 equal to 10? I predict True.");
console.log(num1 == 10); // True
console.log("Is num2 not equal to 10? I predict True.");
console.log(num2 != 10); // True
console.log("Is num1 greater than num2? I predict True.");
console.log(num1 > num2); // True
console.log("Is num2 less than num1? I predict True.");
console.log(num2 < num1); // True
console.log("Is num1 greater than or equal to 10? I predict True.");
console.log(num1 >= 10); // True
console.log("Is num2 less than or equal to 5? I predict True.");
console.log(num2 <= 5); // True
// Tests using "and" and "or" operators
var x = 5;
var y = 10;
console.log("Is x greater than 3 and y less than 15? I predict True.");
console.log(x > 3 && y < 15); // True
console.log("Is x greater than 3 or y greater than 15? I predict True.");
console.log(x > 3 || y > 15); // True
// Test whether an item is in an array
var fruits = ['apple', 'banana', 'orange'];
console.log("Is 'apple' in the fruits array? I predict True.");
console.log(fruits.indexOf('apple') !== -1); // True
// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(fruits.indexOf('grape') === -1); // True
