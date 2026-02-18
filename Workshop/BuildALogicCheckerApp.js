// Begin by declaring a variable named truthyOrFalsy and assign it the boolean value true.
let truthyOrFalsy = "";

// Now, call Boolean(truthyOrFalsy) and log the result to the console.
console.log(Boolean(truthyOrFalsy));

// Change the assignment of truthyOrFalsy by setting its value to "freeCodeCamp". You will still see true logged to the console because a non-empty string is a truthy value.

// For now, change the assignment of truthyOrFalsy by setting its value to an empty string. After that, you'll see false logged to the console.

// Now that you know what truthy and falsy values are, remove both your variable declaration and console.log statement from your code.

// Declare a variable named hasDeveloperJob and assign it the boolean value true.
let hasDeveloperJob = true;

// Below your variable, create an if statement that uses hasDeveloperJob as its condition. Within the body of your if statement, log "Timmy is employed as a developer." to the console.
if (hasDeveloperJob) {
  console.log("Timmy is employed as a developer.");
}

// Declare another variable named isTimmyAGamer and assign it the boolean false.
const isTimmyAGamer = false;

// Now create another if statement that uses isTimmyAGamer as its condition. Inside the body of your if statement, log "Timmy loves to play World of Warcraft." to the console.
// Note that you won't see anything logged to the console as the condition of your new if statement is false.
if (isTimmyAGamer){
  console.log("Timmy loves to play World of Warcraft.");
}

// Declare another variable named timmyAge and set it to 18.
const timmyAge = 14;

// Create a third if statement. For its condition, use the >= operator to check if timmyAge is greater than or equal to 16.
// Inside the body of your new if statement, log "Timmy is old enough to drive." to the console.
if (timmyAge >= 16) {
  console.log("Timmy is old enough to drive.");
} else {
  console.log("Timmy is not old enough to drive.");
}

// Add an else clause to the existing if statement. Inside the body of your else clause, log "Timmy is not old enough to drive." to the console.

// Finally, change the declaration of timmyAge and set it to a number less than 16. After that you'll see "Timmy is not old enough to drive." logged to the console.
