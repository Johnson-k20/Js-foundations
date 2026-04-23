/* Variables are containers of values in a memory location. They are used to store and manipulate data in a program.
   Variables structure logic in programs by storing data that can be used and modified throughout the program. They allow developers to create dynamic and interactive applications by enabling them to store user input, perform calculations, and manage state.

They contain;
1. A name (identifier) that is used to refer to the variable.
2. A value that is assigned to the variable.(actual data stored in the variable)
3. memory location where the variable is stored (the address in memory where the variable's value is stored).
4. A data type that defines the type of value the variable can hold (e.g., string, number, boolean, etc.).

In a browser , console.log() is a method used to print output to the console.
 It is commonly used for debugging purposes, allowing developers to see the values of variables, the flow of execution, and any errors that may occur in their code. When you use console.log(), it will display the specified message or variable value in the browser's developer console, which can be accessed by right-clicking on the webpage and selecting "Inspect" or by pressing F12 on most browsers.
It is a powerful tool for developers to understand how their code is working and to identify and fix issues in their JavaScript code.
sample code example:
let name = "John";
console.log(name); // Output: John


 In JavaScript, you can declare variables using the `var`, `let`, or `const` keywords.
 Example of declaring variables in JavaScript:

1. Using var (function-scoped variable)
   Variables are function-scoped, if they are accessible within the function they are declared in and can be re-declared and updated.
   The  boundary = function scope means that the variable is only accessible within the function it is declared in. If you try to access it outside of that function, it will result in an error.
    Example in real world analogy:
    You put something in a house and every room in the house can access it, but if you try to access it outside the house, you can't.
sample code:

function example() {
  var x = 10; // x is accessible within the example function
  console.log(x); // Output: 10
}
console.log(x); // Error: x is not defined (x is not accessible outside the example function)

2. Using let (block-scoped variable)
   Variables are block-scoped, if they are accessible within the block they are declared in and can be updated but not re-declared.
   The boundary = block scope means that the variable is only accessible within the block it is declared in. If you try to access it outside of that block, it will result in an error.
    Example in real world analogy:
    You put something in a single room and it stays there, only that room can access it, if you try to access it outside that room, you can't.
sample code:

if (true) {
  let y = 20; // y is accessible within this block
  console.log(y); // Output: 20
}
console.log(y); // Error: y is not defined (y is not accessible outside the block)


3. Using const (block-scoped variable)
   Variables are block-scoped, if they are accessible within the block they are declared in and cannot be updated or re-declared.
   The boundary = block scope means that the variable is only accessible within the block it is declared in. If you try to access it outside of that block, it will result in an error.
    Example in real world analogy:
    You put something in a single room and it stays there, only that room can access it, if you try to access it outside that room, you can't. Also, you can't change what is inside that room once it's set.
sample code:
if (true) {
  const z = 30; // z is accessible within this block
  console.log(z); // Output: 30
}
console.log(z); // Error: z is not defined (z is not accessible outside the block)

Blocks are sections of code grouped together and are defined by curly braces `{}`. They can be used in various constructs such as functions, loops, and conditionals. The scope of variables declared with `let` and `const` is limited to the block they are declared in, while variables declared with `var` are function-scoped.
example of blocks in JavaScript:
function example() {
  var x = 10; // x is accessible within the example function
    if (x > 5) {
    let y = 20; // y is accessible within this block
    console.log(y); // Output: 20
  }
    console.log(x); // Output: 10

}

functions are blocks of code designed to perform a particular task. They can be defined using the `function` keyword, and they can take parameters and return values. The variables declared within a function are local to that function and cannot be accessed outside of it.
 example of functions in JavaScript:
function add(a, b) {
  return a + b; // This function takes two parameters and returns their sum
}   

Core properties of functions include:
1. Name: The name of the function is used to identify it and call it later in the code.
2. Parameters: These are the inputs to the function, which can be used within the function to perform operations.
3. Return value: This is the output of the function, which can be returned to the caller after the function has executed.

Scope refers to the accessibility of variables and functions in different parts of the code. It determines where a variable or function can be accessed and used. In JavaScript, there are three types of scope:
1. Global Scope: Variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the code.
2. Function Scope: Variables declared within a function are in the function scope and can only be accessed within that function.
3. Block Scope: Variables declared with `let` or `const` within a block (e.g., inside an `if` statement or a loop) are in the block scope and can only be accessed within that block.

Real world analogy for scope:
- Global Scope: A global variable is like a public announcement that everyone in a city can hear and access.
- Function Scope: A function variable is like a private conversation that only the people in that conversation can hear and access.
- Block Scope: A block variable is like a secret note that can only be read by the person who has it and cannot be accessed by anyone else outside of that note.

sample code demonstrating scope in JavaScript:
var globalVar = "I am a global variable"; // Global scope

function example() {
  var functionVar = "I am a function variable"; // Function scope
  if (true) {
    let blockVar = "I am a block variable"; // Block scope
    console.log(blockVar); // Output: I am a block variable
  }
    console.log(functionVar); // Output: I am a function variable
    console.log(globalVar); // Output: I am a global variable
}

console.log(globalVar); // Output: I am a global variable
console.log(functionVar); // Error: functionVar is not defined (functionVar is not accessible outside the example function)
console.log(blockVar); // Error: blockVar is not defined (blockVar is not accessible outside the   if block)

Scope is important in programming because:
 It helps to prevent naming conflicts. 
It allows for better organization of code. 
It ensures that variables and functions are only accessible where they are needed, which can help to reduce bugs and improve the maintainability of the code.


*/
