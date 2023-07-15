let assert = require("assert");
let Phrase = require("../index.js"); // specifiying that the index.js file is one folder/path earlier


describe("Phrase", function() { // Phrase is an object
  // Phrase#palindrome
  describe("#palindrome", function() { // palindrome is a method within an object (Phrase)

    it("should return false for a non-palindrome", function(){
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome()) // apple is a false palindrome, so to get "green" (true) we want opposite of false which is true 
    });

    it("should return true for a palindrome", function(){
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome()) // apple is a false palindrome, so to get "green" (true) we want opposite of false which is true 
    });

    it("should return true for a mixed-case palindrome", function(){;
      let mcPalindrome = new Phrase("RaCeCaR");
      assert(mcPalindrome.palindrome());
    });

    it("should return true for a palindrome with punctuation",function() {;
    let punPalindrome= new Phrase("Madam, I’m Adam.");
    assert(punPalindrome.palindrome());
    })

    describe("#letters", function() {
      it("should return only the letters", function() {
        let punPalindrome = new Phrase("Madam, I’m Adam.")
        assert.strictEqual(punPalindrome.letters(), "madamimadam")
      })
    })

  });
});

//so, without the "!", it would be false since its not a palindrome
// we want the result to be true (green) since its not a palindrome