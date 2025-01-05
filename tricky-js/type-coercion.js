// when ever we try to directly apply the + operator the number will be converted to string
console.log(2+2+"1");
console.log("1"+2+2);
console.log(1+"2"+2);

// but if we use any other type of mathematical operator js convert it to number 

console.log("2" * "2");
console.log("2" - "2");
console.log("2" / "2");
console.log("2" % "2");

// but we have cases when we can use + operator with string and still get it return as number

let x = 1;
x += +"2"
console.log(x);

console.log(+"2" + +"7");

// and famous banan question

console.log("ba" + + "a") 
// resules : baNaN , 'a' is a string, and when we use the unary + operator on it (+ 'a'), 
// JavaScript tries to convert the string 'a' into a number.
// Since 'a' is not a valid number, the result of + 'a' is NaN (Not-a-Number

// ------------------------------------------------------------------------------------

// The undefined vs null Distinction

// Closer

// hoisting and Hoisting with class

// Temporal Dead Zone (TDZ)

// Event Loop & Asynchronous Behavior

// protoype and Prototype Pollution

// Prototypal Inheritance

// Prototypal chain

// scope

// this Context

// arrow funtions and it's this scope

// function call chain

// method chaining with funtion and objects

// callbacks

// destructuring

// Expression vs Statement

// promises

// Composing Promises (Promise.all, Promise.race)

// pure funtions

// call(), apply(), and bind()

// Function Context and call(), apply(), and bind()

// value type and reference type

// currying

// == vs === Comparisons

// Variable Hoisting

// with Statement

// global object and Global Object Pollution

// Function Overloading Behavior

// Floating-Point Arithmetic

// Object.freeze()

// arguments Object in Functions

// Generator Functions and yield

// Proxy and Reflect API

// Destructuring and Defaults

// Async Iterators

// Private Fields in Classes

// Tagged Template Literals

// Dynamic import()

// WeakMap and WeakSet

// Shadowing Variables in Closures

// Symbol and Unique Property Keys

// JavaScript Modules (ESM vs CommonJS)

// event bubble and event capturing and event delegation

// Observer Pattern with Observable

// Destructuring Nested Objects and Arrays

// Memoization

// Web Workers (Worker Threads)

// Memory Leaks in JavaScript

// event emit

// Object Mutation

// Shallow vs. Deep Cloning

// Property Descriptor (Getter/Setter)
    // Object.defineProperty()
//  Dynamic Object Keys

// Symbol as Object Property

// Prototype Inheritance and hasOwnProperty()

// The delete Operator

// ----------------------------------------------------------------
// ECMAScript 2023 (ES14) Features:

// Top-Level Await

// New Array Methods

// Records and Tuples

// Temporal API
// ----------------------------------------------------------------------------

// ECMAScript 2024 (ES15) Features

// Object.groupBy and Map.groupBy

// Promise.withResolvers

// RegExp /v Flag
// --------------------------------------------------------------------------------

// memory and threads utilization in js

// worker threads

// web workers

// SharedArrayBuffer

// Parallelism in JavaScript (Using Libraries and APIs)

// Multithreading with WebAssembly (WASM)

// 




