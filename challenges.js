// Problem Solving Process
// Restate the goal. 
// Consider the data.
// Ask clarifying questions.
// Break it down.
// Research.
// Start coding. 
// Stuck? Go back to your pseudocode.
// Refactor.

// Challenge 1
// Start with an array of strings. Then, print only the words with more than 3 characters.
// Create array of strings and for loop through the full array printing strings that are only .length() < 3

// Challenge 2
// Write a method or function that accepts a string. The method or function should return a boolean that describes whether or not the string has an even number of characters.
var name = "Brendan";
var name2 = "Jeremy";

function evenString(string) {
  if (string.length % 2 === 0)
    return true;
  else
    return false;
}
console.log(evenString(name));
console.log(evenString(name2));
// Challenge 3
// Start with an array of strings. Print all of the words in the array, but change every t to an uppercase T.
var potatosArray = ["Potato", "Tintin", "tumultuous", "fittings"];

function upperT(array) {
  for(var i = 0 ; i < array.length ; i++) {
    array[i] = array[i].replaceAll('t', 'T');
  }
  return array
}
potatosArray = upperT(potatosArray);
console.log(potatosArray);
// Challenge 4
// Start with an array of student names. Print a numbered list of the student's names in alphabetical order. For example, if you start with ["Hector", "Winston", "Finley"], the final output should be 1. Finley 2. Hector 3. Winston.
var studentName = ["Hector", "Winston", "Finley"];
studentName.sort();
for (i = 0; i < studentName.length ; i++) {
  console.log(`${i+1}. ${studentName[i]}`)
}

// Challenge 5
// Write a method or function that accepts an array of 10 integers (between 0 and 9) and returns a string of those numbers in the form of a phone number. For example, if you were given [5, 5, 5, 1, 2, 3, 4, 5, 6, 7], the method or function will return 555-123-4567.
var phoneNumber1 = [5, 5, 5, 1, 2, 3, 4, 5, 6, 7];
function toPhoneNumber(phoneNumber){
  var phoneString = ""
  for (i = 0 ; i < phoneNumber.length ; i++) {
    if (i === 3 || i === 6) {
      phoneString = phoneString + "-" + phoneNumber[i].toString();
    }
    else {
      phoneString = phoneString + phoneNumber[i].toString();
    }
  }
  return phoneString;
}
console.log(toPhoneNumber(phoneNumber1));