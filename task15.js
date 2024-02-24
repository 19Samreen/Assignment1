/*Q16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
//Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
var GuestList = ['Anum', 'Tarfeeha', 'Finza', 'Paras'];
for (var _i = 0, GuestList_1 = GuestList; _i < GuestList_1.length; _i++) {
    var guest = GuestList_1[_i];
    console.log("Hello ".concat(guest, ",we have found a bigger table."));
}
//Add one new guest to the beginning of your array.
var newguestatstart = "Amber";
GuestList.unshift(newguestatstart);
console.log(GuestList);
//Add one new guest to the middle of your array. 
var newguestinmiddle = "Farah";
var middleindex = Math.floor(GuestList.length / 2);
GuestList.splice(middleindex, 0, newguestinmiddle);
//console.log(GuestList);
// Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var newguestatend = "Aqsa";
GuestList.push(newguestatend);
console.log(GuestList);
