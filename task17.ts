/*Q18: Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/

//Store the locations in a array. Make sure the array is not in alphabetical order.

let places: string[] = ['Paris', 'Tokyo', 'Cayman', 'London', 'Canada']

//Print your array in its original order.

console.log('Original Order:' , places);

//Print your array in alphabetical order without modifying the actual list.

console.log("\n alphabetical order without modifying the actual list.")
console.log([...places].sort())

//Show that your array is still in its original order by printing it again.

console.log('Showing that your array is still in its original order by printing it again:', places)

//Reverse the order of your list. Print the array to show that its order has changed.

console.log("\n Reverse alphabetical order without modifying the actual list.")
console.log([... places].sort().reverse())

//Show that your array is still in its original order by printing it again.

console.log("\n Showing array is still in its original order.")
console.log(places)

//Reverse the order of your list. Print the array to show that its order has changed.

console.log("\n Reverse Order")
places.reverse()
console.log(places)

//Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log("\n Back to original order")
places.reverse()
console.log(places)

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

console.log("\n Change to alphabetic order")
places.sort()
console.log(places)

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

console.log("\n Change to Reverse alphabetic order")
places.sort().reverse()
console.log(places)