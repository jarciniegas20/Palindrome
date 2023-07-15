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
    return string.toLowerCase();
  }

this.processedContent = function processedContent() {
  return this.processor(this.content);
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
