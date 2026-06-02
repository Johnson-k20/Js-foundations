// hoisting of function declarations allows us to call startCheckout() before its definition in the code, while function expressions and arrow functions must be defined before they are called.//note that the use of const for function expressions and arrow functions ensures that the function references cannot be reassigned, providing a level of immutability and preventing accidental overwriting of function definitions.

let cart = [100, 200, 300]; // data representation of shopping cart items with their prices in an array. let is a block-scoped variable declaration, which means it is only accessible within the block it is defined in. In this case, it is accessible throughout the entire script since it is declared at the top level.

const startCheckout = function () { // function expression for the main checkout process  // note that this function is assigned to a constant variable, which means it cannot be reassigned to a different value. However, the function itself can still be invoked and executed as normal.
  console.log("Starting checkout...");

  let total = calculateTotal(cart); // calculate the total of all items in the cart by calling the calculateTotal function and passing the cart array as an argument
  let finalAmount = applyDiscount(total);// apply any applicable discounts to the total by calling the applyDiscount function and passing the calculated total as an argument

  printReceipt(finalAmount); // print the final receipt with the final amount by calling the printReceipt function and passing the final amount as an argument
  startCheckout();
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
