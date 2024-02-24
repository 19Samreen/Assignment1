/*Q42:Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/

function show_magicians(Magicians: string[]): void {
    for (let Magician of Magicians) {
        console.log(Magician);
    }
}

function make_great(Magicians: string[]): void {
    for (let i = 0; i < Magicians.length; i++) {
        Magicians[i] = "The Great " + Magicians[i];
    }
}

// Array of magician's names
let Magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

// Call make_great() to modify the array
make_great(Magicians);

// Call the function to show magicians
show_magicians(Magicians);