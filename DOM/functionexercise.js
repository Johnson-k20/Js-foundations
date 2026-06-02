// Array representing shopping cart items with their prices
let cart = [100, 200, 300];

// Invoke the checkout process when the script loads
startCheckout();

/**
 * startCheckout() - Main checkout orchestrator function
 * This function coordinates the entire checkout workflow:
 * 1. Calculates the total of all items in the cart
 * 2. Applies any applicable discounts to the total
 * 3. Displays the final receipt with the final amount
 */
function startCheckout() {
  console.log("Starting checkout...");

  // Calculate the sum of all items in the cart
  let total = calculateTotal(cart);

  // Apply discount rules to the total (if applicable)
  let finalAmount = applyDiscount(total);

  // Display the final receipt with the discounted amount
  printReceipt(finalAmount);
}

/**
 * calculateTotal(items) - Computes the sum of all items
 * @param {array} items - Array of item prices to sum up
 * @returns {number} - The total sum of all items
 *
 * Uses the reduce() method to iterate through each item and accumulate
 * the total. Starts with a sum of 0 and adds each item to it.
 */
function calculateTotal(items) {
  console.log("Calculating total...");

  // reduce() iterates through array: (accumulator, currentValue) => new accumulator
  // sum starts at 0, each item is added to it sequentially
  return items.reduce((sum, item) => sum + item, 0);
}

/**
 * applyDiscount(amount) - Applies discount if conditions are met
 * @param {number} amount - The original total amount before discount
 * @returns {number} - The amount after discount is applied (or original if no discount)
 *
 * Discount rules:
 * - Discount is only applied if discountEnabled is true AND total is over 500
 * - When eligible, applies a 10% discount (multiplies by 0.9)
 * - Otherwise returns the original amount unchanged
 */
function applyDiscount(amount) {
  console.log("Applying discount...");

  // Check if discount is enabled AND if the amount exceeds 500
  if (discountEnabled && amount > 500) {
    // Apply 10% discount: amount * 0.9 = amount * (1 - 0.1)
    return amount * 0.9;
  }

  // If conditions are not met, return the original amount without discount
  return amount;
}

/**
 * printReceipt(amount) - Displays the final receipt amount
 * @param {number} amount - The final amount to display (after all calculations)
 *
 * This function is responsible for outputting the final result to the console.
 * In a real application, this could display a receipt in the DOM or send to server.
 */
function printReceipt(amount) {
  console.log("Final amount:", amount);
}

// Flag to enable/disable discount functionality globally
// Set to true to allow discounts, false to prevent all discounts
let discountEnabled = true;

// Alternative implementation using function expressions and arrow functions

let discountEnabled = true;
let cart = [100, 200, 300]; // data representation of shopping cart items with their prices in an array

startCheckout(); // invoke the checkout process when the script loads/ strarts the program (function call)

function startCheckout() {
  // function declaration for the main checkout process
  console.log("Starting checkout...");

  let total = calculateTotal(cart); // calculate the total of all items in the cart by calling the calculateTotal function and passing the cart array as an argument
  let finalAmount = applyDiscount(total); // apply any applicable discounts to the total by calling the applyDiscount function and passing the calculated total as an argument

  printReceipt(finalAmount);
}

function calculateTotal(items) {
  // function declaration for calculating the total of all items in the cart
  console.log("Calculating total...");
  return items.reduce((sum, item) => sum + item, 0); // uses the reduce() method to iterate through the items array and accumulate the total sum.
  //  The reduce function takes a callback that adds each item to an accumulator (sum) starting from an initial value of 0. ie 0+100=100, 100+200=300, 300+300=600, so the final total returned is 600.
}

function applyDiscount(amount) {
  // function declaration for applying discount to the total amount if certain conditions are met
  console.log("Applying discount...");

  if (discountEnabled && amount > 500) {
    // checks if the discount is enabled (discountEnabled is true) and if the total amount exceeds 500. If both conditions are met, it applies a 10% discount by multiplying the amount by 0.9 (which is equivalent to subtracting 10% from the original amount).
    return amount * 0.9; // applies a 10% discount by multiplying the amount by 0.9 (which is equivalent to subtracting 10% from the original amount).
  }

  return amount;
}
function printReceipt(amount) {
  // function declaration for printing the final receipt with the final amount
  console.log("Final amount:", amount); // outputs the final amount to the console. In a real application, this could be enhanced to display a receipt in the DOM or send the receipt data to a server.
}










//variation of a checkout process using function expressions and arrow functions

let discountEnabled = true;
let cart = [100, 200, 300];

// All functions defined as const arrow functions for consistency and readability
const calculateTotal = (items) => {
  console.log("Calculating total...");
  return items.reduce((sum, item) => sum + item, 0);
};

const applyDiscount = (amount) => {
  console.log("Applying discount...");
  return discountEnabled && amount > 500 ? amount * 0.9 : amount;
};

const printReceipt = (amount) => {
  console.log("Final amount:", amount);
};

const startCheckout = () => {
  console.log("Starting checkout...");
  const total = calculateTotal(cart);
  const finalAmount = applyDiscount(total);
  printReceipt(finalAmount);
};











// Execute the checkout process



startCheckout();   /// hoisting of function declarations allows us to call startCheckout() before its definition in the code, while function expressions and arrow functions must be defined before they are called.//note that the use of const for function expressions and arrow functions ensures that the function references cannot be reassigned, providing a level of immutability and preventing accidental overwriting of function definitions.

let cart = [100, 200, 300]; // data representation of shopping cart items with their prices in an array. let is a block-scoped variable declaration, which means it is only accessible within the block it is defined in. In this case, it is accessible throughout the entire script since it is declared at the top level.

const startCheckout = function () { // function expression for the main checkout process  // note that this function is assigned to a constant variable, which means it cannot be reassigned to a different value. However, the function itself can still be invoked and executed as normal.
  console.log("Starting checkout...");

  let total = calculateTotal(cart); // calculate the total of all items in the cart by calling the calculateTotal function and passing the cart array as an argument
  let finalAmount = applyDiscount(total);// apply any applicable discounts to the total by calling the applyDiscount function and passing the calculated total as an argument

  printReceipt(finalAmount); // print the final receipt with the final amount by calling the printReceipt function and passing the final amount as an argument
};

function calculateTotal(items) { // function declaration for calculating the total of all items in the cart
  console.log("Calculating total...");
  return items.reduce((sum, item) => sum + item, 0); // uses the reduce() method to iterate through the items array and accumulate the total sum. The reduce function takes a callback that adds each item to an accumulator (sum) starting from an initial value of 0. ie 0+100=100, 100+200=300, 300+300=600, so the final total returned is 600.
}

var discountEnabled = true; // variable declaration for enabling/disabling discount functionality globally.
//  Using var allows this variable to be hoisted and accessible throughout the code, but it can lead to issues with scope and unintended reassignments. In modern JavaScript, it's generally recommended to use let or const for better scoping and immutability.

const applyDiscount = (amount) => { // function expression using an arrow function for applying discount to the total amount if certain conditions are met
  console.log("Applying discount...");

  if (discountEnabled && amount > 500) { // checks if the discount is enabled (discountEnabled is true) and if the total amount exceeds 500. If both conditions are met, it applies a 10% discount by multiplying the amount by 0.9 (which is equivalent to subtracting 10% from the original amount).
    return amount * 0.9;
  }

  return amount; // if the conditions for discount are not met, it returns the original amount without any modifications.
};

function printReceipt(amount) { // function declaration for printing the final receipt with the final amount
  console.log("Final amount:", amount);
} // outputs the final amount to the console. In a real application, this could be enhanced to display a receipt in the DOM or send the receipt data to a server.





// Hoisting rules;


// function declarations are hoisted to the top of their scope, allowing them to be called before they are defined in the code.
//  This means you can invoke startCheckout() before its actual declaration in the code, and it will work correctly.
//  On the other hand, function expressions and arrow functions are not hoisted in the same way. They are treated as variables that are hoisted but not initialized until their definition is reached. 
// Therefore, if you try to call a function expression or an arrow function before its definition, it will result in a ReferenceError because the variable is not yet assigned a function value at that point in the code.
//let and const declarations are also hoisted, but they are not initialized until their definition is reached.  
//  This means that if you try to access a let or const variable before its declaration, it will result in a ReferenceError due to the temporal dead zone (TDZ) that exists for these types of variables.
//  In contrast, var declarations are hoisted and initialized with undefined, allowing them to be accessed before their declaration without throwing an error, although this can lead to unintended consequences and bugs in the code.




// Functions can pair functions as arguments, returning functions as values from another function and storing them in variables.

//temporal dead zone (TDZ) is a behavior in JavaScript where variables declared with let and const are not accessible before their declaration in the code, resulting in a ReferenceError if you try to access them. This is because these variables are hoisted but not initialized until their declaration is reached, creating a "dead zone" where they cannot be accessed. In contrast, var declarations are hoisted and initialized with undefined, allowing them to be accessed before their declaration without throwing an error, although this can lead to unintended consequences and bugs in the code.

