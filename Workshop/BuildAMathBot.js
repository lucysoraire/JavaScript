// For this first step, start by creating a variable called botName and assign it the string value of "MathBot".
// Then, create another variable called greeting and assign it the sentence "Hi there! My name is [botName goes here] and I am here to teach you about the Math object!". In place of the [botName goes here] placeholder, use the botName variable.
// You are free to use template literals or string concatenation with the + operator to achieve this.
// Finally, log the greeting variable to the console.
const botName = "MathBot";
const greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;
console.log(greeting);

// The next part of the workshop will review how the Math.random() method works.
// Start by adding another console.log() that logs the string "The Math.random() method returns a pseudo random number greater than or equal to 0 and less than 1." to the console.
console.log("The Math.random() method returns a pseudo random number greater than or equal to 0 and less than 1.");

// Now, it is time to generate a random number using the Math.random() method.
// Create a variable called randomNum and assign it the value of the result of calling the Math.random() method.
// Then, log the randomNum variable to the console.
// Try adding a space in the code to re-run the bot and see different random numbers that are generated.
let randomNum = Math.random();
console.log(randomNum);

// Start by adding another console.log() that logs the message "Now, generate a random number between two values." to the console.
// Then, create a variable called min and assign it the value of 1 and create a variable called max and assign it the value of 100.
// In the next step, you will generate a random number between these two values.
console.log("Now, generate a random number between two values.");
const min = 1;
const max = 100;

// Create a variable called randomNum2 and assign it the result of generating a value between the min and max values.
// Then, log the randomNum2 variable to see the result. Try refreshing the page to see different results.

// For the next part of the workshop, you will review how to work with the Math.floor() method.
// Start by adding a console.log() that logs the message "The Math.floor() method rounds the value down to the nearest whole integer."
console.log("The Math.floor() method rounds the value down to the nearest whole integer.");

// Create a variable called numRoundedDown and assign it the result of rounding the floating point number 6.7 down to the nearest whole integer.
// Then, log the numRoundedDown variable to the console to see the result.
const numRoundedDown = Math.floor(6.7);
console.log(numRoundedDown);

// Start by adding another console.log() that logs the message "Now, generate a random integer between two values." to the console.
// In the next step, you will generate a random integer between the values of the min and max variables you have already created.
console.log("Now, generate a random integer between two values.");

// Create a variable called randomInt and assign it the result of generating a value between the min and max values.
// Then, log the randomInt variable to see the result. Try refreshing the page to see different results.
const randomInt = (Math.random() * (max - min) + min);
console.log(randomInt);

// Start by logging the string "The Math.ceil() method rounds the value up to the nearest whole integer." to the console.
console.log("The Math.ceil() method rounds the value up to the nearest whole integer.");

// The Math.ceil() method rounds the value up to the nearest whole integer.
// Create a variable called numRoundedUp and assign it the result of rounding the floating point number 3.2 up to the nearest whole integer.
// Then, log the numRoundedUp variable to the console to see the result.
const numRoundedUp = Math.ceil(3.2);
console.log(numRoundedUp);

// Start by adding a console.log() that logs the message "The Math.round() method rounds the value to the nearest whole integer." to the console.
console.log("The Math.round() method rounds the value to the nearest whole integer.");

// Create a new variable called numRounded and assign the result of rounding the number 2.7. Then, log the value of numRounded to the console.
// Below that, create another new variable called numRounded2 and assign the result of rounding the number 11.2. Then, log the value of numRounded2 to the console.
const numRounded = Math.round(2.7);
console.log(numRounded);

const numRounded2 = Math.round(11.2);
console.log(numRounded2);

// Start by adding a console.log() that logs the message "The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range." to the console.
console.log("The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range.");

// Create a variable called maxNum and assign it the result of finding the maximum number between the numbers 3, 125, 55, 24. Then, log the value of maxNum to the console.
// Below that, create a variable called minNum and assign it the result of finding the minimum number between the numbers 6, 90, 14, 90, 2. Then, log the value of minNum to the console.
const maxNum = Math.max(3, 125, 55, 24);
console.log(maxNum);

const minNum = Math.min(6, 90, 14, 90, 2);
console.log(minNum);

// For the last step of the workshop, you will log the message "It was fun learning about the different Math methods with you!" to the console.
// And with that last change, you have completed the MathBot workshop!
console.log("It was fun learning about the different Math methods with you!");