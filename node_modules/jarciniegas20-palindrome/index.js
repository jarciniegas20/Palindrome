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
  if (this.processedContent()) { // if there are any letters
  return this.processedContent() === reverse(this.processedContent());
} else {
  return false
}
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
