//////////////////PROBLEM 1////////////////////
/* Create a variable called 'myName' with a value that is your name as a string. */

//CODE HERE 

let myName = "William Bohn" // strings can be Variables!

//////////////////PROBLEM 2////////////////////
/* Create a variable called 'faveNum' with a value that is your favorite number. */

//CODE HERE

let faveNum = 55 // so can numbers

//////////////////PROBLEM 3////////////////////
/* Create a variable called 'lovesCode' and assign it a boolean value. */

//CODE HERE

let lovesCode = true // and don't forget the booleans (true/false)

//////////////////PROBLEM 4////////////////////
/*
  Write an if-statement that checks if the faveNum variable is 
  equal to 13. If it is, console.log('lucky 13!'). 
  If it's not, console.log('not lucky 13').
*/

//CODE HERE

if (faveNum === 13) { //if/else chains are good for sorting data
  console.log("lucky 13!")
} else {
  console.log("not lucky 13")
}

//////////////////PROBLEM 5////////////////////
/*
  Write a for loop that prints out your faveNum 5 times.
*/

//CODE HERE

for (let i = 0;i<5;i++) { // for loops are extremely powerful for getting lots done quickly
  console.log(faveNum)
}
