// JS Engine
// Line by Line , JIT Compilation


console.log(a);
var a = "Hello";
console.log(a);

//Behind the scenes:
// JS engine will create a var with undefined value
// var a = undefined;  <-- Hoisted with undefined
// console.log (a);    <-- undefined
// a = "Hello";        <-- assignment stays in place
// console.log(Hello); <-- Hello