// ============================================
// String Quotes in JavaScript: Single, Double, Backtick
// ============================================

// Single ('') and Double ("") quotes are IDENTICAL in behavior.
// Use whichever you prefer, just be consistent.

let singleQuote = 'Hello World';
let doubleQuote = "Hello World";

console.log(singleQuote);  // Hello World
console.log(doubleQuote);  // Hello World


// Backticks (``) are TEMPLATE LITERALS and do MORE than just wrap strings:
//   1. Allow multi-line strings without escape characters.
//   2. Allow string interpolation (embedding variables/expressions with ${...}).

let name = "Alice";
let age = 25;

// Interpolation + Multi-line
let templateString = `Hello, my name is ${name}.
I am ${age} years old.
Next year I will be ${age + 1}.`;

console.log(templateString);
// Output:
// Hello, my name is Alice.
// I am 25 years old.
// Next year I will be 26.


// ============================================
// SUMMARY
// ============================================
// '...'  -> Simple string, no special powers.
// "..."  -> Simple string, no special powers.
// `...`  -> Template literal: supports multi-line and ${interpolation}.
