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
function greetUser(value: string): string {
    return `Hello ${value}`
};
console.log(greetUser("world"));
//////==============////////////

// 📌 Section 2: Object Types & Interfaces (15 points)
//2: Create an interface called Student with the following fields:

// name: string
// rollNo: number
// passed: boolean

interface Student {
    name: string;
    rollNo: number;
    passed: boolean;

};

let studentDetail = {
    name: "ALi",
    rollNo: 15,
    passed: true,
}

// 2:Create a function printStudentDetails that accepts a Student and logs all details.

function printStudentDetails(Student: Student): void {
    console.log("Name:", Student.name);
    console.log("rollNo:", Student.rollNo);
    console.log("Passed:", Student.passed);
}

printStudentDetails(studentDetail)

/////=========/////////

// 📌  Section 3: Functions & Unions (10 points).

// 1:Create a function called printId that accepts either a number or a string and prints:

// "ID is a number" if it’s a number
// "ID is a string" if it’s a string


function printId(Id: string | number): void {
    if (typeof Id === "string") {
        console.log("ID is a string");
    }
    if (typeof Id === "number") {
        console.log("ID is a number");
    }
}
printId(2);

// 2:Create a type Result that can only be "pass" or "fail". Use it in a function that returns a message.
type Result = "pass" | "fail";

function resultMessage(result: Result): string {
    if (result === "pass") {
        return "Congratulations, you passed!";
    }
    else {
        return "Sorry, you failed.";
    }
};
console.log(resultMessage("pass"));

/////=========/////////

// 📌 Section 4: Tuples, Enums, and Literal Types 
// 1:Define a tuple for a User with the format: [name: string, age: number].

let User:[name:string , age:number] = ["Taha" , 18];
console.log(User);

// 2:Create an enum called Direction with Up, Down, Left, Right.

enum Direction{
     Up,
     Down,
     Left,
     Right,
};
console.log(Direction);

// 3:Create a function move that takes a direction of type Direction and logs the move.

function move(direction:Direction):void{
console.log(direction);
};
move(Direction.Up);
/////////////==============////////////