(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"jarciniegas20-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

// reverse a string
function reverse(string) {
  return Array.from(string).reverse().join("");
}

//returns true for a palindrome, false otherwise
function palindrome(string) {
    let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}

function emailParts(email) {
    return email.toLowerCase().split("@")
}



function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase().replace(/\W/g, ''); // replace all instances of a non word character with nothing
  }

this.processedContent = function processedContent() {
  return this.processor(this.content);
}

// Returns the letters in the content.
this.letters = function letters() {
  return this.content.toLowerCase().replace(/\W/g, ''); // replace all instances of a non word character with nothing
  //return Array.from("Madam, I'm Adam.").filter(c => c.match(/[a-z]/i)).join("");

}
  
//returns true for a palindrome, false otherwise
this.palindrome = function palindrome() {
  return this.processedContent() === reverse(this.processedContent());
}
}

function TranslatedPhrase(content, translation) {
this.content = content;
this.translation = translation;

this.processedContent = function processedContent() {
  return this.translation;
}
}

TranslatedPhrase.prototype = new Phrase();

},{}]},{},[1]);
