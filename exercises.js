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


find the reminder whn 17 is divided by 5 and display the result.
const dividend = 17;
const divisor = 5;
const remainder = dividend % divisor;
console.log("Remainder:", remainder);


Create a variable x with a value of 10.add 5 to it using a shorthand operator ,then multiply the results by two using another shorthand operator.display the final value.
let x = 10;
x += 5;
x *= 2;
console.log("Final value of x:", x);

// Display the results of the following operations:
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

STEP; function declaration

function validateAirtimePurchase(phoneNumber, amount, balance) {

  function: keyword that tells JavaScript "I'm creating a function"
   validateAirtimePurchase: the name of this function
   (phoneNumber, amount, balance): these are PARAMETERS (inputs the function receives)
   - phoneNumber: the customer's phone number (e.g., 2557123456)
   - amount: how much money they want to spend on airtime (e.g., 50)
  - balance: their current account balance (e.g., 500)
  
  
   STEP: VALIDATION #1 - CHECK PHONE NUMBER
  
  
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
  
  
   STEP: VALIDATION #2 - CHECK AMOUNT
  
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
  
  
   STEP : VALIDATION #3 - CHECK BALANCE


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
    
     STEP: Use a TEMPLATE LITERAL to create a helpful error message
    return `Error: Insufficient balance. Available: $${balance}, Required: $${amount}`;
     Template literal: uses backticks ` ` instead of regular quotes
     ${} syntax: puts variables inside the string
    $${balance}: outputs the actual balance value (e.g., "$500")
    $${amount}: outputs the actual amount required (e.g., "$600")
    Example output: "Error: Insufficient balance. Available: $500, Required: $600"
  }
  
  
   STEP: ALL VALIDATIONS PASSED - PROCESS PURCHASE
  
  
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
  
   STEP: Return an OBJECT with purchase details

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



/*
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
*/
































*\


