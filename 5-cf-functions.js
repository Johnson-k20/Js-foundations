/*
 FUNCTIONS: 
 
 * Functions are reusable blocks of code that perform a specific task.
 * They take INPUT (parameters), process it, and return OUTPUT (result).
 * 
 * ANALOGY: Like a vending machine - you insert money (input), it processes,
 * and gives you a snack (output).
 
Function Declarations: These use the function keyword followed by a name
. They are subject to hoisting, meaning the JavaScript engine moves them to the top of their scope, allowing them to be called before they appear in the code
 BASIC FUNCTION DECLARATION


function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"



.
Function Expressions: These involve assigning a function to a variable
. Unlike declarations, expressions are not hoisted and can be anonymous (lacking a name)
// Function expression
const multiply = function(a, b) {
  return a * b;
};


Arrow Functions: 
Introduced in ES6, these provide a concise syntax (param) => expression
. They differ from traditional functions because they do not have their own this, arguments, super, or new.target
. Instead, they lexically bind this, inheriting it from the surrounding scope

// Arrow function (modern syntax)
const divide = (a, b) => a / b;

// Single parameter - no parentheses needed
const square = x => x * x;

// No parameters
const random = () => Math.random();

Immediately Invoked Function Expressions (IIFE): This pattern involves defining and calling a function simultaneously
. It is often used to create a private scope for variables, preventing them from "polluting" the global namespace



Scope and Closures
Functions create their own scope, meaning variables defined inside a function are generally inaccessible from the outside
.
The Scope Chain: When a variable is accessed, the engine searches the local environment first, then moves up through parent scopes until it reaches the global scope
.
Closures: A closure is a function that "remembers" its lexical environment even after its parent function has finished executing
. Technically, all functions in JavaScript are closures because they carry a hidden [[Environment]] property referencing the scope where they were created
. Closures are powerful for data encapsulation and creating private variables
.
Functions as Methods and Objects
When a function is a property of an object, it is called a method
. In this context, the keyword this typically refers to the object the method belongs to
. Because functions are themselves objects, they can also have their own properties and methods, such as call() and apply(), which are used to control the context of a function call
.
Advanced Execution Patterns
Recursion: A function can call itself to solve problems involving nested structures, such as the DOM tree
. Each call adds a new frame to the call stack, which follows a Last-In, First-Out (LIFO) order
.
Asynchronous Functions: Modern JavaScript uses the async and await keywords to handle asynchronous operations
. An async function always returns a Promise, and await pauses execution until that promise settles, allowing asynchronous code to be written in a linear, readable style
.






























2. PARAMETERS & ARGUMENTS
     

// Multiple parameters
function calculateTotal(price, quantity, taxRate) {
  const subtotal = price * quantity;
  return subtotal + (subtotal * taxRate);
}

console.log(calculateTotal(50, 3, 0.08)); // 162




// Default parameters
function createAccount(username, role = "user", active = true) {
  return { username, role, active };
}

// Rest parameters (any number of arguments)
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15


3. RETURN VALUES


// Early return
function validateEmail(email) {
  if (!email) return "Email required";
  if (!email.includes("@")) return "Invalid email";
  return "Valid";
}

// Return object
function getStats(scores) {
  return {
    average: scores.reduce((a, b) => a + b) / scores.length,
    highest: Math.max(...scores),
    lowest: Math.min(...scores)
  };
}

/
 


 4. HIGHER-ORDER FUNCTIONS


// Function that takes a function
function applyOperation(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
console.log(applyOperation(10, 5, add)); // 15

// Function that returns a function
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // 10


 6. CALLBACKS - FUNCTIONS AS ARGUMENTS


// Array methods with callbacks
const numbers = [1, 2, 3, 4, 5];

// map: transform each element
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter: keep elements that pass test
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// reduce: combine all elements into one value
const totalSum = numbers.reduce((acc, num) => acc + num, 0);
console.log(totalSum); // 15


 5. CLOSURES - FUNCTIONS THAT REMEMBER STATE


function createCounter() {
  let count = 0; // Private variable
  
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3


6 CLOSURES WITH MULTIPLE METHODS


function createBankAccount(initialBalance) {
  let balance = initialBalance;
  
  return {
    deposit(amount) {
      balance += amount;
      return `Deposited $${amount}. Balance: $${balance}`;
    },
    withdraw(amount) {
      if (amount > balance) return "Insufficient funds";
      balance -= amount;
      return `Withdrew $${amount}. Balance: $${balance}`;
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(1000);
console.log(account.deposit(500));  // "Deposited $500. Balance: $1500"
console.log(account.withdraw(200)); // "Withdrew $200. Balance: $1300"


7. RECURSION - FUNCTION CALLING ITSELF


// Countdown
function countdown(n) {
  if (n <= 0) {
    console.log("Done!");
    return; // Base case - stops recursion
  }
  console.log(n);
  countdown(n - 1); // Recursive call
}

countdown(3); // 3, 2, 1, Done!

// Factorial
function factorial(n) {
  if (n === 0 || n === 1) return 1; // Base case
  return n * factorial(n - 1); // Recursive case
}

console.log(factorial(5)); // 120




// 8. REAL-WORLD USE CASE: E-COMMERCE


function processOrder(items, discountCode = null) {
  // Calculate subtotal
  const subtotal = items.reduce((sum, item) => 
    sum + (item.price * item.quantity), 0);
  
  // Apply discount
  const discounts = {
    "SAVE10": 0.10,
    "SAVE20": 0.20
  };
  
  const discount = discounts[discountCode] || 0;
  const discountAmount = subtotal * discount;
  const total = subtotal - discountAmount;
  
  // Calculate tax
  const tax = total * 0.08;
  const finalTotal = total + tax;
  
  return {
    subtotal: subtotal.toFixed(2),
    discount: discountAmount.toFixed(2),
    subtotalAfterDiscount: total.toFixed(2),
    tax: tax.toFixed(2),
    total: finalTotal.toFixed(2)
  };
}

const order = [
  { name: "Laptop", price: 1000, quantity: 1 },
  { name: "Mouse", price: 25, quantity: 2 }
];

console.log(processOrder(order, "SAVE10"));

/