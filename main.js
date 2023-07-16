let Phrase = require("jarciniegas20-palindrome"); // reading index.js from the jarciniegas20-palindrome folder using the npm module

function palindromeTester() {
   
    let string = prompt("A palindrome is a word or phrase that is the same forwards and backwards. \
Please enter a string to test if it's a palindrome:");
    let phrase = new Phrase(string);

if (phrase.palindrome()) { // if true
    alert(`"${phrase.content}" is a palindrome!`) 
 } else { 
        alert(`"${phrase.content}" is not a palindrome`)
 }
}

document.addEventListener("DOMContentLoaded", function() { // adding a second listener that listens to the event with the dom content loaded. 
    // essentially, don't try to run this until the html page is loaded. 
    // so the order is main.js right before this, then html page loaded, then this
    
    let form = document.querySelector("#palindromeTester"); // access the palindromeTester form id
    form.addEventListener("submit", function() { // listen for when the button is pressed or "submitted"
        palindromeTester(); // finally, once the button has been pressed, load the palindromeTester function
    })
});