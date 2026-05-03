/* Arrays
Data structures used to store multiple values under a single variable name where each value is places in an odered position.

key concepts:
.Odered collection-elements have positions called indexes.
.indexed acess-retrieving values their position(begin at zero).
.Homogeneous vs heterogeneous....same type or mixed type elements in languages.
.fixed vs dynamic size;
.Fixed...defined upfront(common in low level languages)
.Dynamic....can grow/shrink automatically 
   
sample code:
// Creating an array
let fruits = ["apple", "pears", "oranges"];

// Accessing elements (index starts at 0)
console.log(fruits[0]); // apple
console.log(fruits[2]); // oranges

// Adding elements
fruits.push("figs"); // adds to end
console.log(fruits);["apples" ,"pears", "oranges", "figs"];    ]


// Removing elements
fruits.pop(); // removes last element

// Looping through array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

an array breakdown;
ie let numbers=[10, 20, 30];
.array-numbers
.numbers[0]-10
.numbers[1]-20
.numbers.length-3


Array methods .
Method-function associated with a specific datatype, object or structure.
Function-Independent logic code 

sample code for array methods:
let numbers = [1, 2, 3, 4];

// Adding an element....adds to the last part
numbers.push(5);
.push() is a method defined for arrays 
.method is called on numbers
internally it finds the end of an array, inserts 5 updates the length ie  [1,2,3,4,5];


// Removing last element
numbers.pop();

// Transforming array
let doubled = numbers.map(num => num * 2);

// Filtering values
let evens = numbers.filter(num => num % 2 === 0);

console.log(numbers); // [1,2,3,4]
console.log(doubled); // [2,4,6,8]
console.log(evens);   // [2,4]

Multidimensional arrays
Arrays that contain other arrays as its elements...it reps data in more than one dimension (rows and columns)


Core concepts;
Nested structure-Each eleent can be itself in an array.
Multiple indices- Access of values can be done using more then one 
Tabular representation- used to model grids matrices and tables.

example of a matrix;
instead of [1,2,3];

you use:

[

[1,2,3],
[4,5,6]
]

The array pattern now becomes; Array [row][column]

sample code of a 2D array matrix

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Accessing values
console.log(matrix[0][0]); // 1
console.log(matrix[1][2]); // 6

// Looping through rows and columns
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}


