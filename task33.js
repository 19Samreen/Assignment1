/*Q34:Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!*/
// Store the names of favorite pizzas in an array
var favorite_pizzas = ['Pepperoni', 'BBQ Tikka', 'Creamy Fajita'];
// Print the name of each pizza using a for loop
console.log("Printing the names of favorite pizzas:");
for (var _i = 0, favorite_pizzas_1 = favorite_pizzas; _i < favorite_pizzas_1.length; _i++) {
    var pizza = favorite_pizzas_1[_i];
    console.log(pizza);
}
// Modify the for loop to print a sentence using the name of the pizza
console.log("\n Printing sentences about favorite pizzas:");
for (var _a = 0, favorite_pizzas_2 = favorite_pizzas; _a < favorite_pizzas_2.length; _a++) {
    var pizza = favorite_pizzas_2[_a];
    console.log("I like ".concat(pizza, " pizza."));
}
// Additional sentences expressing love for pizza
console.log("\n I really love pizza!");
