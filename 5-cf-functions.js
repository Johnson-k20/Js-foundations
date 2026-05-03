/*
 FUNCTIONS: 
 
 * Functions are reusable blocks of code that perform a specific task.
 * They take INPUT (parameters), process it, and return OUTPUT (result).
 * 
 * ANALOGY: Like a vending machine - you insert money (input), it processes,
 * and gives you a snack (output).
 


1. BASIC FUNCTION DECLARATION


function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"



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
 4. FUNCTION EXPRESSIONS & ARROW FUNCTIONS


// Function expression
const multiply = function(a, b) {
  return a * b;
};

// Arrow function (modern syntax)
const divide = (a, b) => a / b;

// Single parameter - no parentheses needed
const square = x => x * x;

// No parameters
const random = () => Math.random();


 5. HIGHER-ORDER FUNCTIONS


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


 7. CLOSURES - FUNCTIONS THAT REMEMBER STATE


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


8. CLOSURES WITH MULTIPLE METHODS


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


9. RECURSION - FUNCTION CALLING ITSELF


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




// 11. REAL-WORLD USE CASE: E-COMMERCE


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