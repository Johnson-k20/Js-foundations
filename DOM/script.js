const age= 25;
name= "Alice";
console.log(age); // Output: 25
console.log(name); // Output: Alice

let obj= {
    name: "Alice",
    age: 25,
    city: "New York"
};
console.log(obj.name); // Output: Alice
console.log(obj.age);
console.log(obj.city);

let fruits = ["apple", "pear", "oranges"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
fruits.unshift("banana");
fruits.pop();
console.log(fruits);

var days=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
console.log(days);
// prints ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
delete days[2];
console.log(days);

let numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers);

let evens =numbers.filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4]

let doubled= numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// Looping through array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 92 },
  { name: "Charlie", grade: 78 }
];  

for (let i = 0; i < students.length; i++) {
  console.log(students[i].name + ": " + students[i].grade);
}

const highScorers = students.filter(student => student.grade > 80);
console.log(highScorers); // Output: [{ name: "Alice", grade: 85 }, { name: "Bob", grade: 92 }]

// Looping through array of objects
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name + ": " + students[i].grade);
}

let countdown = 5;
while (countdown > 0) {
  console.log(countdown);
  countdown--;
}

//user login simulation

let attempts=0;
const maxAttempts=3;
let loggedIn=false;
while(attempts<maxAttempts && !loggedIn){
    let username= prompt("Enter username:");
    let password= prompt("Enter password:");
    if(username==="admin" && password==="password123"){
        loggedIn=true;
        console.log("Login successful!");
    }
    else{
        attempts++;
        console.log("Invalid credentials. Attempt " + attempts + " of " + maxAttempts);
    }   
}
if(!loggedIn){
    console.log("Maximum login attempts reached. Access denied.");
}



// do-while loop example
let userchoice;
do{
    userchoice= prompt("Enter a number between 1 and 10 (or 'exit' to quit):");
    if(userchoice.toLowerCase() === "exit"){
        console.log("Goodbye!");
        break;
    }   
    let number= parseInt(userchoice);
    if(isNaN(number) || number < 1 || number > 10){
        console.log("Invalid input. Please enter a number between 1 and 10.");
    }
    else{
        console.log("You entered: " + number);
    }
}while(true);


console.log("This will always run at least once, even if the user exits immediately.");


logical or operator (||) examples:
// The logical OR operator (||) returns true if at least one of the operands is true, and false if both operands are false.
//returns the first truthy value it encounters, or the last value if all operands are falsy.
//truthy values in JavaScript include non-empty strings, non-zero numbers, and objects.
//  Falsy values include false, 0, "", null, undefined, and NaN.

console.log(true ||false); // Output: true;
explanation: The logical OR operator (||) returns true if at least one of the operands is true. In this case, since the first operand is true, the entire expression evaluates to true.


console.log("hello" || 77); // Output: "hello"
/*explanation: The logical OR operator (||) returns the first truthy value it encounters. In this case, "hello" is a non-empty string, which is considered truthy in JavaScript. Therefore, the expression evaluates to "hello" and does not evaluate the second operand (77).
truthy values in JavaScript include non-empty strings, non-zero numbers, and objects. Since "hello" is a non-empty string, it is truthy, and the logical OR operator returns it as the result of the expression.
*\

console.log (0 || "" || false); // Output: false 
/*
explanation: The logical OR operator (||) evaluates each operand from left to right and returns the first truthy value it encounters. In this case, 0, "" (empty string), and false are all falsy values in JavaScript. Since there are no truthy values in the expression, it evaluates to the last operand, which is false.
the truthy values in JavaScript include non-empty strings, non-zero numbers, and objects. Since all the operands in this expression are falsy, the logical OR operator returns false as the result of the expression.
*\


console.log( 3 +4 || 7-7); // Output: 7
explanation: The logical OR operator (||) evaluates the left operand first.
 In this case, 3 + 4 equals 7, which is a truthy value. Since the left operand is truthy, the entire expression evaluates to 7 without evaluating the right operand (7 - 7).
The truthy values in JavaScript include non-empty strings, non-zero numbers, and objects. 
Since 7 is a non-zero number, it is considered truthy, and the logical OR operator returns it as the result of the expression without evaluating the right operand.


console.log ("two" * 2 || "hey there"); // Output: "hey there"
explanation: The expression "two" * 2 results in NaN (Not a Number) because you cannot multiply a string by a number. NaN is considered a falsy value in JavaScript. Therefore, the logical OR operator (||) evaluates the right operand, which is "hey there", and returns it as the result of the expression.
The nan value is falsy in JavaScript, so the logical OR operator moves on to evaluate the next operand, which is "hey there". Since "hey there" is a non-empty string, it is considered truthy, and the logical OR operator returns it as the result of the expression.


const ageLimit=21;
const balance=100;
const price=500;
const isStaff=true;
const ageNow=19;

console.log(ageNow >= ageLimit || balance >= price || isStaff); // Output: true
explanation: The logical OR operator (||) evaluates the left operand first. In this case, ageNow (19) is not greater than or equal to ageLimit (21), so the left operand evaluates to false. Then it evaluates the right operand, which checks if balance (100) is greater than or equal to price (500). Since 100 is not greater than or equal to 500, the right operand also evaluates to false. However, the third operand (isStaff) is true, so the entire expression evaluates to true.
ageNow (19) is less than ageLimit (21), so the first condition is false.
 balance (100) is less than price (500), so the second condition is also false.
  However, isStaff is true, so the logical OR operator returns true as the result of the expression. It is the first truthy value encountered, which is why the expression evaluates to true.


  Logical AND operator (&&) examples:
  // The logical AND operator (&&) returns true if both operands are true, and false if at least one operand is false.
  // It returns the first falsy value it encounters, or the last value if all operands are truthy.
  //it returns the last truthy value if all operands are truthy, otherwise it returns the first falsy value it encounters.

  examples:

console.log(true && false); // Output: false
explanation: The logical AND operator (&&) returns true only if both operands are true.
 In this case, since the second operand is false, the entire expression evaluates to false.


console.log("hello" && 77); // Output: 77
explanation: The logical AND operator (&&) returns the first falsy value it encounters.
 In this case, "hello" is a non-empty string, which is considered truthy in JavaScript. Therefore, the expression evaluates to 77, which is the second operand and is also truthy. Since both operands are truthy, the logical AND operator returns the last operand, which is 77.

 console.log(true && false); // Output: false
explanation: The logical AND operator (&&) returns true only if both operands are true. 
In this case, since the second operand is false, the entire expression evaluates to false.

console.log(true && true && "hey"); // Output: "hey"
explanation: The logical AND operator (&&) returns the first falsy value it encounters.
 In this case, all operands are truthy, so the operator returns the last operand, which is "hey".

 console.log (agenow >= ageLimit && balance >= price && isStaff); // Output: false
explanation: The logical AND operator (&&) evaluates each operand from left to right and returns the first falsy value it encounters.
 In this case, ageNow (19) is less than ageLimit (21), so the first operand evaluates to false. 
 Since the logical AND operator returns false as soon as it encounters a falsy value, it does not evaluate the remaining operands (balance >= price and isStaff).
  Therefore, the entire expression evaluates to false.
  ageNow (19) is less than ageLimit (21), so the first condition is false. 
  Since the logical AND operator returns false as soon as it encounters a falsy value, it does not evaluate the remaining conditions (balance >= price and isStaff).
   Therefore, the entire expression evaluates to false.

 console.log(7 && 3 *2); // Output: 6
explanation: The logical AND operator (&&) returns the first falsy value it encounters.
 In this case, 7 is a non-zero number, which is considered truthy in JavaScript. 
 Therefore, the expression evaluates to 3 * 2, which is 6. 
 Since both operands are truthy, the logical AND operator returns the last operand, which is 6.

 logical NOT operator (!) examples:
// The logical NOT operator (!) returns true if the operand is falsy, and false if the operand is truthy. 
// It is used to invert the boolean value of an expression ie
//  if the expression is true, it will return false,
//  and if the expression is false, it will return true.


examples:

console.log(!true); // Output: false
explanation: The logical NOT operator (!) inverts the boolean value of true, resulting in false.

console.log(!false); // Output: true
explanation: The logical NOT operator (!) inverts the boolean value of false, resulting in true.

console.log (agenow <= agelimit && !isStaff && balance >= price ); // Output: true

explanation: The logical NOT operator (!) is used to invert the boolean value of isStaff.
 In this case, isStaff is true, so !isStaff evaluates to false. 
 The entire expression evaluates to true because ageNow (19) is less than or equal to ageLimit (21), !isStaff is false, and balance (100) is greater than or equal to price (500). 
 Since the logical AND operator (&&) requires all operands to be true for the expression to evaluate to true, the presence of !isStaff being false does not affect the overall truthiness of the expression, which results in true.



*/

