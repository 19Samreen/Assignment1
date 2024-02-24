//Q14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
export {guest}
let guest: Array<string> = ['Anum','Tarfeeha','Finza','Paras'];
guest.forEach((guestName) => {
    console.log(`Dear ${guestName}, please join us at dinner tonight.`)
})