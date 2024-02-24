/*Q42:Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/
function show_magicians(Magicians) {
    for (var _i = 0, Magicians_1 = Magicians; _i < Magicians_1.length; _i++) {
        var Magician = Magicians_1[_i];
        console.log(Magician);
    }
}
function make_great(Magicians) {
    for (var i = 0; i < Magicians.length; i++) {
        Magicians[i] = "The Great " + Magicians[i];
    }
}
// Array of magician's names
var Magicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
// Call make_great() to modify the array
make_great(Magicians);
// Call the function to show magicians
show_magicians(Magicians);
