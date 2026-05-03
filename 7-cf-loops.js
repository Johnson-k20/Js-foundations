/* **Loops: 
 
Loops are **control structures that repeat a block of code** until a condition is met. They're one of the most powerful tools in programming because they eliminate repetition and handle unknown quantities of data.

Every language has loops because the fundamental problem is universal: *"How do I do the same thing multiple times without writing it over and over?"*
Three Main Loop Types (Universal Across Languages)

1. **Count-controlled loops** (for) — Repeat a fixed number of times

2. **Condition-controlled loops** (while, do-while) — Repeat until something changes

3. **Iterator loops** (for...of, forEach) — Repeat through items in a collection

---

Real-World Analogy

Imagine you're organizing a library:

- **For loop**:
 "I need to shelve 50 books. For each book (1 to 50), pick it up and place it on a shelf."
- **While loop**:
 "Keep shelving books while there are books in the pile."
- **forEach loop**:
 "For each book in this pile, shelve it."

All three accomplish the same goal—they just think about the problem differently.


JavaScript Examples: 

### **1. For Loop — Count-Controlled**

**Basic Example:**
```javascript
// Simple countdown
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
// Output: 5, 4, 3, 2, 1 (Blastoff!)


**Why it matters:
- You know exactly how many times you need to loop
- Access to the counter variable (`i`) lets you use its value

**Real Example — Processing Array Items:**
```javascript
const students = ["Alice", "Bob", "Charlie"];

for (let i = 0; i < students.length; i++) {
  console.log(`${i + 1}. ${students[i]}`);
}
// Output:
// 1. Alice
// 2. Bob
// 3. Charlie
```


 **2. While Loop — Condition-Controlled

**Basic Example:
```javascript
let countdown = 3;

while (countdown > 0) {
  console.log(`Time remaining: ${countdown} seconds`);
  countdown--;
}
console.log("Liftoff!");

// Output:
// Time remaining: 3 seconds
// Time remaining: 2 seconds
// Time remaining: 1 seconds
// Liftoff!


**Why it matters:
- You don't know how many iterations in advance
- Perfect for "keep doing this until X happens"

**Real Example — User Login Retry:
javascript
let attempts = 0;
const maxAttempts = 3;
let isLoggedIn = false;

while (attempts < maxAttempts && !isLoggedIn) {
  const password = prompt("Enter password:");
  
  if (password === "secret123") {
    isLoggedIn = true;
    console.log("Login successful!");
  } else {
    attempts++;
    console.log(`Wrong password. Attempts remaining: ${maxAttempts - attempts}`);
  }
}

if (!isLoggedIn) {
  console.log("Account locked. Too many failed attempts.");
}




**3. Do-While Loop — Execute First, Check Second

**Basic Example:
javascript
let userChoice;

do {
  userChoice = prompt("Enter 'quit' to exit:");
  console.log(`You entered: ${userChoice}`);
} while (userChoice !== "quit");


**Why it matters:**
- Guarantees at least one execution
- Perfect for menu systems or "ask again" scenarios

**Real Example — ATM Menu:**
```javascript
let balance = 1000;
let continueTransaction = true;

do {
  console.log("\n--- ATM Menu ---");
  console.log("1. Check balance");
  console.log("2. Withdraw money");
  console.log("3. Exit");
  
  const choice = prompt("Select an option (1-3):");
  
  if (choice === "1") {
    console.log(`Your balance: $${balance}`);
  } else if (choice === "2") {
    const amount = parseInt(prompt("Withdrawal amount:"));
    if (amount <= balance) {
      balance -= amount;
      console.log(`Withdrawal successful. New balance: $${balance}`);
    } else {
      console.log("Insufficient funds.");
    }
  } else if (choice === "3") {
    continueTransaction = false;
    console.log("Thank you for using our ATM.");
  }
} while (continueTransaction);




**4. ForEach Loop — Iterate Through Collections**

**Basic Example:**
javascript
const fruits = ["apple", "banana", "orange"];

fruits.forEach(function(fruit) {
  console.log(`I like ${fruit}`);
});

// Output:
// I like apple
// I like banana
// I like orange
```

**Modern Syntax (Arrow Function):**
javascript
fruits.forEach(fruit => console.log(`I like ${fruit}`));


**Real Example — Processing Order Items:
javascript
const order = [
  { item: "Laptop", price: 1000, quantity: 1 },
  { item: "Mouse", price: 25, quantity: 2 },
  { item: "Keyboard", price: 80, quantity: 1 }
];

let total = 0;

order.forEach(product => {
  const subtotal = product.price * product.quantity;
  total += subtotal;
  console.log(`${product.item}: $${product.price} × ${product.quantity} = $${subtotal}`);
});

console.log(`\nTotal: $${total}`);

// Output:
// Laptop: $1000 × 1 = $1000
// Mouse: $25 × 2 = $50
// Keyboard: $80 × 1 = $80
//
// Total: $1130
```

---

 **5. For...Of Loop — Modern Iterator**

**Basic Example:
```javascript
const colors = ["red", "green", "blue"];

for (const color of colors) {
  console.log(color);
}
```

**Real Example — Processing Numbers from a Range:
javascript
// Calculate average temperature
const temperatures = [72, 75, 68, 70, 74];
let sum = 0;

for (const temp of temperatures) {
  sum += temp;
}

const average = sum / temperatures.length;
console.log(`Average temperature: ${average}°F`);




 **6. For...In Loop — Iterate Through Object Properties

**Basic Example:
```javascript
const person = {
  name: "Alice",
  age: 28,
  city: "New York",
  profession: "Engineer"
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Output:
// name: Alice
// age: 28
// city: New York
// profession: Engineer
```


 **Big-Picture Use Cases: Real Software Systems

**1. E-Commerce Platform
javascript
// Processing a shopping cart at checkout
const cart = [
  { id: 1, name: "Shirt", price: 29.99, quantity: 2 },
  { id: 2, name: "Jeans", price: 69.99, quantity: 1 },
  { id: 3, name: "Shoes", price: 89.99, quantity: 1 }
];

function calculateTotal(items) {
  let total = 0;
  
  for (const item of items) {
    total += item.price * item.quantity;
  }
  
  return total;
}

const totalCost = calculateTotal(cart);
console.log(`Cart total: $${totalCost.toFixed(2)}`);


Why loops matter here: The cart might have 1 item or 100 items—loops handle any quantity.



 **2. Social Media Feed
javascript
// Display user's posts
const posts = [
  { id: 1, author: "Alice", content: "Just finished a great book!", likes: 45 },
  { id: 2, author: "Bob", content: "Morning jog at the park", likes: 32 },
  { id: 3, author: "Charlie", content: "New project launch!", likes: 89 }
];

function displayFeed(posts) {
  posts.forEach((post, index) => {
    console.log(`\n--- Post ${index + 1} ---`);
    console.log(`By: ${post.author}`);
    console.log(`Content: ${post.content}`);
    console.log(`Likes: ❤️ ${post.likes}`);
  });
}

displayFeed(posts);



**3. Data Validation
javascript 
// Validate user input for a registration form
const formData = {
  username: "john_doe",
  email: "john@example.com",
  password: "SecurePass123!",
  age: 25
};

const rules = {
  username: (val) => val.length >= 3,
  email: (val) => val.includes("@"),
  password: (val) => val.length >= 8,
  age: (val) => val >= 18
};

let isValid = true;

for (const field in rules) {
  if (!rules[field](formData[field])) {
    console.log(`❌ ${field} is invalid`);
    isValid = false;
  } else {
    console.log(`✅ ${field} is valid`);
  }
}

console.log(`\nForm valid: ${isValid}`);
```

---

### **4. Video Game — Updating Objects**
```javascript
// Update enemy positions each game frame
const enemies = [
  { name: "Goblin", x: 10, y: 20, speed: 2 },
  { name: "Orc", x: 50, y: 15, speed: 1.5 },
  { name: "Troll", x: 30, y: 40, speed: 1 }
];

function updateGameFrame() {
  // Move each enemy
  for (const enemy of enemies) {
    enemy.x += enemy.speed; // Move right
    console.log(`${enemy.name} is now at position (${enemy.x}, ${enemy.y})`);
  }
}

updateGameFrame();




 **5. Data Processing — Search Results**
```javascript
// Filter and display search results
const searchResults = [
  { title: "JavaScript Basics", rating: 4.8, views: 15000 },
  { title: "Advanced JS", rating: 4.5, views: 8000 },
  { title: "React Tutorial", rating: 4.9, views: 25000 },
  { title: "Node.js Guide", rating: 4.6, views: 12000 }
];

function highlightTopResults(results, minRating = 4.7) {
  let count = 0;
  
  for (const result of results) {
    if (result.rating >= minRating) {
      count++;
      console.log(`⭐ ${count}. ${result.title} (Rating: ${result.rating}, Views: ${result.views.toLocaleString()})`);
    }
  }
  
  return count;
}

const topCount = highlightTopResults(searchResults);
console.log(`\nFound ${topCount} top-rated results`);




**Common Pitfalls & Misconceptions**

 **1. Infinite Loops**
```javascript
 Endless loop
let i = 0;
while (i < 10) {
  console.log(i);
  // Forgot to increment i!
}

// ✅ CORRECT
let i = 0;
while (i < 10) {
  console.log(i);
  i++; // This ensures the loop eventually ends
}
```

### **2. Off-by-One Errors**
```javascript
// ❌ WRONG: Misses the last element
const items = ["a", "b", "c"];
for (let i = 0; i < items.length - 1; i++) {
  console.log(items[i]); // Prints only "a", "b"
}

// ✅ CORRECT
for (let i = 0; i < items.length; i++) {
  console.log(items[i]); // Prints "a", "b", "c"
}
```

**3. Modifying Array During Loop**
javascript
//Unpredictable behavior
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 3) {
    numbers.splice(i, 1); // Removes element during iteration!
  }
}


  Use filter to create new array
const filtered = numbers.filter(num => num !== 3);
```

**4. Variable Scope Confusion**


 var has function scope, not block scope
for (var i = 0; i < 3; i++) {
  // loop body
}
console.log(i); // Prints 3 (i exists outside loop!)

 let has block scope
for (let j = 0; j < 3; j++) {
  // loop body
}
console.log(j); // ReferenceError: j is not defined
// **When to Use Which Loop?

| Loop Type | Best For | Example |
|-----------|----------|---------|
| **for** | Fixed number of iterations | Processing 10 items |
| **while** | Unknown number of iterations | Read until EOF |
| **do-while** | Must execute at least once | Menu systems |
| **forEach** | Simple iteration with no early exit | Printing all items |
| **for...of** | Simple iteration (modern, clean) | Iterating arrays |
| **for...in** | Object properties | Iterating object keys 
