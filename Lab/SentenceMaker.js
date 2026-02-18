/*

You should declare an adjective variable.
You should declare a noun variable.
You should declare a verb variable.
You should declare a place variable.
You should declare an adjective2 variable.
You should declare a noun2 variable.
You should assign a string value to the adjective variable.
You should assign a string value to the noun variable.
You should assign a string value to the verb variable.
You should assign a string value to the place variable.
You should assign a string value to the adjective2 variable.
You should assign a string value to the noun2 variable.
You should declare a firstStory variable.
You should use the correct story format for the first story: "Once upon a time, there was a(n) [adjective] [noun] who loved to eat [noun2]. The [noun] lived in a [place] and had [adjective2] nostrils that blew fire when it was [verb].". Pay attention to spaces.
You should assemble your first story using the variables you declared in the correct order.
You should log your first story using the message "First story: [firstStory]".
You should declare a secondStory variable.
You should reassign the adjective variable for the second story.
You should reassign the noun variable for the second story.
You should reassign the verb variable for the second story.
You should reassign the place variable for the second story.
You should reassign the adjective2 variable for the second story.
You should reassign the noun2 variable for the second story.
You should use the correct story format for the second story: "Once upon a time, there was a(n) [adjective] [noun] who loved to eat [noun2]. The [noun] lived in a [place] and had [adjective2] nostrils that blew fire when it was [verb].". Pay attention to spaces.
You should assemble your second story using the variables you declared in the correct order.
You should log your second story using the format "Second story: [secondStory]".
The firstStory should not be the same as the secondStory.

*/

let adjective;
let noun;
let verb;
let place;
let adjective2;
let noun2;

adjective = "cute";
noun = "chair";
verb = "move";
place = "kitchen";
adjective2 = "uncomfortable";
noun2 = "table";

let firstStory;
firstStory = "Once upon a time, there was a(n) " + adjective + " " + noun + " who loved to eat " + noun2 + "." + " The " + noun + " lived in a " + place + " and had " + adjective2 + " " + "nostrils that blew fire when it was " + verb + ".";
console.log("First story: " + firstStory);

adjective = "ugly";
noun = "chimney";
verb = "sneeze";
place = "house";
adjective2 = "old";
noun2 = "ceiling";

let secondStory;
secondStory = "Once upon a time, there was a(n) " + adjective + " " + noun + " who loved to eat " + noun2 + "." + " The " + noun + " lived in a " + place + " and had " + adjective2 + " " + "nostrils that blew fire when it was " + verb + ".";
console.log("Second story: " + secondStory);
