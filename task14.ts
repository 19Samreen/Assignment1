//Q15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
/*• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/

let guestList: Array<string> = ['Anum','Tarfeeha','Finza','Paras'];

//Add a print statement at the end of your program stating the name of the guest who can’t make it.

let notcoming: string = "Finza";
console.log(`${notcoming} can't make it to dinner.`);

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

let newguest: string = "Sana";
let indexofnotcoming: number = guestList. indexOf(notcoming);

if (indexofnotcoming !== -1)
{
    guestList[indexofnotcoming] = newguest
}
//console.log(guestList[2]);

//Print a second set of invitation messages, one for each person who is still in your list.

console.log("Second set of invitation messages:")
guestList.forEach((guest:String) =>
{
    console.log(`Dear ${guest}, you are invited to dinner.`)
})