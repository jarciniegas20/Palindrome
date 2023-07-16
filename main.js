let Phrase = require("jarciniegas20-palindrome"); // reading index.js from the jarciniegas20-palindrome folder using the npm module

let string = prompt("A palindrome is a word or phrase that is the same forwards and backwards. \
Please enter a string to test if it's a palindrome:");
let phrase = new Phrase(string);

if (phrase.palindrome()) { // if true
    alert(`"${phrase.content}" is a palindrome!`) 
 } else { 
        alert(`"${phrase.content}" is not a palindrome`)
 }
