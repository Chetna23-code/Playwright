// ============================================
// JavaScript Number Literals and Types
// ============================================
// JavaScript has a single Number type that stores numbers as
// 64-bit floating point (IEEE 754 double precision).
// It supports integers, floats, and special numeric values.


// ============================================
// 1. INTEGER LITERALS (Whole Numbers)
// ============================================
let decimalInt = 42;
console.log("Integer:", decimalInt); // 42


// ============================================
// 2. FLOATING-POINT LITERALS (Decimals)
// ============================================
let floatNum = 3.14;
let negativeFloat = -0.5;
let noLeadingZero = .75;   // valid but not recommended
let trailingDot = 5.;      // valid but not recommended

console.log("Float:", floatNum);         // 3.14
console.log("Negative Float:", negativeFloat); // -0.5


// ============================================
// 3. EXPONENTIAL NOTATION (Scientific)
// ============================================
let oneMillion = 1e6;      // 1 * 10^6  = 1000000
let tinyNumber = 1e-3;     // 1 * 10^-3 = 0.001
let avogadro = 6.022e23;

console.log("1 Million:", oneMillion);   // 1000000
console.log("Tiny Number:", tinyNumber); // 0.001
console.log("Avogadro:", avogadro);      // 6.022e+23


// ============================================
// 4. BINARY LITERALS (Base 2) - ES6
// ============================================
// Prefix: 0b or 0B
let binaryFive = 0b101;    // 1*4 + 0*2 + 1*1 = 5
let binaryTen  = 0b1010;   // 10

console.log("Binary 0b101:", binaryFive);  // 5
console.log("Binary 0b1010:", binaryTen);  // 10


// ============================================
// 5. OCTAL LITERALS (Base 8) - ES6
// ============================================
// Prefix: 0o or 0O
let octalEight  = 0o10;    // 1*8 + 0 = 8
let octalSixtyFour = 0o100; // 64

console.log("Octal 0o10:", octalEight);       // 8
console.log("Octal 0o100:", octalSixtyFour);   // 64


// ============================================
// 6. HEXADECIMAL LITERALS (Base 16)
// ============================================
// Prefix: 0x or 0X
let hex255 = 0xFF;         // 15*16 + 15 = 255
let hex4096 = 0x1000;      // 4096
let hexColor = 0xFFA500;   // Orange in CSS hex

console.log("Hex 0xFF:", hex255);        // 255
console.log("Hex 0x1000:", hex4096);      // 4096
console.log("Hex 0xFFA500:", hexColor);   // 16753920


// ============================================
// 7. SPECIAL NUMERIC VALUES
// ============================================

// Infinity - value larger than any number
let positiveInfinity = Infinity;
let divideByZero = 1 / 0;
let tooLarge = Number.MAX_VALUE * 2;

console.log("Infinity:", positiveInfinity); // Infinity
console.log("1 / 0:", divideByZero);       // Infinity
console.log("Too Large:", tooLarge);         // Infinity

// -Infinity
let negativeInfinity = -Infinity;
let negDivideByZero = -1 / 0;

console.log("-Infinity:", negativeInfinity);    // -Infinity
console.log("-1 / 0:", negDivideByZero);       // -Infinity

// NaN (Not-a-Number) - invalid numeric operation
let notANumber = NaN;
let invalidMath = 0 / 0;
let parseFail = parseInt("hello");

console.log("NaN:", notANumber);             // NaN
console.log("0 / 0:", invalidMath);           // NaN
console.log("parseInt('hello'):", parseFail); // NaN

// Checking for NaN (NaN is the only value not equal to itself)
console.log("NaN === NaN:", NaN === NaN);     // false
console.log("isNaN('hello'):", isNaN("hello")); // true
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true


// ============================================
// 8. BIGINT (Arbitrary Precision Integers) - ES2020
// ============================================
// Suffix with 'n'. Can represent integers larger than Number.MAX_SAFE_INTEGER.
let bigOne = 9007199254740991n;              // safe integer limit + 1
let hugeNumber = 1234567890123456789012345n;
let bigFromConstructor = BigInt(42);

console.log("BigInt:", bigOne);               // 9007199254740991n
console.log("Huge BigInt:", hugeNumber);       // 1234567890123456789012345n
console.log("BigInt from constructor:", bigFromConstructor); // 42n

// BigInt arithmetic
let bigSum = 100n + 200n;
console.log("BigInt Sum:", bigSum);           // 300n

// typeof BigInt
console.log("typeof BigInt:", typeof bigOne); // "bigint"


// ============================================
// 9. NUMBER CONSTANTS
// ============================================
console.log("Max Safe Integer:", Number.MAX_SAFE_INTEGER);   // 9007199254740991
console.log("Min Safe Integer:", Number.MIN_SAFE_INTEGER);   // -9007199254740991
console.log("Max Value:", Number.MAX_VALUE);                 // 1.7976931348623157e+308
console.log("Min Value:", Number.MIN_VALUE);                 // 5e-324
console.log("Epsilon:", Number.EPSILON);                     // 2.220446049250313e-16
console.log("Positive Infinity:", Number.POSITIVE_INFINITY); // Infinity
console.log("Negative Infinity:", Number.NEGATIVE_INFINITY); // -Infinity
console.log("NaN constant:", Number.NaN);                    // NaN


// ============================================
// 10. UNDERSCORES AS NUMERIC SEPARATORS - ES2021
// ============================================
// Underscores can be used to make large numbers more readable.
let oneBillion = 1_000_000_000;
let binaryWithSep = 0b1010_1111;
let hexWithSep = 0xFF_FF;

console.log("1 Billion:", oneBillion);          // 1000000000
console.log("Binary Separated:", binaryWithSep); // 175
console.log("Hex Separated:", hexWithSep);    // 65535


// ============================================
// SUMMARY TABLE
// ============================================
// Type/Format          | Example          | Description
// ---------------------|------------------|----------------------------------
// Integer              | 42               | Whole number (decimal)
// Float                | 3.14             | Decimal point number
// Exponential          | 1e6              | Scientific notation
// Binary (ES6)         | 0b1010           | Base-2 number
// Octal (ES6)          | 0o77             | Base-8 number
// Hexadecimal          | 0xFF             | Base-16 number
// Infinity             | Infinity         | Positive infinity
// -Infinity            | -Infinity        | Negative infinity
// NaN                  | NaN              | Not a Number
// BigInt (ES2020)      | 9007199254740991n| Arbitrary precision integer
// Numeric Separators   | 1_000_000        | Readable number formatting
