let Phrase = require("jarciniegas20-palindrome"); // reading index.js from the jarciniegas20-palindrome folder using the npm module

function palindromeTester(event) {
   
    event.preventDefault(); //prevents trying to send the information back to the server which doesnt exits
    let phrase = new Phrase(event.target.phrase.value); // from the form itself
    let palindromeResult = document.querySelector("#palindromeResult"); // access the palindromeTester form id


if (phrase.palindrome()) { // if true
    palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>" is a palindrome!` 
 } else { 
    palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome`
 }
}

document.addEventListener("DOMContentLoaded", function() { // adding a second listener that listens to the event with the dom content loaded. 
    // essentially, don't try to run this until the html page is loaded. 
    // so the order is main.js right before this, then html page loaded, then this
    
    let button = document.querySelector("#palindromeTester"); // access the palindromeTester form id
    button.addEventListener("submit", function() { // listen for when the button is pressed or "submitted"
        palindromeTester(event); // finally, once the button has been pressed, load the palindromeTester function

    // let form = document.querySelector("#palindromeTester"); 
    // form.addEventListener("submit", function() { 
    //    palindromeTester(); 

     })
});