/*Q16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/

//Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

let GuestList: Array<string> = ['Anum','Tarfeeha','Finza','Paras'];

for (let guest of GuestList){
    console.log(`Hello ${guest},we have found a bigger table.`);
}

//Add one new guest to the beginning of your array.

let newguestatstart: string = "Amber";
GuestList.unshift(newguestatstart)
console.log(GuestList);

//Add one new guest to the middle of your array. 

let newguestinmiddle: string = "Farah";
let middleindex: number = Math.floor(GuestList.length/2);
GuestList.splice(middleindex, 0, newguestinmiddle)
//console.log(GuestList);

// Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let newguestatend: string = "Aqsa";
GuestList.push(newguestatend)
console.log(GuestList);