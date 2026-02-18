// To start, create a variable called originalString and assign it the value of "I love cats.".
const originalString = "I love cats.";

// Below your originalString variable, add a console.log() with the string "Original string:".
// Then below that console.log(), add another console.log() with the originalString variable.
console.log("Original string:");
console.log(originalString);

// Remember that strings are immutable which means the original text is not modified in that example. A new string is created instead.
// Create a new variable called replacedString and assign it originalString.replace("cats", "dogs").
const replacedString = originalString.replace("cats", "dogs");

// Start by adding a console.log() with the value "After using the replace() method:".
// Then below that console.log(), add another console.log() with the replacedString variable.
// Take a look at the console and you should see that the new sentence says "I love dogs." instead of the original "I love cats.".
console.log("After using the replace() method:");
console.log(replacedString);

// Start by creating a new variable called exampleSentence and assign it the string "I love cats and cats are so much fun!".
// Then below that variable, log to the console "Original sentence:". Then below that console.log(), add another console.log() with the exampleSentence variable.
const exampleSentence = "I love cats and cats are so much fun!";
console.log("Original sentence:");
console.log(exampleSentence);

// Next, create a new variable called dogsOnlySentence and assign it exampleSentence.replace("cats", "dogs").
// Then below that variable, log to the console "Replacing all occurrences of cats with dogs:". Below that console.log(), add another console.log() for the dogsOnlySentence variable.
// You should now see the text "I love dogs and cats are so much fun!" logged to the console. But that isn't the desired result. In the next step, you will learn how to fix it so the text reads "I love dogs and dogs are so much fun!".
const dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs");
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence);

// To get the desired output of "I love dogs and dogs are so much fun!", you will need to use the replaceAll() method instead of the replace() method. This method returns a new string for all matches to the substring.
// Update the exampleSentence.replace("cats", "dogs") to use the replaceAll() method instead. Now you should see the correct text in the console.

// Begin by creating a variable called learningSentence and assign the string "I love learning!".
// Then below that variable, log to the console "Original learning sentence:". Below that console.log(), add another console.log() for the learningSentence variable.
const learningSentence = "I love learning!";
console.log("Original learning sentence:");
console.log(learningSentence);

// Since strings are immutable, this method will not modify the original string. It will return a new string with the repeated content.
// Create a variable called repeatedLove and assign it "love ".repeat(3). Then log to the console the repeatedLove variable so you can see the result.
const repeatedLove = "love ".repeat(3).trimEnd();
console.log(repeatedLove);

// It would be nice to see that repeated word in a sentence. Create a new variable called newSentence and assign it the result of concatenating the word "I " with the repeatedLove variable followed by concatenating the string " learning.". Then log the newSentence variable to the console. You can choose to use either the + operator or template literals for the string concatenation.
// Now you should see the text "I love love love  learning.".
const newSentence = `I ${repeatedLove} learning.`;
console.log(newSentence);

// As mentioned in the prior step, there is an extra space after the last "love" in the sentence "I love love love  learning.". To remove that extra space, you can use the trimEnd() method.
// At the end of the "love ".repeat(3) method, chain the trimEnd() method. You can chain methods like this:
// .firstMethod().secondMethod()