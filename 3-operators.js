/* Operators in JavaScript 
An operator is a special symbol or keyword that performs a specific operation on one or more operands (values or variables) and produces a result.
They combine values and variables to perform operations such as arithmetic calculations, comparisons, logical operations, and more.
There are several types of operators in JavaScript, including:
1. Arithmetic Operators: These operators perform basic mathematical operations such as addition (+), subtraction (-), multiplication (*), division (/), and modulus (%).
example:
let a = 10;
let b = 5;
console.log(a + b); // Output: 15
console.log(a - b); // Output: 5
console.log(a * b); // Output: 50
console.log(a / b); // Output: 2
console.log(a % b); // Output: 0        
2. Comparison Operators: These operators compare two values and return a boolean result (true or false). Examples include equal to (==), not equal to (!=), greater than (>), less than (<), greater than or equal to (>=), and less than or equal to (<=).
example:
let x = 10;
let y = 5;
console.log(x == y); // Output: false
console.log(x != y);
// Output: true
console.log(x > y); // Output: true
console.log(x < y); // Output: false
console.log(x >= y); // Output: true
console.log(x <= y); // Output: false
3. Logical Operators: These operators are used to combine multiple boolean expressions and return a boolean result. Examples include logical AND (&&), logical OR (||), and logical NOT (!).
example:
let p = true;
let q = false;
console.log(p && q); // Output: false
console.log(p || q); // Output: true
console.log(!p); // Output: false
console.log(!q); // Output: true
4. Assignment Operators: These operators are used to assign values to variables. Examples include the simple assignment operator (=), addition assignment (+=), subtraction assignment (-=), multiplication assignment (*=), and division assignment (/=).
example:
let num = 10;
num += 5; // Equivalent to num = num + 5
console.log(num); // Output: 15
num -= 3; // Equivalent to num = num - 3
console.log(num); // Output: 12
num *= 2; // Equivalent to num = num * 2
console.log(num); // Output: 24
num /= 4; // Equivalent to num = num / 4
console.log(num); // Output: 6
5. Ternary Operator: This operator is a shorthand for an if-else statement and is represented by the symbol (?). It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false.
example:
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Output: Yes
6. Typeof Operator: This operator is used to determine the type of a value or variable. It returns a string indicating the type of the operand.
example:
let str = "Hello";
let num = 42;
let bool = true;
console.log(typeof str); // Output: "string"
console.log(typeof num); // Output: "number"
console.log(typeof bool); // Output: "boolean"
       
How operators behave with different data types:

-operator behaviour depends on:
1. The types of the operands involved in the operation.
2. The specific operator being used.
(A)
. Using var (function-scoped variable)
   Variables are function-scoped, if they are accessible within the function they are declared in and can be updated and re-declared.
   The boundary = function scope means that the variable is only accessible within the function it is declared in. If you try to access it outside of that function, it will result in an error.
    Example in real world analogy:
    You put something in a house and every room in the house can access it, but if you try to access it outside the house, you can't.
sample code:
function example() {
  var x = 10; // x is accessible within the example function
  console.log(x); // Output: 10
}   
console.log(x); // Error: x is not defined (x is not accessible outside the example function)
(B)
. Using let (block-scoped variable)
   Variables declared with let are block-scoped, meaning they are only accessible within the block they are declared in.
   Example in real world analogy:
   You put something in a room and only people in that room can access it.
sample code:
{
  let y = 20; // y is accessible within this block
  console.log(y); // Output: 20
}
// console.log(y); // Error: y is not defined (y is not accessible outside the block)

3.Javascript's type coercion rules, which can lead to unexpected results when combining different data types.

For example, when using the + operator with a string and a number, JavaScript will convert the number to a string and perform string concatenation instead of addition:
ie 

let a = "5";
let b = 10;
console.log(a + b); // Output: "510" (string concatenation)
console.log(a * b); // Output: 50 (string "5" is coerced to number 5)
console.log(a - b); // Output: -5 (string "5" is coerced to number 5)
console.log(a / b); // Output: 0.5 (string "5" is coerced to number 5)

Arithmetic operator behaviour with different data types:
- When using arithmetic operators with numbers, they perform the expected mathematical operations.
ie
let num1 = 10;
let num2 = 5;
console.log(num1 + num2); // Output: 15
console.log(num1 - num2); // Output: 5
console.log(num1 * num2); // Output: 50
console.log(num1 / num2); // Output: 2
console.log(num1 % num2); // Output: 0

- When using arithmetic operators with strings, they may perform string concatenation (for +) or result in NaN (Not a Number) for other operators.
ie
let str1 = "Hello, ";
let str2 = "World!";
console.log(str1 + str2); // Output: "Hello, World!" (string concatenation)
console.log(str1 - str2); // Output: NaN (not a number)
console.log(str1 * str2); // Output: NaN (not a number)
console.log(str1 / str2); // Output: NaN (not a number)

- When using arithmetic operators with booleans, true is treated as 1 and false is treated as 0.
ie
let bool1 = true;
let bool2 = false;
console.log(bool1 + bool2); // Output: 1 (true is treated as 1 and false is treated as 0)
console.log(bool1 - bool2); // Output: 1 (true is treated as 1 and false is treated as 0)
console.log(bool1 * bool2); // Output: 0 (true is treated as 1 and false is treated as 0)
console.log(bool1 / bool2); // Output: Infinity (true is treated as 1 and false is treated as 0, division by zero results in Infinity)

- When using arithmetic operators with null, null is treated as 0.
ie
let nullValue = null;
console.log(nullValue + 5); // Output: 5 (null is treated as 0)
console.log(nullValue - 5); // Output: -5 (null is treated as 0)
console.log(nullValue * 5); // Output: 0 (null is treated as 0)
console.log(nullValue / 5); // Output: 0 (null is treated as 0) 

- When using arithmetic operators with undefined, it results in NaN (Not a Number).
ie
let undefinedValue;
console.log(undefinedValue + 5); // Output: NaN (undefined is not a number)
console.log(undefinedValue - 5); // Output: NaN (undefined is not a number)
console.log(undefinedValue * 5); // Output: NaN (undefined is not a number)
console.log(undefinedValue / 5); // Output: NaN (undefined is not a number) 

Comparison operator behaviour with different data types:
- When using comparison operators with numbers, they compare the numeric values as expected.
- When using comparison operators with strings, they compare the strings lexicographically (based on Unicode values).
- When using comparison operators with booleans, true is considered greater than false.
- When using comparison operators with null, null is considered equal to null and less than any other value.
- When using comparison operators with undefined, undefined is considered equal to undefined and less than any other value.

Loose equality (==) and strict equality (===) operators:
- The loose equality operator (==) performs type coercion before comparing values, which can lead to unexpected results.
ie
console.log(5 == "5"); // Output: true (number 5 is coerced to string "5" before comparison)
console.log(0 == false); // Output: true (number 0 is coerced to boolean false before comparison)
- The strict equality operator (===) does not perform type coercion and compares both value and type, providing more predictable results.
ie
console.log(5 === "5"); // Output: false (number 5 is not equal to string "5" because they are of different types)
console.log(0 === false); // Output: false (number 0 is not equal to boolean false because they are of different types)

- The strict equality operator (===) does not perform type coercion and compares both value and type, providing more predictable results.
ie
console.log(5 === "5"); // Output: false (number 5 is not equal to string "5" because they are of different types)
console.log(0 === false); // Output: false (number 0 is not equal to boolean false because they are of different types)

Truthy and falsy values:
- In JavaScript, certain values are considered "truthy" (evaluating to true in a boolean context) and others are considered "falsy" (evaluating to false in a boolean context).
- Falsy values include: false, 0, -0, 0n (BigInt zero), "", null, undefined, and NaN.
- All other values are considered truthy.
ie
console.log(Boolean(5)); // Output: true
console.log(Boolean(0)); // Output: false
console.log(Boolean("")); // Output: false
console.log(Boolean(null)); // Output: false
console.log(Boolean(undefined)); // Output: false
console.log(Boolean(NaN)); // Output: false


Unary operators:
- Unary operators operate on a single operand. Examples include the increment operator (++) and the decrement operator (--).
ie
let count = 5;

console.log(count++); // Output: 5 (post-increment) 
console.log(count); // Output: 6 (count is now 6 after the post-increment)
console.log(++count); // Output: 7 (pre-increment)
console.log(count); // Output: 7 (count is still 7 after the pre-increment)


Reasoning example: 
operator precedence and associativity:
let result = 5 + 3 * 2; // result will be 11, because multiplication has higher precedence than addition
let result2 = (5 + 3) * 2; // result2 will be 16, because the parentheses change the order of operations

























































































































































*/
