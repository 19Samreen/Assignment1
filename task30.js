/*Q31:No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
var Usernames = [];
if (Usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _i = 0, Usernames_1 = Usernames; _i < Usernames_1.length; _i++) {
        var Username = Usernames_1[_i];
        if (Username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(Username, ", thank you for logging in again."));
        }
    }
}
