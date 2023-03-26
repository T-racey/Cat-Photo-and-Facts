//Task 1 - sub task 1 - complete

//Write a function called makeLegend, which takes in a name (string) as its only argument. The function should return a new string which includes the name plus the words ' is now a legend.'.
//For example, makeLegend('David Beckham') should return 'David Beckham is now a legend.'.


function makeLegend(name) {
  return name + " is now a legend.";
}

const celebs = [
  "David Beckham",
  "Cher",
  "Madonna",
  "Tom Petty",
  "Cristiano Ronaldo",
  "Whoopi Goldberg",
  "Samuel L Jackson",
  "Angelina Jolie",
  "Richard Osman",
  "Emma Thompson"
];

//The following lines will state that David Beckham is now a legend, as that is the first name in the array.
//If another name was required, the position in the array would need to be changed from [0] to a number between 0 and 9.

const legend = makeLegend(celebs[0]);
console.log(legend); // David Beckham is now a legend.

//Task 1 - sub task 2 - complete

//Using the makeLegend function, the celebs array and a for loop, create a new array which includes ' is now a legend.' 
//for each celebrity. Save this new array to the variable legendaryCelebs.
//For example, if the celebs array was ["Chris", "Liz", "Alice"] to begin with, then 
//legendaryCelebs would contain ["Chris is now a legend.", "Liz is now a legend.", "Alice is now a legend."]

const legendaryCelebs = []; //create an empty array
for (let i = 0; i < celebs.length; i++) {
  legendaryCelebs.push(makeLegend(celebs[i])); //push the new array into the empty array
}

console.log(legendaryCelebs);

//Task 1 - sub task 3 - complete

//Use another for loop to produce a new array of all of the celebrity names which start with a vowel, 
//and store that new array in a new variable called vowelCelebs.
// For example, if the celebs array was ["Chris", "Liz", "Alice"] to begin with, 
//then vowelCelebs should contain ["Alice"] (as Alice is the only name that begins with a vowel).
//You will need to know how to query the first position in a string and check if it is a vowel.
//You will need a conditional statement (OR) to check if all of the names in the array 
//I will know I've got this right if my output contains the following array: ["Angelina Jolie", "Emma Thompson"] 
//as these are the only names which begin with a vowel.

const vowelCelebs = []; //create an empty array
for (let i = 0; i < celebs.length; i++) {
  if (celebs[i].charAt(0) === "A" || celebs[i].charAt(0) === "E" || celebs[i].charAt(0) === "I" || celebs[i].charAt(0) === "O" || celebs[i].charAt(0) === "U") {
    vowelCelebs.push(celebs[i]); //push the new array into the empty array
  }
}

console.log(vowelCelebs);

