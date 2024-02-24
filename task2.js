//Question 2
var myName = 'Samreen Siraj';
var lowercaseName = myName.toLowerCase();
console.log(lowercaseName);
var uppercaseName = myName.toUpperCase();
console.log(uppercaseName);
var words = myName.split("");
var titlecaseName = "";
for (var i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + "";
}
;
console.log(titlecaseName);
