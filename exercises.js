/*
// Exercise 1: Create a function that takes two numbers as arguments and returns their sum.

function sum(a, b) {
  return a + b;
}

/*
create two number variables and calculate their sum,difference ,product, and quotient.display all results.
const num1 = 10;
const num2 = 5;
const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);


find the reminder when 17 is divided by 5 and display the result.
const dividend = 17;
const divisor = 5;
const remainder = dividend % divisor;
console.log("Remainder:", remainder);


Create a variable x with a value of 10.add 5 to it using a shorthand operator ,then multiply the results by two using another shorthand operator.display the final value.
let x = 10;
x += 5;
x *= 2;
console.log("Final value of x:", x);

 Display the results of the following operations:
// a string "5" plus a number 2:

const result = "5" + 2;
console.log(result); // Output: "52" (string concatenation)

a string "5" minus a number 2:
const result = "5" - 2;
console.log(result); // Output: 3 (string is converted to number and subtraction is performed)

a string "5" multiplied by a number 2:
const result = "5" * 2;
console.log(result); // Output: 10 (string is converted to number and multiplication is performed)

a string "5" divided by a number 2:
const result = "5" / 2;
console.log(result); // Output: 2.5 (string is converted to number and division is performed)

convert a string "100" into a number and display the result.then convert a number 50 into a string and display the result.
const str = "100";
const num = Number(str);
console.log("Converted string to number:", num); // Output: 100

const num2 = 50;
const str2 = String(num2);
console.log("Converted number to string:", str2); // Output: "50"


compare values 5 and "5" using both loose equality (==) and strict equality (===) operators and display the results.
const num1 = 5;
const str1 = "5";
const looseEquality = num1 == str1;
const strictEquality = num1 === str1;
console.log("Loose equality (5 == '5'):", looseEquality); // Output: true
console.log("Strict equality (5 === '5'):", strictEquality); // Output: false

create variables for principal rate and time and calculate the simple interest using the formula: simple interest = (principal * rate * time) / 100.display the result.
const principal = 1000; // Example principal amount
const rate = 5; // Example interest rate
const time = 2; // Example time in years
const simpleInterest = (principal * rate * time) / 100;
console.log("Simple Interest:", simpleInterest); // Output: 100

TELECOM AIRTIME PURCHASE VALIDATION SYSTEM

 This function validates and processes airtime purchases
:
  - Takes phoneNumber, amount, and balance  - Checks:
- Phone number must be 10 digits
- Amount must be greater than 0
- User must have enough balance
- Deducts the amount if valid and returns the new balance
- Otherwise returns an error message

STEP 1; function declaration

function validateAirtimePurchase(phoneNumber, amount, balance) {

  function: keyword that tells JavaScript "I'm creating a function"
   validateAirtimePurchase: the name of this function
   (phoneNumber, amount, balance): these are PARAMETERS (inputs the function receives)
   - phoneNumber: the customer's phone number (e.g., 2557123456)
   - amount: how much money they want to spend on airtime (e.g., 50)
  - balance: their current account balance (e.g., 500)
  
  
   STEP2: VALIDATION #1 - CHECK PHONE NUMBER
  
  
   Check if phone number has exactly 10 digits
  if (phoneNumber.toString().length !== 10) {

     phoneNumber: the input parameter (could be a number like 2557123456)

   .toString(): converts the number to a string ie(2557123456 becomes "2557123456")
     strings have a .length property
     .length: counts how many characters are in the string
       For "2557123456", length is 10
     !== 10: checks if the length is NOT equal to 10
      !== means "not equal to" (strict comparison)
      If length is 10, the condition is FALSE (phone number is valid)
      If length is NOT 10, the condition is TRUE (phone number is invalid)
    
     STEP 2.2: If phone number is invalid, stop and return error

    return "Error: Phone number must be exactly 10 digits";
     return: exits the function immediately and sends back this message
   This is called "EARLY RETURN" - we stop checking other validations
     Example: if phoneNumber is 123456 (6 digits)
       - 123456.toString() = "123456"
      - "123456".length = 6
     - 6 !== 10 is TRUE (condition is true)
    - We return the error and STOP HERE
      - We never check the amount or balance
  }
  
  
   STEP3: VALIDATION #2 - CHECK AMOUNT
  
  Check if amount is greater than 0

  if (amount <= 0) {
    - amount: the input parameter (the dollar amount to spend)
    <= 0: checks if amount is "less than or equal to 0"
     <= means "less than or equal to"
     -question? is the amount zero or negative?
    If YES (amount is 0 or negative): condition is TRUE, return error
     If NO (amount is positive): condition is FALSE, continue to next check
    
   Examples:
   amount = 50:  50 <= 0 is FALSE → continue
   amount = 0:   0 <= 0 is TRUE  → return error
  amount = -25: -25 <= 0 is TRUE → return error
    
 STEP: If amount is invalid, stop and return error
    return "Error: Amount must be greater than 0";
  }
  
  
   STEP4 : VALIDATION #3 - CHECK BALANCE


   STEP 4.1: Check if user has enough balance
  if (balance < amount) {
    
     balance: how much money the user currently has (e.g., 500)
     <: "less than" operator
   amount: how much money they want to spend (e.g., 600)
     balance < amount: is the user's balance LESS THAN the amount they want to spend?
    If YES: they don't have enough money → condition is TRUE
     If NO: they have enough money → condition is FALSE
    
    Examples:
     balance = 500, amount = 50:   500 < 50 is FALSE → continue
    balance = 500, amount = 600:  500 < 600 is TRUE → return error
    balance = 1000, amount = 500: 1000 < 500 is FALSE → continue
    
     STEP4.2: Use a TEMPLATE LITERAL to create a helpful error message

    return `Error: Insufficient balance. Available: $${balance}, Required: $${amount}`;
     Template literal: uses backticks ` ` instead of regular quotes
     ${} syntax: puts variables inside the string
    $${balance}: outputs the actual balance value (e.g., "$500")
    $${amount}: outputs the actual amount required (e.g., "$600")
    Example output: "Error: Insufficient balance. Available: $500, Required: $600"
  }
  
  
   STEP 5: ALL VALIDATIONS PASSED - PROCESS PURCHASE
  
  
   If we reach this point, ALL THREE validations have passed:
 Phone number has 10 digits
   Amount is greater than 0
  User has enough balance
  
   STEP : Calculate the new balance after the purchase

  const newBalance = balance - amount;

  const: creates a constant variable that cannot be changed
   newBalance: variable name
   balance - amount: math operation (subtract amount from balance)
  Example: if balance = 500 and amount = 50
    newBalance = 500 - 50 = 450
  
   STEP6: Return an OBJECT with purchase details

  return {
    // An object is a collection of key-value pairs
    // We return more than just a number - we return detailed information
    
    success: true,
    // success: key (property name)
    // true: value (indicates the purchase was successful)
    
    message: `Airtime purchase successful! $${amount} deducted.`,
    // message: a user-friendly confirmation message
    // Template literal shows the actual amount spent
    // Example: "Airtime purchase successful! $50 deducted."
    
    newBalance: newBalance,
    // newBalance: key
    // newBalance: value (the balance after subtraction)
    // This is how the caller knows the updated balance
    // Example: 450
    
    remainingBalance: newBalance
    // remainingBalance: an alternative property name for the same value
    // Some functions/systems might expect this name
  };
  // This returns an object like:
  // { success: true, message: "...", newBalance: 450, remainingBalance: 450 }
}


 STEP : TEST THE FUNCTION


 TEST : VALID PURCHASE (ALL CHECKS PASS)

console.log("\n=== TEST 1: VALID PURCHASE ===");
// console.log(): prints to the console
// "\n": newline character (creates a blank line before the text)

console.log(validateAirtimePurchase(2557123456, 50, 500));

 validateAirtimePurchase: call the function
(2557123456, 50, 500): pass three arguments
 phoneNumber = 2557123456 (10 digits )
amount = 50 (greater than 0 )
  balance = 500 (500 >= 50, has enough )

 EXECUTION FLOW:
1. Check phone: "2557123456".length = 10, 10 !== 10? NO → continue
2. Check amount: 50 <= 0? NO → continue
3. Check balance: 500 < 50? NO → continue
4. All checks passed
5. newBalance = 500 - 50 = 450
6. Return { success: true, message: "...", newBalance: 450, ... }
EXPECTED OUTPUT:
{ success: true, message: 'Airtime purchase successful! $50 deducted.', newBalance: 450, remainingBalance: 450 }


 TEST 2: INVALID PHONE NUMBER

console.log("\n=== TEST 2: INVALID PHONE NUMBER ===");
// Using a phone number with only 6 digits (not 10)

console.log(validateAirtimePurchase(123456, 50, 500));

 phoneNumber = 123456 (ONLY 6 digits )
 amount = 50
 balance = 500

EXECUTION FLOW:
1. Check phone: "123456".length = 6, 6 !== 10? YES → RETURN ERROR
2. Function STOPS here and returns error message
3. Never checks amount or balance (early return)

// EXPECTED OUTPUT:
 "Error: Phone number must be exactly 10 digits"

 TEST 3: INVALID AMOUNT (ZERO)


console.log("\n=== TEST 3: INVALID AMOUNT (ZERO) ===");
 Amount is 0 (not greater than 0)

console.log(validateAirtimePurchase(2557123456, 0, 500));

 phoneNumber = 2557123456 (10 digits true) 
 amount = 0 (NOT greater than 0 false)
 balance = 500

EXECUTION FLOW:
 1. Check phone: "2557123456".length = 10, 10 !== 10? NO → continue
 2. Check amount: 0 <= 0? YES → RETURN ERROR
 3. Function STOPS and returns error message
 4. Never checks balance

   EXPECTED OUTPUT:
"Error: Amount must be greater than 0"

 TEST 4: INVALID AMOUNT (NEGATIVE)


console.log("\n=== TEST 4: INVALID AMOUNT (NEGATIVE) ===");
// Amount is -25 (negative, which is also <= 0)

console.log(validateAirtimePurchase(2557123456, -25, 500));
// BREAKDOWN:
// phoneNumber = 2557123456 (10 digits truea0
// amount = -25 (NEGATIVE, definitely <= 0 false)
// balance = 500
//
// EXECUTION FLOW:
// 1. Check phone: passes 
// 2. Check amount: -25 <= 0? YES (because -25 IS less than 0) → RETURN ERROR
// 3. Function STOPS
//
// EXPECTED OUTPUT:
// "Error: Amount must be greater than 0"


 TEST 5: INSUFFICIENT BALANCE


console.log("\n=== TEST 5: INSUFFICIENT BALANCE ===");
// User wants to spend $600 but only has $500

console.log(validateAirtimePurchase(2557123456, 600, 500));
// BREAKDOWN:
// phoneNumber = 2557123456 (10 digits )
// amount = 600 (greater than 0)
// balance = 500 (NOT enough for $600 )
//
// EXECUTION FLOW:
// 1. Check phone: passes 
// 2. Check amount: 600 <= 0? NO → continue
// 3. Check balance: 500 < 600? YES → RETURN ERROR
// 4. Function STOPS
//
// EXPECTED OUTPUT:
// "Error: Insufficient balance. Available: $500, Required: $600"

 TEST 6: MULTIPLE PURCHASES (REAL SCENARIO)


console.log("\n=== TEST 6: MULTIPLE PURCHASES ===");

STEP: Set up initial balance
let userBalance = 1000;
// let: declares a variable that CAN be changed (unlike const)
// userBalance: variable name
// = 1000: initial value (customer starts with $1000)
console.log(`Starting balance: $${userBalance}`);
// Print the starting balance
// OUTPUT: "Starting balance: $1000"

// STEP 6.2: First purchase attempt
console.log("\n--- Purchase 1: Spending $100 ---");
const purchase1 = validateAirtimePurchase(2557654321, 100, userBalance);
// const purchase1: store the RESULT of the function in a variable
// validateAirtimePurchase(2557654321, 100, userBalance):
//   phoneNumber = 2557654321 (10 digits )
//   amount = 100 (> 0 )
//   balance = 1000 (1000 >= 100 )
// ALL CHECKS PASS
// purchase1 = { success: true, message: "...", newBalance: 900, ... }

console.log(purchase1);
// Print the result of the first purchase
// OUTPUT:
// { success: true, message: 'Airtime purchase successful! $100 deducted.', newBalance: 900, remainingBalance: 900 }

// STEP 6.3: Update balance if purchase was successful
if (purchase1.success) {
  // if: conditional statement
  // purchase1.success: access the "success" property of the purchase1 object
  // If success is true, enter this block
  
  userBalance = purchase1.newBalance;
  // Update userBalance to the new balance returned by the function
  // userBalance was 1000, now it becomes 900
  
  console.log(` Purchase successful! New balance: $${userBalance}`);
  // Print confirmation
}
// If success was false, we skip this block (don't update balance)

// STEP 6.4: Second purchase attempt
console.log("\n--- Purchase 2: Spending $75 ---");
const purchase2 = validateAirtimePurchase(2557654321, 75, userBalance);
// This time userBalance = 900 (updated from first purchase)
// validateAirtimePurchase(2557654321, 75, 900):
//   phoneNumber = 2557654321 (10 digits )
//   amount = 75 (> 0 )
//   balance = 900 (900 >= 75 )
// ALL CHECKS PASS
// purchase2 = { success: true, message: "...", newBalance: 825, ... }

console.log(purchase2);
// Print the result of the second purchase
// OUTPUT:
// { success: true, message: 'Airtime purchase successful! $75 deducted.', newBalance: 825, remainingBalance: 825 }

// STEP 6.5: Update balance again if second purchase was successful
if (purchase2.success) {
  userBalance = purchase2.newBalance;
  // userBalance was 900, now it becomes 825
  console.log(` Purchase successful! New balance: $${userBalance}`);
}

// STEP 6.6: Display final balance
console.log(`\nFinal balance: $${userBalance}`);
// OUTPUT: "Final balance: $825"
// This shows how the balance changed after TWO purchases: 1000 → 900 → 825

/ STEP 7: SUMMARY OF EXECUTION FLOW


console.log("\n=== EXECUTION FLOW SUMMARY ===");
console.log(`
PURCHASE FLOW FOR TEST 6:

START → userBalance = 1000

PURCHASE 1:
├─ Input: phone=2557654321, amount=100, balance=1000
├─ Check 1: Is phone 10 digits? "2557654321".length = 10 
├─ Check 2: Is amount > 0? 100 > 0 
├─ Check 3: balance >= amount? 1000 >= 100 
├─ Calculate: newBalance = 1000 - 100 = 900
└─ Return: { success: true, newBalance: 900 }
   Update: userBalance = 900

PURCHASE 2:
├─ Input: phone=2557654321, amount=75, balance=900
├─ Check 1: phone 
├─ Check 2: amount 
├─ Check 3: balance >= amount? 900 >= 75 
├─ Calculate: newBalance = 900 - 75 = 825
└─ Return: { success: true, newBalance: 825 }
   Update: userBalance = 825

FINAL → userBalance = 825
`);


 STEP 8: KEY CONCEPTS TO UNDERSTAND


console.log("\n=== KEY CONCEPTS ===");
console.log(`
1. PARAMETERS vs ARGUMENTS:
   - Parameters: Variables in function definition (phoneNumber, amount, balance)
   - Arguments: Actual values passed when calling (2557123456, 50, 500)

2. EARLY RETURN:
   - Return immediately when error found
   - Don't waste time checking remaining conditions
   - Only reach success code if ALL checks pass

3. TYPE CONVERSION:
   - phoneNumber.toString() converts number to string
   - Needed because numbers don't have .length property

4. OBJECT RETURN:
   - Return multiple values in an object
   - Caller can access properties: result.success, result.newBalance
   - Better than returning just a number

5. CONDITIONAL UPDATE:
   - if (purchase.success) → only update balance if successful
   - Prevents updating when transaction fails

6. TEMPLATE LITERALS:
   - Use backticks: \` \`
   - Use \${variable} to insert values into strings
   - Makes error messages and output clearer
`);



/* (array to loops)



  GRADE ASSIGNMENT SYSTEM
  Processes an array of student scores and assigns grades
  Grade scale: 70+ = A, 60-69 = B, 50-59 = C, below 50 = Fail
  Returns a summary with total students, passes, fails, and percentages


function gradeStudents(scores) {
  const gradeResults = [];
  let passCount = 0;
  let failCount = 0;

  
    Loop through each score in the array
    i starts at 0, continues while i < length of array, increments by 1
    scores[i] accesses each element: scores[0], scores[1], etc.
  
  for (let i = 0; i < scores.length; i++) {
    const currentScore = scores[i];

    
      Assign grades based on score
      Uses if/else if/else chain - only one block executes
    
    let grade;
    if (currentScore >= 70) {
      grade = 'A';
    } else if (currentScore >= 60) {
      grade = 'B';
    } else if (currentScore >= 50) {
      grade = 'C';
    } else {
      grade = 'Fail';
    }
/*
      Count passes and fails
      A "pass" is any grade that's not "Fail" (A, B, or C)
      Use passCount++ to add 1, failCount++ to add 1
    
        if (grade !== 'Fail') {
      passCount++;
    } else {
      failCount++;
    }

  
      Store each student's score and grade in the results array
      .push() adds an object to the end of the array
  
    gradeResults.push({
      score: currentScore,
      grade: grade
    });
  }

  
    Return a summary object with:
    - totalStudents: length of input array
    - passes: count of passing students
    - fails: count of failing students
    - passPercentage: (passes / total) * 100, rounded to 2 decimal places
    - failPercentage: (fails / total) * 100, rounded to 2 decimal places
    - details: array of all student scores and grades
  
  return {
    totalStudents: scores.length,
    passes: passCount,
    fails: failCount,
    passPercentage: ((passCount / scores.length) * 100).toFixed(2),
    failPercentage: ((failCount / scores.length) * 100).toFixed(2),
    details: gradeResults
  };
}


STEP 9: TEST THE FUNCTION



  TEST 1: Mixed grades - some pass, some fail
  Input: [85, 42, 78, 55, 92, 38, 68]
  Expected: 5 passes, 2 fails (71.43% pass rate)

const testScores1 = [85, 42, 78, 55, 92, 38, 68];
const result1 = gradeStudents(testScores1);

console.log("TEST 1: Mixed Grades");
console.log("Scores:", testScores1);
console.log(`Total: ${result1.totalStudents} | Passes: ${result1.passes} | Fails: ${result1.fails}`);
console.log(`Pass Rate: ${result1.passPercentage}% | Fail Rate: ${result1.failPercentage}%`);
result1.details.forEach((student, i) => {
  console.log(`  Student ${i + 1}: ${student.score} → ${student.grade}`);
});


  TEST 2: All students pass
  Input: [75, 80, 65, 55, 88]
  Expected: 5 passes, 0 fails (100% pass rate)

const testScores2 = [75, 80, 65, 55, 88];
const result2 = gradeStudents(testScores2);

console.log("\nTEST 2: All Students Pass");
console.log("Scores:", testScores2);
console.log(`Total: ${result2.totalStudents} | Passes: ${result2.passes} | Fails: ${result2.fails}`);
console.log(`Pass Rate: ${result2.passPercentage}% | Fail Rate: ${result2.failPercentage}%`);
result2.details.forEach((student, i) => {
  console.log(`  Student ${i + 1}: ${student.score} → ${student.grade}`);
});


  TEST 3: All students fail
  Input: [45, 30, 22, 49, 15]
  Expected: 0 passes, 5 fails (0% pass rate)

const testScores3 = [45, 30, 22, 49, 15];
const result3 = gradeStudents(testScores3);

console.log("\nTEST 3: All Students Fail");
console.log("Scores:", testScores3);
console.log(`Total: ${result3.totalStudents} | Passes: ${result3.passes} | Fails: ${result3.fails}`);
console.log(`Pass Rate: ${result3.passPercentage}% | Fail Rate: ${result3.failPercentage}%`);
result3.details.forEach((student, i) => {
  console.log(`  Student ${i + 1}: ${student.score} → ${student.grade}`);
});


  TEST 4: Boundary cases - testing exact grade boundaries
  Input: [70, 69, 60, 59, 50, 49]
  70 = A boundary, 69 = just below A, 60 = B boundary, 59 = just below B
  50 = C boundary, 49 = just below C (Fail)
  Expected: 5 passes, 1 fail (83.33% pass rate)

const testScores4 = [70, 69, 60, 59, 50, 49];
const result4 = gradeStudents(testScores4);

console.log("\nTEST 4: Boundary Cases");
console.log("Scores:", testScores4);
console.log(`Total: ${result4.totalStudents} | Passes: ${result4.passes} | Fails: ${result4.fails}`);
console.log(`Pass Rate: ${result4.passPercentage}% | Fail Rate: ${result4.failPercentage}%`);
result4.details.forEach((student, i) => {
  console.log(`  Student ${i + 1}: ${student.score} → ${student.grade}`);
});


  TEST 5: Single student
  Input: [75]
  Expected: 1 pass, 0 fails (100% pass rate)

const testScores5 = [75];
const result5 = gradeStudents(testScores5);

console.log("\nTEST 5: Single Student");
console.log("Scores:", testScores5);
console.log(`Total: ${result5.totalStudents} | Passes: ${result5.passes} | Fails: ${result5.fails}`);
console.log(`Pass Rate: ${result5.passPercentage}% | Fail Rate: ${result5.failPercentage}%`);
result5.details.forEach((student, i) => {
  console.log(`  Student ${i + 1}: ${student.score} → ${student.grade}`);
});


  HOW THE LOOP WORKS
  
  Example: [85, 42, 78]
  Array length: 3, so loop runs 3 times (i = 0, 1, 2)
  
  Iteration 1:
    i = 0, i < 3? YES
    currentScore = 85
    85 >= 70? YES → grade = 'A'
    'A' !== 'Fail'? YES → passCount becomes 1
    Push { score: 85, grade: 'A' }
    
  Iteration 2:
    i = 1, i < 3? YES
    currentScore = 42
    42 >= 70? NO → check next condition
    42 >= 60? NO → check next condition
    42 >= 50? NO → else block
    grade = 'Fail'
    'Fail' !== 'Fail'? NO → failCount becomes 1
    Push { score: 42, grade: 'Fail' }
    
  Iteration 3:
    i = 2, i < 3? YES
    currentScore = 78
    78 >= 70? YES → grade = 'A'
    'A' !== 'Fail'? YES → passCount becomes 2
    Push { score: 78, grade: 'A' }
    
  Loop check:
    i = 3, i < 3? NO → STOP
    
  Final state:
    passCount = 2
    failCount = 1
    gradeResults = [{ score: 85, grade: 'A' }, { score: 42, grade: 'Fail' }, { score: 78, grade: 'A' }]
    Return summary object with totals and percentages




  KEY CONCEPTS
  
  FOR LOOP:
  for (let i = 0; i < array.length; i++)
  - let i = 0: start counting at 0
  - i < array.length: loop while condition is true
  - i++: add 1 to i after each iteration
  
  ARRAY INDEXING:
  - Arrays are 0-indexed: first element is at index 0
  - scores[0] = first element
  - scores[i] = element at position i
  
  IF/ELSE IF/ELSE:
  - Only ONE block executes
  - if checks first condition
  - else if checks only if previous was false
  - else executes if all previous were false
  
  ACCUMULATOR VARIABLES:
  - passCount and failCount start at 0
  - ++ adds 1 each time condition is met
  - Counts how many students fit each category
  
  ARRAY.PUSH():
  - Adds an item to the end of array
  - .push({ score: 85, grade: 'A' }) adds an object
  
  FOREACH LOOP:
  - .forEach((student, index) => { ... })
  - Loops through each item in array
  - student = current item, index = position
  
  TEMPLATE LITERALS:
  - Use backticks: ` `
  - ${variable} inserts value into string
  - Makes output formatting clean and readable
  
  CALCULATING PERCENTAGES:
  - (passes / total) * 100 = percentage
  - .toFixed(2) rounds to 2 decimal places

 A supermarket applies discounts based on total purchase. Write a function that:
   - Takes an array of item prices
   - Calculates total cost using a loop
   - Applies:
     - 10% discount if total > 5000
     - 5% discount if total > 2000
   - Returns final payable amount
*/

/*
  SUPERMARKET DISCOUNT SYSTEM
  Takes an array of item prices and applies tiered discounts based on total
  Discount tiers:
    - Total > 5000: 10% discount
    - Total > 2000: 5% discount
    - Total <= 2000: no discount
  Returns object with original total, discount amount, and final payable amount
*/

function calculateDiscount(prices) {
  /*
    Initialize total to 0
    We'll add each price to this variable in the loop
  */
  let total = 0;

  /*
    Loop through each price in the array
    i starts at 0, continues while i < array length, increments by 1
    prices[i] accesses each item price
  */
  for (let i = 0; i < prices.length; i++) {
    /*
      Add current price to total
      += is shorthand for: total = total + prices[i]
      Example: total was 500, prices[i] is 1000, now total = 1500
    */
    total += prices[i];
  }

  /*
    Determine discount rate based on total
    Uses if/else if chain - only one block executes
  
  let discountRate = 0;
  if (total > 5000) {
    /*
      If total exceeds 5000, apply 10% discount
      discountRate = 0.10 means 10% off
    
    discountRate = 0.10;
  } else if (total > 2000) {
    /*
      Else if total exceeds 2000 (but not 5000), apply 5% discount
      discountRate = 0.05 means 5% off
    */
    discountRate = 0.05;
  } else {
    /*
      Else (total is 2000 or less), no discount
      discountRate = 0 means 0% off
    */
    discountRate = 0;
  }

  /*
    Calculate discount amount
    discount = total * discountRate
    Example: if total is 5000 and discountRate is 0.10
    discount = 5000 * 0.10 = 500
  */
  const discount = total * discountRate;

  /*
    Calculate final payable amount
    finalAmount = total - discount
    Example: total 5000, discount 500, finalAmount = 4500
  */
  const finalAmount = total - discount;

  /*
    Return object with all relevant information
    - total: original sum of all prices
    - discountRate: percentage discount applied (as decimal)
    - discountAmount: dollar amount of discount
    - finalPayable: amount customer actually pays
  */
  return {
    total: total,
    discountRate: (discountRate * 100),
    discountAmount: discount.toFixed(2),
    finalPayable: finalAmount.toFixed(2)
  };
}

/*
  TEST 1: Large purchase - qualifies for 10% discount
  Prices: [1000, 1500, 1000, 800, 1200]
  Total: 5500
  Discount rate: 10%
  Discount amount: 550
  Final payable: 4950
*/
const test1 = [1000, 1500, 1000, 800, 1200];
const result1 = calculateDiscount(test1);

console.log("\nTEST 1: Large Purchase (10% Discount)");
console.log("Prices:", test1);
console.log(`Total: $${result1.total} | Discount: ${result1.discountRate}% ($${result1.discountAmount}) | Final: $${result1.finalPayable}`);

/*
  TEST 2: Medium purchase - qualifies for 5% discount
  Prices: [500, 600, 400, 700]
  Total: 2200
  Discount rate: 5%
  Discount amount: 110
  Final payable: 2090
*/
const test2 = [500, 600, 400, 700];
const result2 = calculateDiscount(test2);

console.log("\nTEST 2: Medium Purchase (5% Discount)");
console.log("Prices:", test2);
console.log(`Total: $${result2.total} | Discount: ${result2.discountRate}% ($${result2.discountAmount}) | Final: $${result2.finalPayable}`);

/*
  TEST 3: Small purchase - no discount
  Prices: [300, 400, 500]
  Total: 1200
  Discount rate: 0%
  Discount amount: 0
  Final payable: 1200
*/
const test3 = [300, 400, 500];
const result3 = calculateDiscount(test3);

console.log("\nTEST 3: Small Purchase (No Discount)");
console.log("Prices:", test3);
console.log(`Total: $${result3.total} | Discount: ${result3.discountRate}% ($${result3.discountAmount}) | Final: $${result3.finalPayable}`);

/*
  TEST 4: Exactly at boundary - 2000
  Prices: [500, 500, 500, 500]
  Total: 2000 (exactly at boundary, no discount because not > 2000)
  Discount rate: 0%
  Discount amount: 0
  Final payable: 2000
*/
const test4 = [500, 500, 500, 500];
const result4 = calculateDiscount(test4);

console.log("\nTEST 4: Boundary Case (Exactly 2000 - No Discount)");
console.log("Prices:", test4);
console.log(`Total: $${result4.total} | Discount: ${result4.discountRate}% ($${result4.discountAmount}) | Final: $${result4.finalPayable}`);

/*
  TEST 5: Just above 2000 boundary
  Prices: [600, 600, 600, 300]
  Total: 2100
  Discount rate: 5% (2100 > 2000)
  Discount amount: 105
  Final payable: 1995
*/
const test5 = [600, 600, 600, 300];
const result5 = calculateDiscount(test5);

console.log("\nTEST 5: Just Above 2000 Boundary (5% Discount)");
console.log("Prices:", test5);
console.log(`Total: $${result5.total} | Discount: ${result5.discountRate}% ($${result5.discountAmount}) | Final: $${result5.finalPayable}`);

/*
  TEST 6: Exactly at 5000 boundary
  Prices: [1000, 1000, 1000, 1000, 1000]
  Total: 5000 (exactly at boundary, no discount because not > 5000)
  Discount rate: 5% (5000 is not > 5000, but is > 2000)
  Discount amount: 250
  Final payable: 4750
*/
const test6 = [1000, 1000, 1000, 1000, 1000];
const result6 = calculateDiscount(test6);

console.log("\nTEST 6: Exactly at 5000 Boundary (5% Discount)");
console.log("Prices:", test6);
console.log(`Total: $${result6.total} | Discount: ${result6.discountRate}% ($${result6.discountAmount}) | Final: $${result6.finalPayable}`);

/*
  TEST 7: Large purchase exceeding 5000
  Prices: [2000, 2000, 2000, 1500]
  Total: 7500
  Discount rate: 10% (7500 > 5000)
  Discount amount: 750
  Final payable: 6750
*/
const test7 = [2000, 2000, 2000, 1500];
const result7 = calculateDiscount(test7);

console.log("\nTEST 7: Very Large Purchase (10% Discount)");
console.log("Prices:", test7);
console.log(`Total: $${result7.total} | Discount: ${result7.discountRate}% ($${result7.discountAmount}) | Final: $${result7.finalPayable}`);

/*
  HOW THE FUNCTION WORKS

  Example: prices = [1000, 500, 1000]
  
  Step 1: Initialize total = 0
  
  Step 2: Loop through prices
    Iteration 1: i = 0, total += 1000 → total = 1000
    Iteration 2: i = 1, total += 500 → total = 1500
    Iteration 3: i = 2, total += 1000 → total = 2500
    Loop ends
  
  Step 3: Determine discount rate
    Is 2500 > 5000? NO → check next condition
    Is 2500 > 2000? YES → discountRate = 0.05
  
  Step 4: Calculate discount and final amount
    discount = 2500 * 0.05 = 125
    finalAmount = 2500 - 125 = 2375
  
  Step 5: Return
    {
      total: 2500,
      discountRate: 5,
      discountAmount: 125.00,
      finalPayable: 2375.00
    }
*/

/*
  KEY CONCEPTS

  LOOP TO CALCULATE SUM:
  let total = 0
  for (let i = 0; i < prices.length; i++) {
    total += prices[i]
  }
  - Adds each price to running total
  - += is shorthand for total = total + prices[i]

  CONDITIONAL DISCOUNT TIERS:
  if (total > 5000) discountRate = 0.10
  else if (total > 2000) discountRate = 0.05
  else discountRate = 0
  - Uses multiple conditions to determine discount level
  - Only one block executes
  - Important: conditions are checked in order (5000 before 2000)

  CALCULATING DISCOUNT:
  const discount = total * discountRate
  - Multiply total by decimal rate (0.10 = 10%, 0.05 = 5%)
  - Example: 5000 * 0.10 = 500

  CALCULATING FINAL AMOUNT:
  const finalAmount = total - discount
  - Subtract discount from original total
  - Example: 5000 - 500 = 4500

  TOFIXED() FOR CURRENCY:
  discount.toFixed(2)
  finalAmount.toFixed(2)
  - Rounds to 2 decimal places (standard for currency)
  - Converts to string but displays properly
  - Example: 125 becomes "125.00"

  RETURNING MULTIPLE VALUES:
  return { total, discountRate, discountAmount, finalPayable }
  - Returns object with all calculated values
  - Caller can access any property: result.total, result.finalPayable, etc.
  - Much more useful than returning just one number


4. /*
  PARKING FEE CALCULATOR
  Calculates parking charges based on tiered hourly rates
  Rate structure:
    - First 2 hours: KES 50 per hour
    - Additional hours: KES 30 per hour
  Example: 5 hours = (2 * 50) + (3 * 30) = 100 + 90 = 190
*/

function calculateParkingFee(hours) {
  /*
    Initialize totalCost to 0
   calculate the cost based on hours parked
  */
  let totalCost = 0;

  /*
    Use conditional to determine cost structure
    If hours is 2 or less, charge only the first tier
    If hours is more than 2, charge both tiers
  */
  if (hours <= 2) {
    /*
      For hours <= 2: multiply hours by 50
      Example: 1.5 hours = 1.5 * 50 = 75
      Example: 2 hours = 2 * 50 = 100
    */
    totalCost = hours * 50;
  } else {
    /*
      For hours > 2: charge first 2 hours at 50, rest at 30
      Step 1: Calculate cost of first 2 hours: 2 * 50 = 100
      Step 2: Calculate additional hours: hours - 2
      Step 3: Calculate cost of additional hours: (hours - 2) * 30
      Step 4: Add both: 100 + ((hours - 2) * 30)
      
      Example: 5 hours
        First 2 hours: 2 * 50 = 100
        Additional hours: 5 - 2 = 3
        Cost of additional: 3 * 30 = 90
        Total: 100 + 90 = 190
    */
    totalCost = (2 * 50) + ((hours - 2) * 30);
  }

  /*
    Return object with parking details
    - hours: number of hours parked
    - rateFirstTwo: rate for first 2 hours
    - rateAdditional: rate for hours beyond 2
    - totalCost: calculated parking fee
  */
  return {
    hours: hours,
    rateFirstTwo: 50,
    rateAdditional: 30,
    totalCost: totalCost
  };
}

/*
  TEST 1: Less than 2 hours
  Hours: 1.5
  Calculation: 1.5 * 50 = 75
  Expected: KES 75
*/
const parkTest1 = calculateParkingFee(1.5);

console.log("\nTEST 1: Less Than 2 Hours");
console.log(`Hours parked: ${parkTest1.hours}`);
console.log(`Rate: KES ${parkTest1.rateFirstTwo}/hour`);
console.log(`Total cost: KES ${parkTest1.totalCost}`);

/*
  TEST 2: Exactly 2 hours
  Hours: 2
  Calculation: 2 * 50 = 100
  Expected: KES 100
*/
const parkTest2 = calculateParkingFee(2);

console.log("\nTEST 2: Exactly 2 Hours");
console.log(`Hours parked: ${parkTest2.hours}`);
console.log(`Rate: KES ${parkTest2.rateFirstTwo}/hour`);
console.log(`Total cost: KES ${parkTest2.totalCost}`);

/*
  TEST 3: 3 hours (more than 2)
  Hours: 3
  Calculation: (2 * 50) + (1 * 30) = 100 + 30 = 130
  Expected: KES 130
*/
const parkTest3 = calculateParkingFee(3);

console.log("\nTEST 3: 3 Hours (Tiered Pricing)");
console.log(`Hours parked: ${parkTest3.hours}`);
console.log(`First 2 hours: 2 × KES ${parkTest3.rateFirstTwo} = KES 100`);
console.log(`Additional 1 hour: 1 × KES ${parkTest3.rateAdditional} = KES 30`);
console.log(`Total cost: KES ${parkTest3.totalCost}`);

/*
  TEST 4: 5 hours
  Hours: 5
  Calculation: (2 * 50) + (3 * 30) = 100 + 90 = 190
  Expected: KES 190
*/
const parkTest4 = calculateParkingFee(5);

console.log("\nTEST 4: 5 Hours");
console.log(`Hours parked: ${parkTest4.hours}`);
console.log(`First 2 hours: 2 × KES ${parkTest4.rateFirstTwo} = KES 100`);
console.log(`Additional 3 hours: 3 × KES ${parkTest4.rateAdditional} = KES 90`);
console.log(`Total cost: KES ${parkTest4.totalCost}`);

/*
  TEST 5: 8 hours (full day)
  Hours: 8
  Calculation: (2 * 50) + (6 * 30) = 100 + 180 = 280
  Expected: KES 280
*/
const parkTest5 = calculateParkingFee(8);

console.log("\nTEST 5: 8 Hours (Full Day)");
console.log(`Hours parked: ${parkTest5.hours}`);
console.log(`First 2 hours: 2 × KES ${parkTest5.rateFirstTwo} = KES 100`);
console.log(`Additional 6 hours: 6 × KES ${parkTest5.rateAdditional} = KES 180`);
console.log(`Total cost: KES ${parkTest5.totalCost}`);

/*
  TEST 6: 0.5 hours (30 minutes)
  Hours: 0.5
  Calculation: 0.5 * 50 = 25
  Expected: KES 25
*/
const parkTest6 = calculateParkingFee(0.5);

console.log("\nTEST 6: 0.5 Hours (30 Minutes)");
console.log(`Hours parked: ${parkTest6.hours}`);
console.log(`Rate: KES ${parkTest6.rateFirstTwo}/hour`);
console.log(`Total cost: KES ${parkTest6.totalCost}`);

/*
  TEST 7: 24 hours (overnight)
  Hours: 24
  Calculation: (2 * 50) + (22 * 30) = 100 + 660 = 760
  Expected: KES 760

const parkTest7 = calculateParkingFee(24);

console.log("\nTEST 7: 24 Hours (Overnight)");
console.log(`Hours parked: ${parkTest7.hours}`);
console.log(`First 2 hours: 2 × KES ${parkTest7.rateFirstTwo} = KES 100`);
console.log(`Additional 22 hours: 22 × KES ${parkTest7.rateAdditional} = KES 660`);
console.log(`Total cost: KES ${parkTest7.totalCost}`);


  HOW THE FUNCTION WORKS

  Decision Tree:
  
  Is hours <= 2?
    YES → Cost = hours * 50
    NO → Cost = (2 * 50) + ((hours - 2) * 30)
  
  Example 1: 1 hour
    1 <= 2? YES
    Cost = 1 * 50 = 50
  
  Example 2: 4 hours
    4 <= 2? NO
    Cost = (2 * 50) + ((4 - 2) * 30)
    Cost = 100 + (2 * 30)
    Cost = 100 + 60 = 160
  
  Example 3: 2 hours
    2 <= 2? YES (exactly 2, still counts as <= 2)
    Cost = 2 * 50 = 100
  
  Why this structure?
  - First 2 hours are premium rate: KES 50/hour
  - After that, rate drops to KES 30/hour (cheaper for long-term parking)
  - This encourages people to pay more upfront for first 2 hours
  - But rewards longer stays with better rate on additional hours
*/

/*
  KEY CONCEPTS

  TIERED PRICING:
  if (hours <= 2)
    totalCost = hours * 50
  else
    totalCost = (2 * 50) + ((hours - 2) * 30)
  - First condition handles the cheaper/simpler case
  - Second condition handles the two-tier calculation
  - Boundary at 2 hours: if exactly 2, use first formula (cleaner)

  CALCULATING ADDITIONAL HOURS:
  (hours - 2) * 30
  - Subtract the first 2 hours from total
  - Multiply remaining hours by 30
  - Example: 5 hours → (5 - 2) * 30 = 3 * 30 = 90

  COMBINING TWO COSTS:
  (2 * 50) + ((hours - 2) * 30)
  - First part: 2 * 50 = 100 (always the same for first 2 hours)
  - Second part: (hours - 2) * 30 (varies based on additional hours)
  - Add them together for total cost

  RETURNING OBJECT:
  return { hours, rateFirstTwo, rateAdditional, totalCost }
  - Provides all information: input, rates used, and result
  - Caller can see exactly how fee was calculated
  - Good for transparency and debugging

  PRACTICAL APPLICATION:
  - Parking lots use tiered pricing to encourage longer stays
  - First 2 hours charged at premium rate
  - After that, reduced rate to retain customers




/*
  1. RIDE-HAILING FARE & ACCEPTANCE SYSTEM
  Calculates ride fare based on distance and peak time surge
  Also determines if driver should accept ride based on availability, rating, and distance
  
  Inputs:
    - ride object: { distance, baseFare, perKmRate, isPeakTime }
    - driver object: { isAvailable, rating }
  
  Outputs:
    - Object with fare calculation and acceptance recommendation
    - Also checks: driver available, rating above 4.0, distance within 50km
*/

function rideHailingSystem(ride, driver) {
  /*
    Calculate distance-based fare
    baseFare: starting charge (e.g., 100)
    distance * perKmRate: charge per kilometer (e.g., 10 per km)
  */
  let distanceFare = ride.baseFare + (ride.distance * ride.perKmRate);

  /*
    Apply surge multiplier if peak time
    isPeakTime is a boolean (true or false)
    If true, multiply by 1.5 (50% surge)
    If false, multiply by 1.0 (no surge, normal rate)
  */
  const surgeMultiplier = ride.isPeakTime ? 1.5 : 1.0;
  const totalFare = distanceFare * surgeMultiplier;

  /*
    Determine if driver should accept ride
    Check three conditions:
    1. Driver must be available
    2. Driver rating must be above 4.0 (quality threshold)
    3. Distance must be within 50km (reasonable range)
    
    All three must be true (&&) for shouldAccept to be true
  */
  const shouldAccept =
    driver.isAvailable === true &&
    driver.rating > 4.0 &&
    ride.distance <= 50;

  /*
    Return object with:
    - fare: calculated total fare
    - surgeApplied: whether peak time multiplier was applied
    - surgeMultiplier: the multiplier used (1.5 or 1.0)
    - driverRating: the driver's current rating
    - acceptanceRecommendation: should driver take this ride?
    - reason: explanation for acceptance/rejection
  */
  return {
    fare: totalFare.toFixed(2),
    surgeApplied: ride.isPeakTime,
    surgeMultiplier: surgeMultiplier,
    driverRating: driver.rating,
    acceptanceRecommendation: shouldAccept,
    reason: getRideAcceptanceReason(driver, ride.distance)
  };
}

/*
  Helper function to determine why driver should/shouldn't accept
*/
function getRideAcceptanceReason(driver, distance) {
  if (!driver.isAvailable) {
    return "Driver not available";
  }
  if (driver.rating <= 4.0) {
    return `Driver rating too low (${driver.rating}/5.0)`;
  }
  if (distance > 50) {
    return "Distance exceeds 50km limit";
  }
  return "All conditions met - ride accepted";
}

/*
  TEST 1: Peak time, good driver, acceptable distance
  Peak: YES (1.5x surge)
  Base fare: 200 + (20 * 15) = 200 + 300 = 500
  With surge: 500 * 1.5 = 750
  Driver available: YES
  Rating: 4.8 (above 4.0)
  Distance: 20km (within 50km)
  Expected: Accept, fare 750
*/
const rideTest1 = rideHailingSystem(
  { distance: 20, baseFare: 200, perKmRate: 15, isPeakTime: true },
  { isAvailable: true, rating: 4.8 }
);

console.log("\nTEST 1: Peak Time - Good Driver - Acceptable Distance");
console.log("Ride details: 20km, base 200, 15/km, peak time");
console.log("Driver: available, 4.8 rating");
console.log(`Fare: ${rideTest1.fare} (surge: ${rideTest1.surgeApplied ? 'YES' : 'NO'}, x${rideTest1.surgeMultiplier})`);
console.log(`Accept? ${rideTest1.acceptanceRecommendation} - ${rideTest1.reason}`);

/*
  TEST 2: Not peak time, low rating driver
  Peak: NO (1.0x normal)
  Base fare: 150 + (15 * 12) = 150 + 180 = 330
  No surge: 330 * 1.0 = 330
  Driver available: YES
  Rating: 3.9 (below 4.0)
  Distance: 15km (within 50km)
  Expected: Reject (low rating), fare 330
*/
const rideTest2 = rideHailingSystem(
  { distance: 15, baseFare: 150, perKmRate: 12, isPeakTime: false },
  { isAvailable: true, rating: 3.9 }
);

console.log("\nTEST 2: Normal Time - Low Rating Driver");
console.log("Ride details: 15km, base 150, 12/km, normal time");
console.log("Driver: available, 3.9 rating");
console.log(`Fare: ${rideTest2.fare} (surge: ${rideTest2.surgeApplied ? 'YES' : 'NO'}, x${rideTest2.surgeMultiplier})`);
console.log(`Accept? ${rideTest2.acceptanceRecommendation} - ${rideTest2.reason}`);

/*
  TEST 3: Peak time, good driver, distance too far
  Peak: YES (1.5x surge)
  Base fare: 100 + (60 * 10) = 100 + 600 = 700
  With surge: 700 * 1.5 = 1050
  Driver available: YES
  Rating: 4.5 (above 4.0)
  Distance: 60km (exceeds 50km limit)
  Expected: Reject (distance), fare 1050
*/
const rideTest3 = rideHailingSystem(
  { distance: 60, baseFare: 100, perKmRate: 10, isPeakTime: true },
  { isAvailable: true, rating: 4.5 }
);

console.log("\nTEST 3: Peak Time - Good Driver - Distance Too Far");
console.log("Ride details: 60km, base 100, 10/km, peak time");
console.log("Driver: available, 4.5 rating");
console.log(`Fare: ${rideTest3.fare} (surge: ${rideTest3.surgeApplied ? 'YES' : 'NO'}, x${rideTest3.surgeMultiplier})`);
console.log(`Accept? ${rideTest3.acceptanceRecommendation} - ${rideTest3.reason}`);

/*
  TEST 4: Normal time, unavailable driver
  Peak: NO (1.0x normal)
  Base fare: 120 + (10 * 8) = 120 + 80 = 200
  No surge: 200 * 1.0 = 200
  Driver available: NO
  Rating: 4.9 (doesn't matter if unavailable)
  Distance: 10km (within limit)
  Expected: Reject (not available), fare 200
*/
const rideTest4 = rideHailingSystem(
  { distance: 10, baseFare: 120, perKmRate: 8, isPeakTime: false },
  { isAvailable: false, rating: 4.9 }
);

console.log("\nTEST 4: Normal Time - Unavailable Driver");
console.log("Ride details: 10km, base 120, 8/km, normal time");
console.log("Driver: unavailable, 4.9 rating");
console.log(`Fare: ${rideTest4.fare} (surge: ${rideTest4.surgeApplied ? 'YES' : 'NO'}, x${rideTest4.surgeMultiplier})`);
console.log(`Accept? ${rideTest4.acceptanceRecommendation} - ${rideTest4.reason}`);

/*
  TEST 5: Peak time, boundary rating (exactly 4.0)
  Peak: YES (1.5x surge)
  Base fare: 200 + (25 * 12) = 200 + 300 = 500
  With surge: 500 * 1.5 = 750
  Driver available: YES
  Rating: 4.0 (exactly at boundary, but > 4.0 fails, so 4.0 is not accepted)
  Distance: 25km (within limit)
  Expected: Reject (rating exactly 4.0 doesn't pass > 4.0), fare 750
*/
const rideTest5 = rideHailingSystem(
  { distance: 25, baseFare: 200, perKmRate: 12, isPeakTime: true },
  { isAvailable: true, rating: 4.0 }
);

console.log("\nTEST 5: Peak Time - Boundary Rating (Exactly 4.0)");
console.log("Ride details: 25km, base 200, 12/km, peak time");
console.log("Driver: available, 4.0 rating");
console.log(`Fare: ${rideTest5.fare} (surge: ${rideTest5.surgeApplied ? 'YES' : 'NO'}, x${rideTest5.surgeMultiplier})`);
console.log(`Accept? ${rideTest5.acceptanceRecommendation} - ${rideTest5.reason}`);

/*
  TEST 6: Peak time, good driver, exactly 50km
  Peak: YES (1.5x surge)
  Base fare: 180 + (50 * 10) = 180 + 500 = 680
  With surge: 680 * 1.5 = 1020
  Driver available: YES
  Rating: 4.6 (above 4.0)
  Distance: 50km (exactly at limit, which is <=)
  Expected: Accept (50 is within <=50), fare 1020
*/
const rideTest6 = rideHailingSystem(
  { distance: 50, baseFare: 180, perKmRate: 10, isPeakTime: true },
  { isAvailable: true, rating: 4.6 }
);

console.log("\nTEST 6: Peak Time - Good Driver - Exactly 50km");
console.log("Ride details: 50km, base 180, 10/km, peak time");
console.log("Driver: available, 4.6 rating");
console.log(`Fare: ${rideTest6.fare} (surge: ${rideTest6.surgeApplied ? 'YES' : 'NO'}, x${rideTest6.surgeMultiplier})`);
console.log(`Accept? ${rideTest6.acceptanceRecommendation} - ${rideTest6.reason}`);

/*
  HOW THE FUNCTION WORKS

  Step 1: Calculate distance fare
    distanceFare = baseFare + (distance * perKmRate)
    Example: 100 + (20 * 15) = 100 + 300 = 400
  
  Step 2: Apply surge multiplier
    If peak time: surgeMultiplier = 1.5
    If normal time: surgeMultiplier = 1.0
    totalFare = distanceFare * surgeMultiplier
    Example: 400 * 1.5 = 600 (peak) or 400 * 1.0 = 400 (normal)
  
  Step 3: Check driver acceptance criteria
    Three conditions with AND logic:
    ✓ driver.isAvailable === true
    ✓ driver.rating > 4.0
    ✓ ride.distance <= 50
    
    All must be true to accept. If ANY is false, reject.
  
  Step 4: Return fare and recommendation
    Includes fare amount, surge info, rating, and reason for decision
    Helpful for understanding why ride was accepted/rejected
*/

/*
  KEY CONCEPTS

  SURGE PRICING:
  const surgeMultiplier = ride.isPeakTime ? 1.5 : 1.0
  - Ternary operator: condition ? valueIfTrue : valueIfFalse
  - During peak hours (isPeakTime = true): multiply by 1.5 (50% increase)
  - During normal hours (isPeakTime = false): multiply by 1.0 (no change)
  - Real-world: ride-hailing apps like Uber increase prices during rush hours

  MULTIPLE CONDITIONS WITH AND:
  driver.isAvailable === true &&
  driver.rating > 4.0 &&
  ride.distance <= 50
  - All conditions must be true for shouldAccept to be true
  - If ANY is false, shouldAccept becomes false
  - Order matters for performance (check fastest first)

  THRESHOLD VALUES:
  - Rating > 4.0: Quality requirement (not >= 4.0, strictly greater than)
  - Distance <= 50: Range limit (not < 50, can be exactly 50)
  - These thresholds determine business rules

  TOFIXED() FOR CURRENCY:
  - totalFare.toFixed(2) rounds to 2 decimal places
  - Essential for money calculations
  - Example: 750.456 becomes "750.46"

  RETURNING STRUCTURED DATA:
  - Returns object with multiple properties
  - fare, surgeApplied, surgeMultiplier, driverRating, acceptanceRecommendation, reason
  - Caller gets complete picture of decision and calculation
  - Better than just returning true/false or a number


/*
  2. BANKING TRANSACTION VALIDATOR
  Validates banking withdrawals based on account status, balance, and daily limits
  Processes transaction only if all conditions are met
  
  Inputs:
    - account object: { balance, isActive, dailyLimit, dailyWithdrawn }
    - transaction object: { amount, type }
  
  Outputs:
    - Object indicating success/failure of transaction
    - Updates balance if transaction successful
    - Prevents overdrafts and fraud
*/

function bankingTransactionValidator(account, transaction) {
  /*
    Check if this is a withdrawal (ignoring deposits and other types)
    Early return for non-withdrawal transactions
  */
  if (transaction.type !== 'withdrawal') {
    return {
      success: false,
      message: `Transaction type '${transaction.type}' is not a withdrawal`,
      balanceAfter: account.balance,
      remainingDailyLimit: account.dailyLimit - account.dailyWithdrawn
    };
  }

  /*
    VALIDATION #1: Check if account is active
    Account must be active to perform withdrawals
    Prevents closed/frozen accounts from processing
  */
  if (!account.isActive) {
    return {
      success: false,
      message: "Error: Account is inactive or closed",
      balanceAfter: account.balance,
      remainingDailyLimit: account.dailyLimit - account.dailyWithdrawn
    };
  }

  /*
    VALIDATION #2: Check if account has sufficient balance
    Balance must be enough to cover the withdrawal amount
    Prevents overdrafts (negative balance)
  */
  if (account.balance < transaction.amount) {
    return {
      success: false,
      message: `Error: Insufficient balance. Available: $${account.balance}, Requested: $${transaction.amount}`,
      balanceAfter: account.balance,
      remainingDailyLimit: account.dailyLimit - account.dailyWithdrawn
    };
  }

  /*
    VALIDATION #3: Check daily withdrawal limit
    Calculate how much the user can still withdraw today
    remainingLimit = dailyLimit - (amount already withdrawn today)
    Then check if this withdrawal would exceed the limit
  */
  const remainingDailyLimit = account.dailyLimit - account.dailyWithdrawn;

  if (transaction.amount > remainingDailyLimit) {
    return {
      success: false,
      message: `Error: Exceeds daily limit. Remaining today: $${remainingDailyLimit}, Requested: $${transaction.amount}`,
      balanceAfter: account.balance,
      remainingDailyLimit: remainingDailyLimit
    };
  }

  /*
    ALL VALIDATIONS PASSED - PROCESS THE WITHDRAWAL
  */

  /*
    Calculate new balance after withdrawal
    newBalance = current balance - withdrawal amount
  */
  const newBalance = account.balance - transaction.amount;

  /*
    Update daily withdrawal counter
    Add this withdrawal to the amount already withdrawn today
  */
  const newDailyWithdrawn = account.dailyWithdrawn + transaction.amount;

  /*
    Return success object with updated information
    Updates account balance and tracks remaining daily limit
  */
  return {
    success: true,
    message: `Withdrawal of $${transaction.amount} successful!`,
    balanceAfter: newBalance,
    balanceDeducted: transaction.amount,
    remainingDailyLimit: account.dailyLimit - newDailyWithdrawn,
    totalWithdrawnToday: newDailyWithdrawn
  };
}

/*
  TEST 1: Valid withdrawal within all limits
  Account balance: 5000
  Daily limit: 2000, already withdrawn: 500
  Transaction: 800 withdrawal
  Expected: Success, new balance 4200, remaining daily 700
*/
const bankTest1 = bankingTransactionValidator(
  { balance: 5000, isActive: true, dailyLimit: 2000, dailyWithdrawn: 500 },
  { amount: 800, type: 'withdrawal' }
);

console.log("\nTEST 1: Valid Withdrawal - All Checks Pass");
console.log("Account: balance 5000, active, limit 2000/day (already withdrew 500)");
console.log("Transaction: withdraw 800");
console.log(`Success: ${bankTest1.success}`);
console.log(`Message: ${bankTest1.message}`);
console.log(`Balance after: $${bankTest1.balanceAfter}`);
console.log(`Remaining daily limit: $${bankTest1.remainingDailyLimit}`);

/*
  TEST 2: Account inactive
  Account balance: 3000, isActive: false
  Daily limit: 1500, already withdrawn: 0
  Transaction: 500 withdrawal
  Expected: Fail (account inactive)
*/
const bankTest2 = bankingTransactionValidator(
  { balance: 3000, isActive: false, dailyLimit: 1500, dailyWithdrawn: 0 },
  { amount: 500, type: 'withdrawal' }
);

console.log("\nTEST 2: Inactive Account");
console.log("Account: balance 3000, INACTIVE, limit 1500/day");
console.log("Transaction: withdraw 500");
console.log(`Success: ${bankTest2.success}`);
console.log(`Message: ${bankTest2.message}`);

/*
  TEST 3: Insufficient balance
  Account balance: 300
  Daily limit: 2000, already withdrawn: 0
  Transaction: 500 withdrawal (more than balance)
  Expected: Fail (not enough money)
*/
const bankTest3 = bankingTransactionValidator(
  { balance: 300, isActive: true, dailyLimit: 2000, dailyWithdrawn: 0 },
  { amount: 500, type: 'withdrawal' }
);

console.log("\nTEST 3: Insufficient Balance");
console.log("Account: balance 300, active, limit 2000/day");
console.log("Transaction: withdraw 500");
console.log(`Success: ${bankTest3.success}`);
console.log(`Message: ${bankTest3.message}`);

/*
  TEST 4: Exceeds daily limit
  Account balance: 10000
  Daily limit: 1000, already withdrawn: 600
  Transaction: 600 withdrawal (only 400 remaining in daily limit)
  Expected: Fail (exceeds daily limit)
*/
const bankTest4 = bankingTransactionValidator(
  { balance: 10000, isActive: true, dailyLimit: 1000, dailyWithdrawn: 600 },
  { amount: 600, type: 'withdrawal' }
);

console.log("\nTEST 4: Exceeds Daily Limit");
console.log("Account: balance 10000, active, limit 1000/day (already withdrew 600)");
console.log("Transaction: withdraw 600 (only 400 remaining)");
console.log(`Success: ${bankTest4.success}`);
console.log(`Message: ${bankTest4.message}`);
console.log(`Remaining daily limit: $${bankTest4.remainingDailyLimit}`);

/*
  TEST 5: Non-withdrawal transaction type
  Account balance: 5000
  Daily limit: 2000, already withdrawn: 0
  Transaction: 1000 deposit (not a withdrawal)
  Expected: Fail (wrong transaction type)
*/
const bankTest5 = bankingTransactionValidator(
  { balance: 5000, isActive: true, dailyLimit: 2000, dailyWithdrawn: 0 },
  { amount: 1000, type: 'deposit' }
);

console.log("\nTEST 5: Non-Withdrawal Transaction Type");
console.log("Account: balance 5000, active, limit 2000/day");
console.log("Transaction: deposit 1000 (not a withdrawal)");
console.log(`Success: ${bankTest5.success}`);
console.log(`Message: ${bankTest5.message}`);

/*
  TEST 6: Multiple withdrawals tracking daily limit
  First: Successful withdrawal of 300 from balance 1000
  Then: Another withdrawal of 400 with remaining daily limit
  Expected: Both succeed, show decreasing balance and daily limit
*/
console.log("\nTEST 6: Multiple Withdrawals Tracking Daily Limit");
let accountState = { balance: 1000, isActive: true, dailyLimit: 500, dailyWithdrawn: 0 };

console.log(`Starting balance: $${accountState.balance}, Daily limit: $${accountState.dailyLimit}`);

const withdraw1 = bankingTransactionValidator(
  accountState,
  { amount: 300, type: 'withdrawal' }
);
console.log(`\nWithdrawal 1: $300`);
console.log(`Success: ${withdraw1.success}`);
console.log(`New balance: $${withdraw1.balanceAfter}`);
console.log(`Withdrawn today: $${withdraw1.totalWithdrawnToday}`);
console.log(`Remaining daily limit: $${withdraw1.remainingDailyLimit}`);

accountState = { balance: withdraw1.balanceAfter, isActive: true, dailyLimit: 500, dailyWithdrawn: withdraw1.totalWithdrawnToday };

const withdraw2 = bankingTransactionValidator(
  accountState,
  { amount: 150, type: 'withdrawal' }
);
console.log(`\nWithdrawal 2: $150`);
console.log(`Success: ${withdraw2.success}`);
console.log(`New balance: $${withdraw2.balanceAfter}`);
console.log(`Withdrawn today: $${withdraw2.totalWithdrawnToday}`);
console.log(`Remaining daily limit: $${withdraw2.remainingDailyLimit}`);

/*
  HOW THE FUNCTION WORKS

  Step 1: Check transaction type
    If not 'withdrawal', reject immediately
    Handles deposits and other types separately
  
  Step 2: Verify account is active
    If account.isActive is false, reject
    Prevents fraud and maintains compliance
  
  Step 3: Verify sufficient balance
    If balance < amount, reject
    Prevents overdrafts
  
  Step 4: Verify daily limit not exceeded
    Calculate: remainingLimit = dailyLimit - dailyWithdrawn
    If amount > remainingLimit, reject
    Prevents exceeding daily withdrawal cap
  
  Step 5: Process successful withdrawal
    newBalance = balance - amount
    Update daily withdrawal counter
    Return success object with updated values
  
  Example: 1000 balance, 500 daily limit, 200 already withdrawn
    Remaining today: 500 - 200 = 300
    Can withdraw up to 300 more
    If withdraw 250: new balance 750, remaining limit 50
*/

/*
  KEY CONCEPTS

  MULTIPLE VALIDATIONS:
  if (type !== 'withdrawal') return error
  if (!isActive) return error
  if (balance < amount) return error
  if (amount > remainingLimit) return error
  - Each validation has early return
  - Stops at first failure (efficient)
  - Only reaches success if ALL pass

  DAILY LIMIT TRACKING:
  remainingDailyLimit = dailyLimit - dailyWithdrawn
  - Track how much user can still withdraw today
  - Prevents exhausting daily limit in one transaction
  - Common in banking: ATM daily limits

  UPDATING STATE:
  account.balance - transaction.amount = newBalance
  dailyWithdrawn + transaction.amount = newDailyWithdrawn
  - Shows impact of transaction
  - Tracks account changes over time
  - Useful for ledger/audit trails

  RETURNING COMPREHENSIVE INFO:
  success, message, balanceAfter, remainingDailyLimit
  - Caller knows exactly what happened
  - Can display helpful error messages
  - Tracks remaining resources

  EARLY RETURN PATTERN:
  - Fail fast at first validation failure
  - Don't waste time checking remaining conditions
  - Makes code clearer and more efficient


/*
  3. SMART INVENTORY MANAGEMENT
  Identifies products that need restocking
  Products marked for restock if: stock < minStockLevel AND not discontinued
  
  Inputs:
    - Array of product objects: { id, name, stock, minStockLevel, isDiscontinued }
  
  Outputs:
    - Array of products needing restock
    - Includes restock quantity needed for each product
    - Excludes discontinued products
*/

function smartInventoryManagement(products) {
  /*
    Initialize array to store products needing restock
    We'll add each product that fails the stock check
  */
  const restockNeeded = [];

  /*
    Loop through each product in the inventory
    i starts at 0, continues while i < array length, increments by 1
  */
  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    /*
      Check if product needs restocking
      Two conditions must BOTH be true:
      1. Current stock is below minimum level
      2. Product is not discontinued (we don't restock discontinued items)
    */
    if (product.stock < product.minStockLevel && !product.isDiscontinued) {
      /*
        Calculate how many units to order
        restockQuantity = minStockLevel - currentStock
        Example: min 50, current 20, need 30 more
      */
      const restockQuantity = product.minStockLevel - product.stock;

      /*
        Add this product to the restock list
        Push an object with product details and restock info
      */
      restockNeeded.push({
        id: product.id,
        name: product.name,
        currentStock: product.stock,
        minimumLevel: product.minStockLevel,
        restockQuantity: restockQuantity,
        status: 'NEEDS_RESTOCK'
      });
    }
  }

  /*
    Return object with summary and detailed list
    Provides overview of inventory status
  */
  return {
    totalProducts: products.length,
    productsNeedingRestock: restockNeeded.length,
    restockList: restockNeeded
  };
}

/*
  TEST 1: Mixed inventory - some need restock, some don't
  Products: 5 items, 3 need restock, 2 are fine
*/
const inventoryTest1 = [
  { id: 1, name: 'Laptop', stock: 5, minStockLevel: 10, isDiscontinued: false },
  { id: 2, name: 'Mouse', stock: 200, minStockLevel: 50, isDiscontinued: false },
  { id: 3, name: 'Keyboard', stock: 8, minStockLevel: 20, isDiscontinued: false },
  { id: 4, name: 'Monitor', stock: 15, minStockLevel: 10, isDiscontinued: false },
  { id: 5, name: 'Printer', stock: 3, minStockLevel: 5, isDiscontinued: false }
];

const restockResult1 = smartInventoryManagement(inventoryTest1);

console.log("\nTEST 1: Mixed Inventory");
console.log(`Total products: ${restockResult1.totalProducts}`);
console.log(`Need restock: ${restockResult1.productsNeedingRestock}`);
restockResult1.restockList.forEach((item) => {
  console.log(`  - ${item.name}: ${item.currentStock} in stock, need ${item.restockQuantity} more (min ${item.minimumLevel})`);
});

/*
  TEST 2: All products below minimum
  All 4 items need restocking
*/
const inventoryTest2 = [
  { id: 1, name: 'Milk', stock: 2, minStockLevel: 20, isDiscontinued: false },
  { id: 2, name: 'Bread', stock: 5, minStockLevel: 15, isDiscontinued: false },
  { id: 3, name: 'Eggs', stock: 10, minStockLevel: 30, isDiscontinued: false },
  { id: 4, name: 'Butter', stock: 3, minStockLevel: 8, isDiscontinued: false }
];

const restockResult2 = smartInventoryManagement(inventoryTest2);

console.log("\nTEST 2: All Products Below Minimum");
console.log(`Total products: ${restockResult2.totalProducts}`);
console.log(`Need restock: ${restockResult2.productsNeedingRestock}`);
restockResult2.restockList.forEach((item) => {
  console.log(`  - ${item.name}: ${item.currentStock} in stock, need ${item.restockQuantity} more`);
});

/*
  TEST 3: All products have sufficient stock
  None need restocking
*/
const inventoryTest3 = [
  { id: 1, name: 'Widget A', stock: 100, minStockLevel: 50, isDiscontinued: false },
  { id: 2, name: 'Widget B', stock: 75, minStockLevel: 30, isDiscontinued: false },
  { id: 3, name: 'Widget C', stock: 200, minStockLevel: 100, isDiscontinued: false }
];

const restockResult3 = smartInventoryManagement(inventoryTest3);

console.log("\nTEST 3: All Products Have Sufficient Stock");
console.log(`Total products: ${restockResult3.totalProducts}`);
console.log(`Need restock: ${restockResult3.productsNeedingRestock}`);
console.log("No restocking needed!");

/*
  TEST 4: Include discontinued products (should be ignored)
  Product A needs restock but is discontinued: IGNORE
  Product B needs restock and is active: INCLUDE
  Product C is fine: IGNORE
*/
const inventoryTest4 = [
  { id: 1, name: 'Old Phone', stock: 2, minStockLevel: 10, isDiscontinued: true },
  { id: 2, name: 'Tablet', stock: 5, minStockLevel: 15, isDiscontinued: false },
  { id: 3, name: 'Headphones', stock: 50, minStockLevel: 20, isDiscontinued: false }
];

const restockResult4 = smartInventoryManagement(inventoryTest4);

console.log("\nTEST 4: Discontinued Products (Should Be Ignored)");
console.log(`Total products: ${restockResult4.totalProducts}`);
console.log(`Need restock: ${restockResult4.productsNeedingRestock}`);
restockResult4.restockList.forEach((item) => {
  console.log(`  - ${item.name}: ${item.currentStock} in stock, need ${item.restockQuantity} more`);
});
console.log("Note: 'Old Phone' ignored because it's discontinued");

/*
  TEST 5: Edge case - stock exactly equals minimum
  When stock = minimum, product does NOT need restock (only < triggers restock)
*/
const inventoryTest5 = [
  { id: 1, name: 'Item A', stock: 20, minStockLevel: 20, isDiscontinued: false },
  { id: 2, name: 'Item B', stock: 19, minStockLevel: 20, isDiscontinued: false },
  { id: 3, name: 'Item C', stock: 21, minStockLevel: 20, isDiscontinued: false }
];

const restockResult5 = smartInventoryManagement(inventoryTest5);

console.log("\nTEST 5: Edge Case - Stock at Boundary");
console.log(`Total products: ${restockResult5.totalProducts}`);
console.log(`Need restock: ${restockResult5.productsNeedingRestock}`);
restockResult5.restockList.forEach((item) => {
  console.log(`  - ${item.name}: ${item.currentStock} in stock, need ${item.restockQuantity} more`);
});
console.log("Note: Item A (stock=min) does NOT need restock. Only Item B (stock < min) does.");

/*
  HOW THE FUNCTION WORKS

  Step 1: Create empty restockNeeded array
    This will collect all products that need restocking
  
  Step 2: Loop through each product
    for (let i = 0; i < products.length; i++)
    Access each product with products[i]
  
  Step 3: Check two conditions
    Condition 1: product.stock < product.minStockLevel
    Condition 2: !product.isDiscontinued (NOT discontinued)
    
    Both must be true (&&) to add to restock list
    If either is false, skip this product
  
  Step 4: Calculate restock quantity
    restockQuantity = minStockLevel - currentStock
    How many units needed to reach minimum
  
  Step 5: Add to restock list
    Push object with product details and restock info
  
  Step 6: Return summary
    Return object with totals and detailed list
  
  Example: Products [A, B, C, D]
    A: stock 5, min 10, active → ADD (10-5=5 needed)
    B: stock 50, min 20, active → SKIP (plenty in stock)
    C: stock 3, min 8, discontinued → SKIP (don't restock discontinued)
    D: stock 4, min 10, active → ADD (10-4=6 needed)
    Result: [A, D] in restock list
*/

/*
  KEY CONCEPTS

  MULTIPLE CONDITIONS WITH AND:
  product.stock < product.minStockLevel && !product.isDiscontinued
  - Both conditions must be true
  - ! means NOT: !isDiscontinued means "is not discontinued"
  - If either is false, entire condition is false

  LOOP WITH CONDITIONAL PUSH:
  for (let i = 0; i < products.length; i++) {
    if (condition) {
      restockNeeded.push(item)
    }
  }
  - Loop through all items
  - Check each one against condition
  - Only add those that qualify
  - Creates filtered list of matching items

  CALCULATING QUANTITY NEEDED:
  restockQuantity = minStockLevel - currentStock
  - Simple math: how many to reach target
  - Example: min 50, current 30, need 20 more
  - Used for automatic purchase orders

  EARLY LOOP CONTINUE:
  - No explicit continue, but if condition fails, skip push
  - Moves to next iteration automatically
  - Some code uses continue; for clarity

  RETURNING SUMMARY DATA:
  - totalProducts: how many items in inventory
  - productsNeedingRestock: count of items to restock
  - restockList: detailed list of items with quantities
  - Provides quick overview + detailed data


/*
  4. EVENT TICKETING SYSTEM
  Determines which attendees are allowed entry to an event
  Entry allowed if: has ticket AND (age >= required age OR has special permission)
  
  Inputs:
    - attendees array: { id, name, hasTicket, hasID, age, hasSpecialPermission }
    - requiredAge: minimum age to enter
  
  Outputs:
    - Array of attendees with entry status
    - Reason for approval/rejection for each person
    - Summary of approved vs rejected
*/

function eventTicketingSystem(attendees, requiredAge) {
  /*
    Initialize array to store entry results
    Will contain entry status for each attendee
  */
  const entryResults = [];

  /*
    Initialize counters for approved and rejected
    Track how many attendees get in
  */
  let approvedCount = 0;
  let rejectedCount = 0;

  /*
    Loop through each attendee
    i starts at 0, continues while i < array length, increments by 1
  */
  for (let i = 0; i < attendees.length; i++) {
    const attendee = attendees[i];

    /*
      Determine entry status
      Entry allowed if:
      1. Has a ticket (required)
      2. AND either:
        - Age is >= required age
        - OR has special permission (VIP, press, etc.)
    */
    let isApproved = false;
    let reason = '';

    if (!attendee.hasTicket) {
      /*
        Rejection reason #1: No ticket
        Ticket is absolutely required, no exceptions
      */
      isApproved = false;
      reason = 'No ticket';
      rejectedCount++;
    } else if (attendee.age >= requiredAge || attendee.hasSpecialPermission) {
      /*
        Approval: Has ticket AND (meets age requirement OR has special permission)
        Special permission waives age requirement
      */
      isApproved = true;
      if (attendee.age >= requiredAge) {
        reason = `Age verified (${attendee.age} >= ${requiredAge})`;
      } else {
        reason = 'Age waived - special permission granted';
      }
      approvedCount++;
    } else {
      /*
        Rejection reason #2: Has ticket but too young and no special permission
        Does not meet age requirement and no VIP status
      */
      isApproved = false;
      reason = `Underage (${attendee.age} < ${requiredAge}, no special permission)`;
      rejectedCount++;
    }

    /*
      Add entry result for this attendee
      Push object with their information and entry status
    */
    entryResults.push({
      id: attendee.id,
      name: attendee.name,
      approved: isApproved,
      reason: reason
    });
  }

  /*
    Return summary object with approved list and statistics
  */
  return {
    totalAttendees: attendees.length,
    approved: approvedCount,
    rejected: rejectedCount,
    approvalRate: ((approvedCount / attendees.length) * 100).toFixed(2),
    entryList: entryResults
  };
}

/*
  TEST 1: Diverse group - some approved, some rejected
  Mix of ages, with and without tickets, various permission levels
*/
const ticketTest1 = [
  { id: 1, name: 'Alice', hasTicket: true, hasID: true, age: 25, hasSpecialPermission: false },
  { id: 2, name: 'Bob', hasTicket: true, hasID: true, age: 17, hasSpecialPermission: false },
  { id: 3, name: 'Charlie', hasTicket: false, hasID: true, age: 30, hasSpecialPermission: false },
  { id: 4, name: 'Diana', hasTicket: true, hasID: false, age: 16, hasSpecialPermission: true },
  { id: 5, name: 'Eve', hasTicket: true, hasID: true, age: 22, hasSpecialPermission: false }
];

const eventResult1 = eventTicketingSystem(ticketTest1, 18);

console.log("\nTEST 1: Diverse Group (Required Age: 18)");
console.log(`Total attendees: ${eventResult1.totalAttendees}`);
console.log(`Approved: ${eventResult1.approved} | Rejected: ${eventResult1.rejected} | Rate: ${eventResult1.approvalRate}%`);
eventResult1.entryList.forEach((entry) => {
  const status = entry.approved ? '✓ APPROVED' : '✗ REJECTED';
  console.log(`  ${entry.name}: ${status} (${entry.reason})`);
});

/*
  TEST 2: All attendees have valid tickets and are old enough
  Everyone gets approved
*/
const ticketTest2 = [
  { id: 1, name: 'John', hasTicket: true, hasID: true, age: 21, hasSpecialPermission: false },
  { id: 2, name: 'Jane', hasTicket: true, hasID: true, age: 30, hasSpecialPermission: false },
  { id: 3, name: 'Jack', hasTicket: true, hasID: true, age: 25, hasSpecialPermission: false }
];

const eventResult2 = eventTicketingSystem(ticketTest2, 18);

console.log("\nTEST 2: All Qualified (Required Age: 18)");
console.log(`Total attendees: ${eventResult2.totalAttendees}`);
console.log(`Approved: ${eventResult2.approved} | Rejected: ${eventResult2.rejected} | Rate: ${eventResult2.approvalRate}%`);
eventResult2.entryList.forEach((entry) => {
  const status = entry.approved ? '✓ APPROVED' : '✗ REJECTED';
  console.log(`  ${entry.name}: ${status} (${entry.reason})`);
});

/*
  TEST 3: Mix of no tickets and underage
  Multiple rejection reasons
*/
const ticketTest3 = [
  { id: 1, name: 'Tom', hasTicket: false, hasID: true, age: 25, hasSpecialPermission: false },
  { id: 2, name: 'Tim', hasTicket: true, hasID: true, age: 16, hasSpecialPermission: false },
  { id: 3, name: 'Tara', hasTicket: true, hasID: true, age: 14, hasSpecialPermission: false }
];

const eventResult3 = eventTicketingSystem(ticketTest3, 18);

console.log("\nTEST 3: No Tickets & Underage (Required Age: 18)");
console.log(`Total attendees: ${eventResult3.totalAttendees}`);
console.log(`Approved: ${eventResult3.approved} | Rejected: ${eventResult3.rejected} | Rate: ${eventResult3.approvalRate}%`);
eventResult3.entryList.forEach((entry) => {
  const status = entry.approved ? '✓ APPROVED' : '✗ REJECTED';
  console.log(`  ${entry.name}: ${status} (${entry.reason})`);
});

/*
  TEST 4: Special permission overrides age requirement
  Underage attendees with special permission are approved
*/
const ticketTest4 = [
  { id: 1, name: 'VIP_Youth', hasTicket: true, hasID: true, age: 15, hasSpecialPermission: true },
  { id: 2, name: 'Press_Kid', hasTicket: true, hasID: true, age: 12, hasSpecialPermission: true },
  { id: 3, name: 'Regular_Adult', hasTicket: true, hasID: true, age: 20, hasSpecialPermission: false }
];

const eventResult4 = eventTicketingSystem(ticketTest4, 18);

console.log("\nTEST 4: Special Permission Waives Age (Required Age: 18)");
console.log(`Total attendees: ${eventResult4.totalAttendees}`);
console.log(`Approved: ${eventResult4.approved} | Rejected: ${eventResult4.rejected} | Rate: ${eventResult4.approvalRate}%`);
eventResult4.entryList.forEach((entry) => {
  const status = entry.approved ? '✓ APPROVED' : '✗ REJECTED';
  console.log(`  ${entry.name}: ${status} (${entry.reason})`);
});

/*
  TEST 5: Boundary case - exactly required age
  Attendee is exactly at the minimum age threshold
*/
const ticketTest5 = [
  { id: 1, name: 'ExactlyEighteen', hasTicket: true, hasID: true, age: 18, hasSpecialPermission: false },
  { id: 2, name: 'AlmostEighteen', hasTicket: true, hasID: true, age: 17, hasSpecialPermission: false }
];

const eventResult5 = eventTicketingSystem(ticketTest5, 18);

console.log("\nTEST 5: Boundary Case (Required Age: 18)");
console.log(`Total attendees: ${eventResult5.totalAttendees}`);
console.log(`Approved: ${eventResult5.approved} | Rejected: ${eventResult5.rejected} | Rate: ${eventResult5.approvalRate}%`);
eventResult5.entryList.forEach((entry) => {
  const status = entry.approved ? '✓ APPROVED' : '✗ REJECTED';
  console.log(`  ${entry.name}: ${status} (${entry.reason})`);
});

/*
  TEST 6: Large event with mixed demographics
  Realistic event scenario with various attendee types
*/
const ticketTest6 = [
  { id: 1, name: 'Student_NoTicket', hasTicket: false, hasID: true, age: 20, hasSpecialPermission: false },
  { id: 2, name: 'Adult_Valid', hasTicket: true, hasID: true, age: 35, hasSpecialPermission: false },
  { id: 3, name: 'Teen_VIP', hasTicket: true, hasID: true, age: 16, hasSpecialPermission: true },
  { id: 4, name: 'Kid_NoTicket', hasTicket: false, hasID: false, age: 12, hasSpecialPermission: false },
  { id: 5, name: 'Young_Adult', hasTicket: true, hasID: true, age: 19, hasSpecialPermission: false },
  { id: 6, name: 'Teen_NoPermission', hasTicket: true, hasID: true, age: 15, hasSpecialPermission: false }
];

const eventResult6 = eventTicketingSystem(ticketTest6, 18);

console.log("\nTEST 6: Large Event (Required Age: 18)");
console.log(`Total attendees: ${eventResult6.totalAttendees}`);
console.log(`Approved: ${eventResult6.approved} | Rejected: ${eventResult6.rejected} | Rate: ${eventResult6.approvalRate}%`);
eventResult6.entryList.forEach((entry) => {
  const status = entry.approved ? '✓ APPROVED' : '✗ REJECTED';
  console.log(`  ${entry.name}: ${status} (${entry.reason})`);
});

/*
  HOW THE FUNCTION WORKS

  Step 1: Loop through each attendee
    for (let i = 0; i < attendees.length; i++)
    Access each with attendees[i]
  
  Step 2: Check entry criteria in order
    if (!hasTicket) → REJECT (ticket required, no exceptions)
    else if (age >= required OR hasSpecialPermission) → APPROVE
    else → REJECT (no ticket, underage, no special permission)
  
  Step 3: Determine rejection reason
    - No ticket: absolute rejection
    - Age verified: approved normally
    - Special permission: approved with waived age
    - Underage with no permission: rejected with explanation
  
  Step 4: Track counts
    Increment approvedCount or rejectedCount based on result
  
  Step 5: Add to results
    Push object with attendee info and approval status
  
  Step 6: Return summary
    Total, approved, rejected, approval rate, detailed list
  
  Decision Tree:
  Has ticket?
    NO → REJECT "No ticket"
    YES → Check age/permission
      Age >= required?
        YES → APPROVE "Age verified"
        NO → Has special permission?
          YES → APPROVE "Special permission granted"
          NO → REJECT "Underage, no permission"
*/

/*
  KEY CONCEPTS

  COMPLEX LOGIC WITH OR:
  attendee.age >= requiredAge || attendee.hasSpecialPermission
  - || means OR: at least one must be true
  - If either condition is true, whole expression is true
  - If both are false, whole expression is false
  - Special permission overrides age requirement

  COMBINING AND/OR:
  attendee.hasTicket && (attendee.age >= requiredAge || attendee.hasSpecialPermission)
  - AND has higher precedence than OR conceptually
  - Ticket is REQUIRED
  - Then age OR permission must pass
  - Without ticket, age/permission don't matter

  IF/ELSE IF/ELSE CHAIN:
  if (!hasTicket) { reject }
  else if (qualifies) { approve }
  else { reject }
  - Only one block executes
  - Checks conditions in order
  - Clearer than multiple ifs

  CALCULATING RATE:
  ((approvedCount / totalAttendees) * 100).toFixed(2)
  - Percentage of approved attendees
  - (count/total) * 100 = percentage
  - .toFixed(2) rounds to 2 decimal places
  - Example: 5 of 10 = 50.00%

  LOOP WITH ACCUMULATORS:
  for loop with approvedCount++ and rejectedCount++
  - Increment counter when condition met
  - ++ adds 1 to the variable
  - Tracks distribution at end of loop
  - Shows summary statistics























*/
































*\


