/*

## **Control Flow Functions: The Concept**

### **General Programming Context**

Control flow functions are mechanisms that determine **which code executes and when**.
 They are the building blocks of logic in every programming language.
  There are three main types:

1. **Conditionals** (if/else, switch) — Execute code based on conditions
2. **Loops** (for, while) — Repeat code multiple times
3. **Functions** — Organize reusable code blocks

In any language (Python, Java, C++, JavaScript), control flow answers the question: *"What should happen next, and under what circumstances?"*

### **Real-World Analogy**

Think of control flow like **following a recipe**:
- **Conditionals** = "If the mixture is too thick, add milk"
- **Loops** = "Stir for 5 minutes" (repeat the stirring action)
- **Functions** = A sub-recipe you can reuse (e.g., "make the sauce" is a separate set of steps you might use in multiple dishes)

---

## **JavaScript Example: Conditionals**

```javascript
// Conditional: Make a decision based on age
function checkAgeEligibility(age) {
  if (age >= 18) {
    return "You can vote";
  } else if (age >= 13) {
    return "You're a teenager";
  } else {
    return "You're a child";
  }
}

console.log(checkAgeEligibility(25)); // "You can vote"
console.log(checkAgeEligibility(15)); // "You're a teenager"
```

### **Loop Example**

```javascript
// Loop: Repeat an action
function printNumbers(count) {
  for (let i = 1; i <= count; i++) {
    console.log(i);
  }
}

printNumbers(3); // Prints: 1, 2, 3
```

### **Function Example**

```javascript
// Function: Reusable code block
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet("Bob"));   // "Hello, Bob!"
```

---

## **Big-Picture Use Case**

In **real software systems**, control flow is everywhere:

- **E-commerce**: Conditionals check if a user is logged in before checkout; loops process items in a shopping cart
- **Banking apps**: Functions validate transactions; conditionals check if balance is sufficient
- **Video games**: Loops update character position every frame; conditionals detect collisions
- **Social media**: Loops iterate through user feeds; functions format and display posts

Without control flow, programs would execute line-by-line in a fixed sequence—no flexibility, no intelligence.

---

**Common Pitfalls**

1. **Off-by-one errors in loops**:
 `for (let i = 0; i < 5; i++)`
  runs 5 times (0-4), not 6
2. **Forgetting return statements**:
 Functions might execute but return `undefined`
3. **Infinite loops**: `while (true)` without a break condition crashes the program
4. **Not understanding scope**:
 Variables declared inside functions aren't accessible outside


