//Three way of declaring variables in  javascript
var v = 10;           // Var is of function-scope 
let l = 20;           // let is of block-scope
const c = 3.18;       // const is of block-scope


var browser = "chrome";
var browser = "firefox";    // var allows redeclartion 
browser = "edge";           // var allows reassignment


// for functions

var testCases = ['login', 'logout', 'signup'];

for (var i = 0; i < testCases.length; i++) {
    console.log("Running Test:", testCases[i]);
}

console.log("Loop counter leadked outside:", i);  // i is allowed outside of the function also creating a data leak 




