"use strict";
// 📌  Section 1: Basic Type Annotations
// 1:Declare the following variables with appropriate types:
let num = 25;
console.log(num);
// b. A string called `fullName` with value "Ali Khan"
let fullName = "Ali Khan";
console.log(fullName);
// c. A boolean called `isActive` with value true
let bool = true;
console.log(bool);
// d. An array of numbers called `marks` with values [90, 88, 76]
let arrayNumber = [90, 88, 76];
// let arrayNumber:Array<number> = [90,88,76];
console.log(arrayNumber);
////==========//////////
// 2:Create a function called greetUser that accepts a name (string) and returns a greeting string.
function greetUser(value) {
    return `Hello ${value}`;
}
;
console.log(greetUser("world"));
//////==============////////////
// 📌 Section 2: Object Types & Interfaces (15 points)
let num4 = 45;
