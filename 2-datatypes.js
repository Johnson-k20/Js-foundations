/*
    * Data types in JavaScript
Datatypes refer to the different types of values that can be stored and manipulated in a programming language.
A datatype defines:
- The kind of value a variable can hold (e.g., string, number, boolean, etc.).
- The operations that can be performed on that value (e.g., addition for numbers, concatenation for strings, etc.).
- The way the value is stored in memory (e.g., how much space it takes up and how it is represented).

 In JavaScript, there are several built-in data types, including:
1. Primitive data types(single values):
They are immutable (cannot be changed after they are created) and are stored directly in the memory location assigned to the variable.
 The primitive data types include:
   - String: Represents a sequence of characters. Example: "Hello, World!"
   used for text and support concatenation (combining strings together).
   ie 
let greeting = "Hello, ";
let name = "Alice";
let message = greeting + name; // message will be "Hello, Alice"
   - Number: Represents numeric values, including integers and floating-point numbers. Example: 42, 3.14
   - Boolean: Represents a logical value that can be either true or false. Example: true, false
   - Null: Represents the intentional absence of any object value. Example: null
   - Undefined: Represents a variable that has been declared but has not been assigned a value. Example: undefined
   - Symbol: Represents a unique identifier that can be used as a property key in objects. Example: Symbol('mySymbol')

 key differences between primitive and non-primitive data types:
. Mutability: Primitive data types are immutable, meaning their values cannot be changed after they are created. Non-primitive data types (objects) are mutable, meaning their properties can be changed after they are created.
ie
let str = "Hello";
str = "World"; // This creates a new string, it doesn't change the original string

. Storage: Primitive data types are stored directly in the memory location assigned to the variable, while non-primitive data types (objects) are stored as references to the memory location where the object is stored.
ie
let obj1 = { name: "Alice" };
let obj2 = obj1;
obj2.name = "Bob"; // This changes the name property of the object that both obj1 and obj2 reference
console.log(obj1.name); // Output: Bob (because obj1 and obj2 reference the same object in memory)

. Comparison: When comparing primitive data types, the comparison is based on their actual values. When comparing non-primitive data types (objects), the comparison is based on their references (memory addresses), not their actual content.
ie 

let obj1 = { name: "Alice" };
let obj2 = { name: "Alice" };
console.log(obj1 === obj2); // Output: false (because obj1 and obj2 reference different objects in memory)
console.log(obj1.name === obj2.name); // Output: true (because the name properties of both objects have the same value)




2. Non-primitive data types(objects):
They are mutable (can be changed after they are created) and are stored as references to the memory location where the object is stored.
 The non-primitive data types include:
   - Object: Represents a collection of key-value pairs. Example: let person = { name: "Alice", age: 30 };

   - Array: Represents an ordered list of values. Example:let numbers = [1, 2, 3, 4, 5];

   - Function: Represents a reusable block of code that can be executed when called. Example: function greet() { console.log("Hello!"); }
ie 
let person = {
  name: "Alice",
  age: 30,
    greet: function() {
    console.log("Hello!");
    }
};

person.greet(); // Output: Hello!

null vs undefined:
- Null represents the intentional absence of any object value. It is explicitly assigned to a variable to indicate that it has no value.
 Example: let myVar = null;

- Undefined represents a variable that has been declared but has not been assigned a value. It is the default value of uninitialized variables.
 Example: let myVar; // myVar is undefined

typeoff confusion:
- The typeof operator in JavaScript is used to determine the type of a value. However, it can sometimes produce unexpected results, especially when dealing with null and arrays.
- For example, typeof null returns "object", which is a known quirk in JavaScript. This is because null is considered a primitive value, but it is represented as an object in memory.
- Additionally, typeof an array also returns "object", which can be confusing since arrays are a specific type of object in JavaScript. To check if a value is an array, you can use the Array.isArray() method instead.


Refference traps:
 This occurs when you assign an object to a new variable, which creates a reference to the same object in memory rather than creating a new copy of the object.
- As a result, changes made to the object through one variable will affect all variables that reference the same object.
- To avoid reference traps, you can create a copy of the object using methods like Object.assign() or the spread operator (...).
example of reference trap:
let original = { name: "Alice" };
let copy = original; // copy is a reference to the same object as original
copy.name = "Bob";
console.log(original.name); // Output: Bob (because original and copy reference the same object in memory)

example of avoiding reference trap:
let original = { name: "Alice" };
let copy = { ...original }; // copy is a new object with the same properties as original
copy.name = "Bob";
console.log(original.name); // Output: Alice (because original and copy are different objects in memory)


























































































*\