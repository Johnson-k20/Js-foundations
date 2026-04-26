/*
ES6(ecmascript 2015)
1. variable es6 introduced new ways to declare variables using let and const, which provide block scope and help prevent issues related to variable hoisting and re-declaration.
. let
behaviour: block-scoped variable, can be updated but not re-declared.
Used for states that can change over time, such as counters, flags, or any value that may need to be updated during the execution of a program.
example:
let count = 0;
count = 5; // reassigning the value of count
. const
behaviour: block-scoped variable, cannot be updated or re-declared.
Used for values that should remain constant throughout the execution of a program, such as configuration settings, fixed values, or any value that should not be changed after it is assigned.
example:
const PI = 3.14;
PI = 3.14159; // Error: Assignment to constant variable (cannot reassign a const variable)  

2. Destructuring
ES6 introduced destructuring assignment, which allows you to unpack values from arrays or properties from objects into distinct variables. This feature provides a more concise and readable way to extract data from complex structures.
Example of array destructuring:
const numbers = [1, 2, 3];
const [a, b, c] = numbers; // a = 1, b = 2, c = 3
Example of object destructuring:
const person = { name: "Alice", age: 30 };
const { name, age } = person; // name = "Alice", age = 30
3. Template literals
ES6 introduced template literals, which are string literals that allow for embedded expressions. They provide a more convenient and readable way to create strings, especially when concatenating variables or expressions.
Example:
const name = "Alice";
const greeting = `Hello, ${name}!`; // Output: Hello, Alice!

4. Arrow functions
ES6 introduced arrow functions, which provide a shorter syntax for writing functions. They also have a lexical this binding, meaning they inherit the this value from the surrounding context.
Example:

const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5




5. Classes
ES6 introduced classes, which provide a more familiar syntax for creating objects and handling inheritance in JavaScript. Classes are syntactical sugar over JavaScript's existing prototype-based inheritance.
Example:
class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }   
}
const alice = new Person("Alice", 30);
alice.greet(); // Output: Hello, my name is Alice and I am 30 years old.
6. Modules
ES6 introduced a module system that allows you to organize your code into separate files and import/export functionality between them. This helps to improve code organization and maintainability.
Example of exporting a function from a module:          
// math.js
export function add(a, b) {
    return a + b;
}
Example of importing a function from a module:
// main.js
import { add } from './math.js';
console.log(add(2, 3)); // Output: 5

mental model for scope:
let- A block variable is like a secret note that can only be read by the person who has it and cannot be accessed by anyone else outside of that note.(cntrolled change)
const- A constant variable is like a locked box that cannot be opened or changed once it has been sealed. It is used to store values that should not be modified after they are assigned.
destructuring- Destructuring is like unpacking a suitcase. You can take out specific items (values) from the suitcase (array or object) and assign them to individual variables for easier access and use in your code.
template literals- Template literals are like a magic string that allows you to embed expressions and variables directly within the string, making it easier to create dynamic and readable strings.
arrow functions- Arrow functions are like a shorthand way of writing functions. They provide a more concise syntax and automatically bind the this value from the surrounding context, making them useful for writing simple functions and callbacks.
classes- Classes are like blueprints for creating objects. They allow you to define properties and methods that can be shared among multiple instances of the class, making it easier to create and manage complex objects in your code.
modules- Modules are like separate compartments in a toolbox. They allow you to organize your code into different files and import/export functionality between them, helping to keep your code organized and maintainable.
spread and rest operators- The spread operator is like a magic wand that allows you to expand an array or object into individual elements or properties. The rest operator is like a catch-all that collects the remaining elements or properties into a new array or object.

fuctions in es6:
esc introduced;
- Default parameters: Allows you to set default values for function parameters if they are not provided when the function is called.
Example:
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greet(); // Output: Hello, Guest!
greet("Alice"); // Output: Hello, Alice!


- Rest parameters: Allows you to represent an indefinite number of arguments as an array.
Example:
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5));
// Output: 9


- Arrow functions: Provides a shorter syntax for writing functions and has a lexical this binding.
Example:
const multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // Output: 6


- Function expressions: Allows you to define functions as expressions and assign them to variables.
Example:
const divide = function(a, b) {
    return a / b;
};
console.log(divide(10, 2)); // Output: 5

- Classes: Provides a more familiar syntax for creating objects and handling inheritance.
Example:
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }   
    area() {
        return this.width * this.height;
    }

}
const rect = new Rectangle(5, 10);
console.log(rect.area()); // Output: 50

rest parameters
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array. It is denoted by three dots (...) followed by the name of the array that will hold the remaining arguments.
Example:
function concatenate(separator, ...strings) {   
    return strings.join(separator);
}       
console.log(concatenate(", ", "Hello", "World", "ES6")); // Output: Hello, World, ES6
In this example, the first parameter `separator` is a regular parameter, while the rest parameter `...strings` collects all additional arguments passed to the function into an array called `strings`.
 The function then joins the strings using the specified separator and returns the result.   

destructuring in parameters
Destructuring can also be used in function parameters to extract values from objects or arrays directly within the parameter list. This allows for more concise and readable code when working with complex data structures.
Example of object destructuring in parameters:
function displayUser({ name, age }) {      
    console.log(`Name: ${name}, Age: ${age}`);
}
const user = { name: "Alice", age: 30 };
displayUser(user); // Output: Name: Alice, Age: 30

big piture use case;
api handling:
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });

....destructuring in parameters can be particularly useful when working with API responses, allowing you to easily extract specific data from the response object without having to access it through multiple levels of nesting.
....default parameters can be used to provide fallback values for function parameters when working with API data, ensuring that your code can handle cases where certain data may be missing or undefined.
....arrow functions can be used to write concise and readable code when handling API responses, especially when using methods like `map`, `filter`, or `reduce` to process the data.









