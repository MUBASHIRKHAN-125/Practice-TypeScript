// 📌  Section 1: Basic Type Annotations
// 1:Declare the following variables with appropriate types:

let num: number = 25;
console.log(num);
// b. A string called `fullName` with value "Ali Khan"
let fullName: string = "Ali Khan";
console.log(fullName);
// c. A boolean called `isActive` with value true
let bool: boolean = true;
console.log(bool);
// d. An array of numbers called `marks` with values [90, 88, 76]
let arrayNumber: number[] = [90, 88, 76];
// let arrayNumber:Array<number> = [90,88,76];
console.log(arrayNumber);
////==========//////////

// 2:Create a function called greetUser that accepts a name (string) and returns a greeting string.
function greetUser(value: string):string {
    return `Hello ${value}`
};
console.log(greetUser("world"));
//////==============////////////

// 📌 Section 2: Object Types & Interfaces (15 points)

let num4:number = 45;