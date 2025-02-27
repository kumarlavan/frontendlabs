import React from 'react'
import ScrollButton from '../../ScrollButton/ScrollButton';

const JavaScriptQuestion = () => {
  const questions = [

   { Qno: 1,
    Ques: "What is JavaScript?",
    Ans: "JavaScript is a lightweight, interpreted programming language used to create dynamic and interactive web pages. It runs in the browser and is widely used for front-end and back-end development."
  },
  {
    Qno: 2,
    Ques: "What are the key features of JavaScript?",
    Ans: "JavaScript is lightweight, interpreted, dynamically typed, prototype-based, supports asynchronous programming, and is widely used for both front-end and back-end development."
  },
  {
    Qno: 3,
    Ques: "What is the difference between Java and JavaScript?",
    Ans: "Java is a statically typed, object-oriented programming language that runs on JVM, whereas JavaScript is dynamically typed, prototype-based, and runs in browsers and Node.js."
  },
  {
    Qno: 4,
    Ques: "What are JavaScript tokens?",
    Ans: "Tokens are the smallest elements in JavaScript programs, including keywords, identifiers, operators, literals, and separators."
  },
  {
    Qno: 5,
    Ques: "What are the data types in JavaScript?",
    Ans: "JavaScript has primitive data types (Number, String, Boolean, Null, Undefined, Symbol, BigInt) and non-primitive data types (Object, Array, Function)."
  },
  {
    Qno: 6,
    Ques: "What is the difference between var, let, and const?",
    Ans: "var is function-scoped and can be redeclared. let is block-scoped and cannot be redeclared. const is block-scoped and cannot be reassigned."
  },
  {
    Qno: 7,
    Ques: "What are JavaScript operators?",
    Ans: "JavaScript operators include arithmetic (+, -, *, /), comparison (==, ===, >, <), logical (&&, ||, !), assignment (=, +=, -=), and bitwise operators."
  },
  {
    Qno: 8,
    Ques: "What are JavaScript conditional statements?",
    Ans: "Conditional statements include if, if...else, if...else if...else, and switch statements."
  },
  {
    Qno: 9,
    Ques: "Explain loops in JavaScript.",
    Ans: "JavaScript loops include for, while, do...while, for...in (loops through object properties), and for...of (loops through iterable objects)."
  },
  {
    Qno: 10,
    Ques: "What are JavaScript functions?",
    Ans: "Functions are reusable blocks of code. They can be function declarations, function expressions, arrow functions, or immediately invoked function expressions (IIFE)."
  },
  {
    Qno: 11,
    Ques: "What is hoisting in JavaScript?",
    Ans: "Hoisting is JavaScript's default behavior of moving function and variable declarations to the top of their scope before execution."
  },
  {
    Qno: 12,
    Ques: "What is closure in JavaScript?",
    Ans: "A closure is a function that remembers variables from its parent scope even after the parent function has executed."
  },
  {
    Qno: 13,
    Ques: "What is the difference between == and === in JavaScript?",
    Ans: "== checks for value equality with type coercion, whereas === checks for both value and type equality."
  },
  {
    Qno: 14,
    Ques: "What is an IIFE (Immediately Invoked Function Expression)?",
    Ans: "An IIFE is a function that runs as soon as it is defined: (function() { console.log('Hello!'); })();"
  },
  {
    Qno: 15,
    Ques: "What is the difference between null and undefined?",
    Ans: "null represents an intentional absence of value, whereas undefined means a variable has been declared but not assigned a value."
  },
  {
    Qno: 16,
    Ques: "What is a promise in JavaScript?",
    Ans: "A promise represents the eventual completion (or failure) of an asynchronous operation and allows handling of asynchronous tasks."
  },
  {
      Qno: 17,
      Ques: "What is the difference between function declaration and function expression?",
      Ans: "A function declaration is hoisted, meaning it can be called before it is defined, whereas a function expression is not hoisted and must be defined before calling."
    },
    {
      Qno: 18,
      Ques: "What is an Immediately Invoked Function Expression (IIFE)?",
      Ans: "An IIFE is a function that executes immediately after being defined. Syntax: (function() { console.log('IIFE executed'); })(); It helps in avoiding global scope pollution."
    },
    {
      Qno: 19,
      Ques: "What is a higher-order function?",
      Ans: "A higher-order function is a function that takes another function as an argument or returns a function. Example: map, filter, reduce."
    },
    {
      Qno: 20,
      Ques: "What is the difference between var, let, and const?",
      Ans: "'var' has function scope and can be redeclared. 'let' has block scope and cannot be redeclared. 'const' is also block-scoped but cannot be reassigned."
    },
    {
      Qno: 21,
     Ques: "What is the main purpose of arrow functions in JavaScript?",
      Ans: "The main purpose of arrow functions is to provide a shorter syntax for writing functions and to inherit the 'this' value from the surrounding lexical context, making them useful for callbacks and maintaining scope in object methods."
    },

    {
      Qno: 22,
      Ques: "What is the 'this' keyword in JavaScript?",
      Ans: "The 'this' keyword refers to the object it belongs to. It behaves differently based on the context: in a method, it refers to the object; in a function, it refers to the global object (or undefined in strict mode)."
    },
    {
      Qno: 23,
      Ques: "What are objects in JavaScript?",
      Ans: "Objects in JavaScript are collections of key-value pairs. Example:\nconst person = { name: 'John', age: 30, greet: function() { console.log('Hello'); } };"
    },
    
    {
      Qno: 24,
      Ques: "What is prototypal inheritance?",
      Ans: "In JavaScript, objects inherit properties and methods from a prototype. Example:\nfunction Person(name) { this.name = name; }\nPerson.prototype.greet = function() { console.log('Hello ' + this.name); };"
    },
    {
      Qno: 25,
      Ques: "What are arrow functions?",
      Ans: "Arrow functions are a concise way to write functions. They do not have their own 'this'. Example:\nconst add = (a, b) => a + b;"
    },
    {
      Qno: 26,
      Ques: "What is the difference between shallow copy and deep copy?",
      Ans: "A shallow copy creates a new object but copies references to nested objects, whereas a deep copy creates a completely independent copy of the original object."
    },
    {
      Qno: 27,
      Ques: "What are default parameters in JavaScript?",
      Ans: "Default parameters allow function parameters to have predefined values if no value or undefined is passed.\nExample:\nfunction greet(name = 'Guest') { console.log('Hello, ' + name); }\ngreet(); // Output: Hello, Guest"
    },
    {
      Qno: 28,
      Ques: "What is the difference between arguments object and rest parameters?",
      Ans: "The 'arguments' object is an array-like object available inside functions that holds all passed arguments. Rest parameters use '...' syntax and allow collecting arguments into a real array.\nExample:\nfunction sum(...nums) { return nums.reduce((a, b) => a + b, 0); }\nsum(1, 2, 3); // Output: 6"
    },
    
    {
      Qno: 29,
      Ques: "What is the difference between synchronous and asynchronous functions?",
      Ans: "Synchronous functions execute line by line, blocking further execution until completion. Asynchronous functions use callbacks, promises, or async/await to allow non-blocking execution.\nExample:\nsetTimeout(() => console.log('Hello'), 1000); // Asynchronous"
    },
    {
      Qno: 30,
      Ques: "What is recursion in JavaScript?",
      Ans: "Recursion is a function that calls itself until a base condition is met.\nExample:\nfunction factorial(n) { if (n === 1) return 1; return n * factorial(n - 1); }\nconsole.log(factorial(5)); // Output: 120"
    },
    {
      Qno: 31,
      Ques: "What is a pure function?",
      Ans: "A pure function is a function that produces the same output given the same input and has no side effects.\nExample:\nfunction add(a, b) { return a + b; }"
    },
    {
      Qno: 32,
      Ques: "What is function currying?",
      Ans: "Currying is a technique where a function returns another function that takes the next argument.\nExample:\nfunction multiply(a) { return (b) => a * b; }\nconst double = multiply(2);\nconsole.log(double(5)); // Output: 10"
    },
    {
      Qno: 33,
      Ques: "What is memoization in JavaScript?",
      Ans: "Memoization is an optimization technique that stores the results of expensive function calls and returns cached results for the same inputs.\nExample:\nfunction memoizedAdd() { let cache = {}; return (n) => cache[n] || (cache[n] = n + 10); }\nconst addTen = memoizedAdd();\nconsole.log(addTen(5)); // Output: 15"
    },
    {
      Qno: 34,
      Ques: "What is the difference between a function statement and a function expression?",
      Ans: "A function statement (declaration) is hoisted, whereas a function expression is not.\nExample:\n// Function Statement\ngreet();\nfunction greet() { console.log('Hello'); }\n// Function Expression\nconst greet2 = function() { console.log('Hi'); };"
    },
    {
      Qno: 35,
      Ques: "What is a callback function?",
      Ans: "A callback function is a function passed as an argument to another function and executed later.\nExample:\nfunction fetchData(callback) { setTimeout(() => callback('Data received'), 2000); }\nfetchData(console.log);"
    },
    {
      Qno: 36,
      Ques: "What is the difference between a named and an anonymous function?",
      Ans: "A named function has a name, while an anonymous function does not and is often assigned to a variable.\nExample:\n// Named function\nfunction namedFunc() { console.log('Named'); }\n// Anonymous function\nconst anonFunc = function() { console.log('Anonymous'); };"
    },
    {
      Qno: 37,
      Ques: "What is an anonymous function, and when should it be used?",
      Ans: "An anonymous function is a function without a name, often used as an argument to another function.\nExample:\nsetTimeout(function() { console.log('Delayed execution'); }, 1000);"
    },
    {
      Qno: 38,
      Ques: "What is function composition?",
      Ans: "Function composition is combining multiple functions into a single function.\nExample:\nconst add5 = (n) => n + 5;\nconst multiply3 = (n) => n * 3;\nconst compose = (f, g) => (x) => f(g(x));\nconst addThenMultiply = compose(multiply3, add5);\nconsole.log(addThenMultiply(2)); // Output: 21"
    },
    {
      Qno: 39,
      Ques: "What is event loop in JavaScript?",
      Ans: "The event loop is a mechanism that handles asynchronous operations in JavaScript. It allows non-blocking execution by pushing tasks to the event queue and executing them after the call stack is empty."
    },
    {
      Qno: 40,
      Ques: "What is the difference between call stack and event loop?",
      Ans: "The call stack manages function execution order, while the event loop handles asynchronous callbacks when the stack is empty."
    },
    {
      Qno: 41,
      Ques: "What is setTimeout and setInterval?",
      Ans: "setTimeout executes a function after a delay, while setInterval repeatedly executes a function at a specified interval.\nExample:\nsetTimeout(() => console.log('Hello after 2 seconds'), 2000);\nsetInterval(() => console.log('Repeating every 3 seconds'), 3000);"
    },
    {
      Qno: 42,
      Ques: "What are template literals in JavaScript?",
      Ans: "Template literals allow embedding expressions within strings using backticks (`) and the ${} syntax for interpolation."
    },
    {
      Qno: 43,
      Ques: "What is destructuring in JavaScript?",
      Ans: "Destructuring is a syntax that allows unpacking values from arrays or properties from objects into distinct variables."
    },
    {
      Qno: 44,
      Ques: "What is the spread operator in JavaScript?",
      Ans: "The spread operator (...) allows an iterable (like an array or object) to be expanded into individual elements."
    },
    {
      Qno: 45,
      Ques: "What is the rest parameter in JavaScript?",
      Ans: "The rest parameter (...) allows functions to accept an indefinite number of arguments as an array."
    },
    {
      Qno: 46,
      Ques: "What is the difference between forEach and map?",
      Ans: "forEach iterates over an array but does not return a new array, whereas map creates a new array with modified elements."
    },
    {
      Qno: 47,
      Ques: "What are higher-order functions in JavaScript?",
      Ans: "A higher-order function is a function that takes another function as an argument or returns a function."
    },
    {
      Qno: 48,
      Ques: "What is the difference between find and filter methods?",
      Ans: "find returns the first element that matches a condition, whereas filter returns an array of all matching elements."
    },
    {
      Qno: 49,
      Ques: "What is the use of the reduce method in JavaScript?",
      Ans: "The reduce method executes a reducer function on each element of the array and returns a single value."
    },
    {
      Qno: 50,
      Ques: "What are default parameters in JavaScript functions?",
      Ans: "Default parameters allow functions to have preset values if no argument is provided."
    },
    
    ,
    {
      Qno: 51,
      Ques: "What is the purpose of the setTimeout function?",
      Ans: "setTimeout is used to execute a function after a specified delay in milliseconds."
    },
    {
      Qno: 52,
      Ques: "What is the purpose of the setInterval function?",
      Ans: "setInterval is used to repeatedly execute a function at a specified interval."
    },
    {
      Qno: 53,
      Ques: "What is localStorage in JavaScript?",
      Ans: "localStorage is a web storage API that stores data in the browser with no expiration time."
    },
    {
      Qno: 54,
      Ques: "What is sessionStorage in JavaScript?",
      Ans: "sessionStorage is similar to localStorage but persists only for the session duration."
    },
    {
      Qno: 55,
      Ques: "What is the difference between localStorage and sessionStorage?",
      Ans: "localStorage data persists indefinitely, while sessionStorage data is cleared when the session ends."
    },
    
    {
      Qno: 56,
      Ques: "How do you deep copy an object in JavaScript?",
      Ans: "A deep copy can be achieved using JSON.parse(JSON.stringify(obj)) or structuredClone(obj)."
    },
    {
      Qno: 57,
      Ques: "What is the difference between the slice and splice methods?",
      Ans: "slice returns a portion of an array without modifying it, whereas splice modifies the original array by adding or removing elements."
    },
    {
      Qno: 58,
      Ques: "What is the purpose of the Object.keys() method?",
      Ans: "Object.keys() returns an array of an object's own enumerable property names."
    },
    {
      Qno: 59,
      Ques: "What is the purpose of the Object.values() method?",
      Ans: "Object.values() returns an array of an object's own enumerable property values."
    },
    {
      Qno: 60,
      Ques: "What is the purpose of the Object.entries() method?",
      Ans: "Object.entries() returns an array of an object's key-value pairs."
    },
    {
      Qno: 61,
      Ques: "What is the difference between push and unshift methods?",
      Ans: "push adds elements to the end of an array, while unshift adds elements to the beginning."
    },
    {
      Qno: 62,
      Ques: "What is the difference between pop and shift methods?",
      Ans: "pop removes the last element from an array, while shift removes the first element."
    },
    
    {
      Qno: 63,
      Ques: "What is the purpose of the fetch API?",
      Ans: "The fetch API is used to make HTTP requests and handle responses in a promise-based manner."
    },
    {
      Qno: 64,
      Ques: "What is the difference between JSON and JavaScript objects?",
      Ans: "JSON is a string-based data format, while JavaScript objects are actual data structures in memory."
    },
    {
      Qno: 65,
      Ques: "What is the purpose of JSON.stringify()?",
      Ans: "JSON.stringify() converts a JavaScript object into a JSON string."
    },
    {
      Qno: 66,
      Ques: "What is the purpose of JSON.parse()?",
      Ans: "JSON.parse() converts a JSON string into a JavaScript object."
    },
    {
      Qno: 67,
      Ques: "What is the difference between innerHTML and innerText?",
      Ans: "innerHTML returns or sets the HTML content, while innerText only returns or sets the visible text content."
    },
    {
      Qno: 68,
      Ques: "What are ES6 modules?",
      Ans: "ES6 modules allow importing and exporting of JavaScript code using import and export keywords."
    },
    {
      Qno: 69,
      Ques: "What is the difference between named and default exports?",
      Ans: "Named exports export multiple values, while default exports export a single value that can be imported with any name."
    },
    {
      Qno: 70,
      Ques: "What is the call stack in JavaScript?",
      Ans: "The call stack is a data structure that keeps track of function calls in JavaScript. It follows the Last In, First Out (LIFO) principle, where the last function called is the first to be executed and removed from the stack."
    },
    

    {
      "Qno": 71,
      "Ques": "What is the push() method in JavaScript?",
      "Ans": "The push() method adds one or more elements to the end of an array and returns the new length of the array."
    },
    {
      "Qno": 72,
      "Ques": "What does the pop() method do in JavaScript?",
      "Ans": "The pop() method removes the last element from an array and returns that element."
    },
    {
      "Qno": 73,
      "Ques": "What is the purpose of the shift() method in JavaScript?",
      "Ans": "The shift() method removes the first element from an array and returns that element, shifting the remaining elements."
    },
    {
      "Qno": 74,
      "Ques": "What does the unshift() method do in JavaScript?",
      "Ans": "The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array."
    },
    {
      "Qno": 75,
      "Ques": "What is the concat() method in JavaScript?",
      "Ans": "The concat() method is used to merge two or more arrays into a single array and returns the new array."
    },
    {
      "Qno": 76,
      "Ques": "What does the join() method do in JavaScript?",
      "Ans": "The join() method joins all elements of an array into a single string, with an optional separator between elements."
    },
    {
      "Qno": 77,
      "Ques": "What is the slice() method in JavaScript?",
      "Ans": "The slice() method returns a shallow copy of a portion of an array, selected from start to end (end not included), without modifying the original array."
    },
    {
      "Qno": 78,
      "Ques": "What does the splice() method do in JavaScript?",
      "Ans": "The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements."
    },
    {
      "Qno": 79,
      "Ques": "What is the purpose of the forEach() method in JavaScript?",
      "Ans": "The forEach() method executes a provided function once for each array element, in order."
    },
    {
      "Qno": 80,
      "Ques": "What does the map() method do in JavaScript?",
      "Ans": "The map() method creates a new array by applying a function to each element of the original array."
    },
    {
      "Qno": 81,
      "Ques": "What is the filter() method in JavaScript?",
      "Ans": "The filter() method creates a new array with all elements that pass the test implemented by the provided function."
    },
    {
      "Qno": 82,
      "Ques": "What does the reduce() method do in JavaScript?",
      "Ans": "The reduce() method applies a function against an accumulator and each element of the array (from left to right) to reduce it to a single value."
    },
    {
      "Qno": 83,
      "Ques": "What is the purpose of the reduceRight() method in JavaScript?",
      "Ans": "The reduceRight() method applies a function against an accumulator and each element of the array (from right to left) to reduce it to a single value."
    },
    {
      "Qno": 84,
      "Ques": "What is the some() method in JavaScript?",
      "Ans": "The some() method tests whether at least one element in the array passes the test implemented by the provided function."
    },
    {
      "Qno": 85,
      "Ques": "What does the every() method do in JavaScript?",
      "Ans": "The every() method tests whether all elements in the array pass the test implemented by the provided function."
    },
    {
      "Qno": 86,
      "Ques": "What is the indexOf() method in JavaScript?",
      "Ans": "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not found."
    },
    {
      "Qno": 87,
      "Ques": "What does the find() method do in JavaScript?",
      "Ans": "The find() method returns the first element in the array that satisfies the provided testing function."
    },
    {
      "Qno": 88,
      "Ques": "What is the findIndex() method in JavaScript?",
      "Ans": "The findIndex() method returns the index of the first element in the array that satisfies the provided testing function."
    },
    {
      "Qno": 89,
      "Ques": "What does the includes() method do in JavaScript?",
      "Ans": "The includes() method determines whether an array contains a certain element, returning true or false as appropriate."
    },
    {
      "Qno": 90,
      "Ques": "What is the sort() method in JavaScript?",
      "Ans": "The sort() method sorts the elements of an array in place and returns the sorted array. By default, elements are sorted as strings."
    },
      {
        "Qno": 91,
        "Ques": "What is the toString() method in JavaScript?",
        "Ans": "The toString() method returns a string representing the object. It is called automatically when an object is used in a string context."
      },
      {
        "Qno": 92,
        "Ques": "What does the hasOwnProperty() method do in JavaScript?",
        "Ans": "The hasOwnProperty() method checks if an object has a specific property as its own (not inherited). It returns true if the object contains the property, otherwise false."
      },
      {
        "Qno": 93,
        "Ques": "What is the isPrototypeOf() method in JavaScript?",
        "Ans": "The isPrototypeOf() method checks if an object exists in another object's prototype chain. It returns true if the object is found in the prototype chain."
      },
      {
        "Qno": 94,
        "Ques": "What does the propertyIsEnumerable() method do in JavaScript?",
        "Ans": "The propertyIsEnumerable() method checks if a property is enumerable, meaning it is part of the object's for...in loop. It returns true if the property is enumerable."
      },
      {
        "Qno": 95,
        "Ques": "What is the valueOf() method in JavaScript?",
        "Ans": "The valueOf() method returns the primitive value of an object. It is called automatically when an object is used in a numeric context."
      },
      {
        "Qno": 96,
        "Ques": "What does the Object.keys() method do in JavaScript?",
        "Ans": "The Object.keys() method returns an array of a given object's own enumerable property names."
      },
      {
        "Qno": 97,
        "Ques": "What is the Object.values() method in JavaScript?",
        "Ans": "The Object.values() method returns an array of a given object's own enumerable property values."
      },
      {
        "Qno": 98,
        "Ques": "What does the Object.entries() method do in JavaScript?",
        "Ans": "The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs."
      },
      {
        "Qno": 99,
        "Ques": "What is the Object.assign() method in JavaScript?",
        "Ans": "The Object.assign() method copies the values of all enumerable properties from one or more source objects to a target object and returns the target object."
      },
      {
        "Qno": 100,
        "Ques": "What does the Object.create() method do in JavaScript?",
        "Ans": "The Object.create() method creates a new object with the specified prototype object and optional properties."
      },
      {
        "Qno": 101,
        "Ques": "What is the Object.freeze() method in JavaScript?",
        "Ans": "The Object.freeze() method freezes an object, meaning no new properties can be added, existing properties cannot be removed, and existing properties cannot be modified."
      },
      {
        "Qno": 102,
        "Ques": "What does the Object.seal() method do in JavaScript?",
        "Ans": "The Object.seal() method seals an object, preventing new properties from being added, but allowing modification of existing properties."
      },
      {
        "Qno": 103,
        "Ques": "What is the Object.getOwnPropertyDescriptor() method in JavaScript?",
        "Ans": "The Object.getOwnPropertyDescriptor() method returns the descriptor for a specific property of an object, including information like value, writable, enumerable, and configurable."
      },
      {
        "Qno": 104,
        "Ques": "What does the Object.getOwnPropertyNames() method do in JavaScript?",
        "Ans": "The Object.getOwnPropertyNames() method returns an array of all the own property names of an object (both enumerable and non-enumerable)."
      },
      {
        "Qno": 105,
        "Ques": "What is the Object.getPrototypeOf() method in JavaScript?",
        "Ans": "The Object.getPrototypeOf() method returns the prototype (internal [[Prototype]]) of the specified object."
      },
      {
        "Qno": 106,
        "Ques": "What does the Object.setPrototypeOf() method do in JavaScript?",
        "Ans": "The Object.setPrototypeOf() method sets the prototype (internal [[Prototype]]) of an object to another object or null."
      },
      {
        "Qno": 107,
        "Ques": "What is the Object.prototype.toString() method in JavaScript?",
        "Ans": "The Object.prototype.toString() method returns a string representation of the object, usually in the format [object Type], where Type is the object's type."
      },
      {
        "Qno": 108,
        "Ques": "What is the delete operator in JavaScript?",
        "Ans": "The delete operator is used to remove a property from an object, deleting the property and its value. It returns true if the property was successfully deleted, or false if not."
      },
      {
        "Qno": 109,
        "Ques": "What does the Object.defineProperty() method do in JavaScript?",
        "Ans": "The Object.defineProperty() method defines a new property or modifies an existing property directly on an object, and can specify property descriptors like writable, enumerable, and configurable."
      },
      {
        "Qno": 110,
        "Ques": "What is the Object.defineProperties() method in JavaScript?",
        "Ans": "The Object.defineProperties() method defines multiple properties or modifies existing properties directly on an object, allowing multiple property descriptors to be set at once."
      },
      {
        "Qno": 111,
        "Ques": "What is the DOM in JavaScript?",
        "Ans": "The DOM (Document Object Model) is a programming interface for web documents. It represents the structure of a document as a tree of nodes, where each node is an object representing a part of the document (like an element, attribute, or text). The DOM allows JavaScript to interact with and manipulate HTML or XML documents, enabling dynamic updates to the content, structure, and style of web pages."
      },
        {
          "Qno": 112,
          "Ques": "What is the getElementById() method in JavaScript?",
          "Ans": "The getElementById() method returns a reference to the first object with the specified ID. It allows access to any element in the document with the given ID."
        },
        {
          "Qno": 113,
          "Ques": "What does the getElementsByClassName() method do in JavaScript?",
          "Ans": "The getElementsByClassName() method returns a live HTMLCollection of all elements in the document with the specified class name."
        },
        {
          "Qno": 114,
          "Ques": "What is the getElementsByTagName() method in JavaScript?",
          "Ans": "The getElementsByTagName() method returns a live HTMLCollection of all elements in the document with the specified tag name."
        },
        {
          "Qno": 115,
          "Ques": "What is the querySelector() method in JavaScript?",
          "Ans": "The querySelector() method returns the first element that matches a specified CSS selector in the document."
        },
        {
          "Qno": 116,
          "Ques": "What does the querySelectorAll() method do in JavaScript?",
          "Ans": "The querySelectorAll() method returns a static NodeList of all elements that match the specified CSS selectors in the document."
        },
        {
          "Qno": 117,
          "Ques": "What is the createElement() method in JavaScript?",
          "Ans": "The createElement() method creates an HTML element of the specified tag name."
        },
        {
          "Qno": 118,
          "Ques": "What does the createTextNode() method do in JavaScript?",
          "Ans": "The createTextNode() method creates a new text node with the specified text content."
        },
        {
          "Qno": 119,
          "Ques": "What is the appendChild() method in JavaScript?",
          "Ans": "The appendChild() method appends a new child node to the end of the list of children of a specified parent node."
        },
        {
          "Qno": 120,
          "Ques": "What does the removeChild() method do in JavaScript?",
          "Ans": "The removeChild() method removes a specified child node from the DOM and returns the removed node."
        },
        {
          "Qno": 121,
          "Ques": "What is the replaceChild() method in JavaScript?",
          "Ans": "The replaceChild() method replaces a specified child node with a new node."
        },
        {
          "Qno": 122,
          "Ques": "What is the insertBefore() method in JavaScript?",
          "Ans": "The insertBefore() method inserts a new node before an existing child node of a specified parent node."
        },
        {
          "Qno": 123,
          "Ques": "What does the setAttribute() method do in JavaScript?",
          "Ans": "The setAttribute() method sets the value of an attribute on the specified element. If the attribute doesn't exist, it will be created."
        },
        {
          "Qno": 124,
          "Ques": "What is the getAttribute() method in JavaScript?",
          "Ans": "The getAttribute() method returns the value of a specified attribute of an element."
        },
        {
          "Qno": 125,
          "Ques": "What does the removeAttribute() method do in JavaScript?",
          "Ans": "The removeAttribute() method removes a specified attribute from an element."
        },
        {
          "Qno": 126,
          "Ques": "What is the classList property in JavaScript?",
          "Ans": "The classList property provides methods to add, remove, and toggle CSS classes on an element."
        },
        {
          "Qno": 127,
          "Ques": "What does the classList.add() method do in JavaScript?",
          "Ans": "The classList.add() method adds one or more class names to an element, without removing any existing classes."
        },
        {
          "Qno": 128,
          "Ques": "What is the classList.remove() method in JavaScript?",
          "Ans": "The classList.remove() method removes one or more class names from an element."
        },
        {
          "Qno": 129,
          "Ques": "What does the classList.toggle() method do in JavaScript?",
          "Ans": "The classList.toggle() method toggles a class name on or off for an element. If the class exists, it is removed; if not, it is added."
        },
        {
          "Qno": 130,
          "Ques": "What is the style property in JavaScript?",
          "Ans": "The style property allows direct manipulation of an element's inline styles (CSS). It provides access to the element’s style rules."
        },
        {
          "Qno": 131,
          "Ques": "What does the addEventListener() method do in JavaScript?",
          "Ans": "The addEventListener() method attaches an event listener to an element, which responds to a specific event (like click, mouseover, etc.) when it occurs."
        },
        {
          "Qno": 132,
          "Ques": "What is the removeEventListener() method in JavaScript?",
          "Ans": "The removeEventListener() method removes an event listener that was previously attached to an element."
        },
        {
          "Qno": 133,
          "Ques": "What does the dispatchEvent() method do in JavaScript?",
          "Ans": "The dispatchEvent() method dispatches an event to the element, triggering any event listeners that are listening for that event type."
        },
        {
          "Qno": 134,
          "Ques": "What is the innerHTML property in JavaScript?",
          "Ans": "The innerHTML property gets or sets the HTML content inside an element. It allows access to the HTML markup contained within the element."
        },
        {
          "Qno": 135,
          "Ques": "What does the textContent property do in JavaScript?",
          "Ans": "The textContent property sets or returns the text content of an element, excluding any HTML tags."
        },
        {
          "Qno": 136,
          "Ques": "What is the innerText property in JavaScript?",
          "Ans": "The innerText property returns the visible text content of an element, excluding hidden text or tags."
        },
        {
          "Qno": 137,
          "Ques": "What is the outerHTML property in JavaScript?",
          "Ans": "The outerHTML property gets or sets the HTML of the element itself, including its opening and closing tags."
        },
        {
          "Qno": 138,
          "Ques": "What is the scrollTop property in JavaScript?",
          "Ans": "The scrollTop property sets or returns the number of pixels that the content of an element is scrolled vertically."
        },
        {
          "Qno": 139,
          "Ques": "What does the scrollIntoView() method do in JavaScript?",
          "Ans": "The scrollIntoView() method scrolls the page to bring the specified element into view, ensuring that it is visible to the user."
        },
        {
          "Qno": 140,
          "Ques": "What is the querySelector() method in JavaScript?",
          "Ans": "The querySelector() method returns the first element that matches a specified CSS selector in the document."
        },
          {
            "Qno": 141,
            "Ques": "What is the charAt() method in JavaScript?",
            "Ans": "The charAt() method returns the character at a specified index in a string. If the index is out of range, it returns an empty string."
          },
          {
            "Qno": 142,
            "Ques": "What does the charCodeAt() method do in JavaScript?",
            "Ans": "The charCodeAt() method returns the Unicode of the character at a specified index in a string."
          },
          {
            "Qno": 143,
            "Ques": "What is the concat() method in JavaScript?",
            "Ans": "The concat() method is used to join two or more strings and returns a new string without modifying the original strings."
          },
          {
            "Qno": 144,
            "Ques": "What does the indexOf() method do in JavaScript?",
            "Ans": "The indexOf() method returns the index of the first occurrence of a specified substring in a string, or -1 if the substring is not found."
          },
          {
            "Qno": 145,
            "Ques": "What is the lastIndexOf() method in JavaScript?",
            "Ans": "The lastIndexOf() method returns the index of the last occurrence of a specified substring in a string, or -1 if the substring is not found."
          },
          {
            "Qno": 146,
            "Ques": "What does the slice() method do in JavaScript?",
            "Ans": "The slice() method returns a shallow copy of a portion of a string, selected from start to end (end not included), without modifying the original string."
          },
          {
            "Qno": 147,
            "Ques": "What is the substring() method in JavaScript?",
            "Ans": "The substring() method returns a portion of the string between two specified indices. If the start index is greater than the end index, the method swaps them."
          },
          {
            "Qno": 148,
            "Ques": "What does the replace() method do in JavaScript?",
            "Ans": "The replace() method searches for a specified substring or pattern and replaces it with a new substring."
          },
          {
            "Qno": 149,
            "Ques": "What is the toUpperCase() method in JavaScript?",
            "Ans": "The toUpperCase() method returns a new string with all characters converted to uppercase."
          },
          {
            "Qno": 150,
            "Ques": "What does the toLowerCase() method do in JavaScript?",
            "Ans": "The toLowerCase() method returns a new string with all characters converted to lowercase."
          },
          {
            "Qno": 151,
            "Ques": "What is the trim() method in JavaScript?",
            "Ans": "The trim() method removes whitespace from both ends of a string and returns a new string."
          },
          {
            "Qno": 152,
            "Ques": "What does the split() method do in JavaScript?",
            "Ans": "The split() method splits a string into an array of substrings, based on a specified separator."
          },
          {
            "Qno": 153,
            "Ques": "What is the includes() method in JavaScript?",
            "Ans": "The includes() method checks if a string contains a specified substring, returning true if it does and false otherwise."
          },
          {
            "Qno": 154,
            "Ques": "What does the startsWith() method do in JavaScript?",
            "Ans": "The startsWith() method checks if a string starts with a specified substring, returning true if it does and false otherwise."
          },
          {
            "Qno": 155,
            "Ques": "What is the endsWith() method in JavaScript?",
            "Ans": "The endsWith() method checks if a string ends with a specified substring, returning true if it does and false otherwise."
          },
          {
            "Qno": 156,
            "Ques": "What does the repeat() method do in JavaScript?",
            "Ans": "The repeat() method returns a new string that repeats the original string a specified number of times."
          },
          {
            "Qno": 157,
            "Ques": "What is the match() method in JavaScript?",
            "Ans": "The match() method searches for a specified pattern in a string and returns an array of matches, or null if no match is found."
          },
          {
            "Qno": 158,
            "Ques": "What does the search() method do in JavaScript?",
            "Ans": "The search() method tests whether a specified pattern exists in a string and returns the index of the first match or -1 if no match is found."
          },
          {
            "Qno": 159,
            "Ques": "What is the localeCompare() method in JavaScript?",
            "Ans": "The localeCompare() method compares two strings in a case-sensitive manner, returning a number that indicates whether the reference string is lexicographically less than, equal to, or greater than the compared string."
          },
          {
            "Qno": 160,
            "Ques": "What does the fromCharCode() method do in JavaScript?",
            "Ans": "The fromCharCode() method returns a string created from the specified sequence of Unicode values."
          },
          {
            "Qno": 161,
            "Ques": "What is the codePointAt() method in JavaScript?",
            "Ans": "The codePointAt() method returns the Unicode code point value of the character at the specified index in the string."
          },
          {
            "Qno": 162,
            "Ques": "What does the normalize() method do in JavaScript?",
            "Ans": "The normalize() method returns a new string with the Unicode normalization form of the original string, which resolves character compatibility issues."
          },
          {
            "Qno": 163,
            "Ques": "What is the padStart() method in JavaScript?",
            "Ans": "The padStart() method pads the current string with another string until the resulting string reaches a specified length, adding the padding at the start."
          },
          {
            "Qno": 164,
            "Ques": "What does the padEnd() method do in JavaScript?",
            "Ans": "The padEnd() method pads the current string with another string until the resulting string reaches a specified length, adding the padding at the end."
          },
          {
            "Qno": 165,
            "Ques": "What is the toLocaleUpperCase() method in JavaScript?",
            "Ans": "The toLocaleUpperCase() method returns a new string with all characters converted to uppercase, according to the host environment's current locale."
          },
          {
            "Qno": 166,
            "Ques": "What does the toLocaleLowerCase() method do in JavaScript?",
            "Ans": "The toLocaleLowerCase() method returns a new string with all characters converted to lowercase, according to the host environment's current locale."
          },
          {
            "Qno": 167,
            "Ques": "What is the trimStart() method in JavaScript?",
            "Ans": "The trimStart() method removes whitespace from the beginning of a string and returns a new string."
          },
          {
            "Qno": 168,
            "Ques": "What does the trimEnd() method do in JavaScript?",
            "Ans": "The trimEnd() method removes whitespace from the end of a string and returns a new string."
          },
          {
            "Qno": 169,
            "Ques": "What is the at() method in JavaScript?",
            "Ans": "The at() method allows access to the character at a specified index in a string, including negative indices that count from the end of the string."
          },
          {
            "Qno": 170,
            "Ques": "What does the fromCodePoint() method do in JavaScript?",
            "Ans": "The fromCodePoint() method returns a string created from the specified sequence of Unicode code points."
          },
          {
            Qno: 171,
            Ques: "What is lexical scoping in JavaScript?",
            Ans: "Lexical scoping means that a function's scope is determined by where it is defined in the source code. Inner functions can access variables from their outer functions, but not vice versa."
          },
          {
            "Qno": 172,
        "Ques": "What is a method in JavaScript?",
        "Ans": "In JavaScript, a method is a function that is associated with an object. It is a property of an object that holds a function definition, which can be invoked using dot notation or bracket notation."
    },
          



    
  ];
  return (
    <div className="container overflow-hidden" id='questions'>
      <h1>Javascript Interview Questions</h1>
      <div className="questions-wrapper overflow-hidden">
        {questions.map((item, index) => (
          <div key={index} className="question-box overflow-hidden">
                <h4 style={{ color: "#007bff", fontWeight: "bold" }}>{index + 1}. {item.Ques}</h4>
            {/* <image>{item.image}</image> */}
            {/* <img>{item.image}</img> */}
            {/* {item.image && <img src={item.image} alt={`Image for ${item.question}`} className="question-image" />} */}
            <h5>{item.Ans}</h5>
            {item.image && <img src={item.image} alt={`Image for ${item.question}`} className="question-image" />}
          </div>
        ))}
      </div>
      <ScrollButton/>
    </div>
  )
}

export default JavaScriptQuestion;