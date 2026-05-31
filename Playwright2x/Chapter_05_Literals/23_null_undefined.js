// null vs undefined in JavaScript

// ============================================
// UNDEFINED
// ============================================
// `undefined` means a variable has been declared but has not been assigned a value yet.
// It is automatically assigned by JavaScript when:
//   1. A variable is declared but not initialized
//   2. A function doesn't return a value
//   3. A property doesn't exist in an object
//   4. A function parameter is not provided

let userName;
console.log(userName);           // undefined (declared but not assigned)
console.log(typeof userName);    // "undefined"

function greet() {
    // no return statement
}
console.log(greet());            // undefined

let person = { name: "Alice" };
console.log(person.age);         // undefined (property doesn't exist)

function sayHello(name) {
    console.log("Hello, " + name);
}
sayHello();                      // Hello, undefined (parameter not provided)


// ============================================
// NULL
// ============================================
// `null` is an assignment value that represents "no value" or "empty".
// It must be assigned explicitly by the programmer.
// It is often used to intentionally indicate that a variable should have no value.

let ProfilePicture = null;
console.log(ProfilePicture);           // null (explicitly set to nothing)
console.log(typeof ProfilePicture);    // "object" (this is a known JavaScript quirk/bug)

let score = 100;
score = null;      //developer clears the value intentially
console.log(score);  // null

// ============================================
// KEY DIFFERENCES SUMMARY
// ============================================
// 1. undefined = "I don't have a value yet" (automatic/default)
// 2. null      = "I intentionally have no value" (explicit assignment)
// 3. typeof undefined -> "undefined"
// 4. typeof null      -> "object" (historical bug in JS)

// Quick comparison
console.log(undefined == null);  // true  (loose equality)
console.log(undefined === null); // false (strict equality - different types)
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object"


// ============================================
// SIMPLE PRACTICAL EXAMPLE
// ============================================

// Scenario: Tracking a user's middle name
let middleName;                  // user hasn't entered it yet -> undefined
console.log(middleName);         // undefined

middleName = "James";            // user entered their middle name
console.log(middleName);         // "James"

middleName = null;               // user explicitly removed their middle name
console.log(middleName);         // null

// Check for empty value (either undefined or null)
if (middleName == null) {
    console.log("No middle name provided.");
}
