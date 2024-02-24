//Question 3
// LowerCase

let myName: string = 'Samreen Siraj';
let lowercaseName: string = myName. toLowerCase();
console.log(lowercaseName);

//UpperCase
let uppercaseName: string = myName. toUpperCase();
console.log(uppercaseName);

//TitleCase
let words:string[] = myName.split(" ");
let titlecaseName: string = ""
for (let i = 0; i < words.length; i++){
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()+""
};

console.log(titlecaseName)