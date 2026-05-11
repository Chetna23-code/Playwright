// Rule 1: Can contain letters, digits, underscores, and dollar signs
var myVariable = "valid";
var my_Variable = "valid";
var my$Variable = "valid";
var var123 = "valid";
var _name = "valid";
var $price = "valid";
var userName1 = "valid";
var first_second$third = "valid";

// Rule 2: Must begin with a letter, underscore, or dollar sign
var validStart = "valid";
var _validStart = "valid";
var $validStart = "valid";

// Rule 3: Cannot begin with a digit (uncomment to see error)
// var 1invalid = "error";
// var 2ndPlace = "error";

// Rule 4: Cannot be a reserved keyword (uncomment to see error)
// var var = "error";
// var let = "error";
// var function = "error";
// var class = "error";
// var return = "error";

// Rule 5: Are case-sensitive
var myVar = "lowercase m";
var MyVar = "uppercase M";
var MYVAR = "all uppercase";

console.log("Rule 1 examples:");
console.log(myVariable, my_Variable, my$Variable, var123, _name, $price, userName1, first_second$third);

console.log("\nRule 2 examples:");
console.log(validStart, _validStart, $validStart);

console.log("\nRule 3 - These would cause errors:");
console.log("var 1invalid = 'error'; // SyntaxError");
console.log("var 2ndPlace = 'error'; // SyntaxError");

console.log("\nRule 4 - These would cause errors:");
console.log("var var = 'error'; // SyntaxError");
console.log("var let = 'error'; // SyntaxError");
console.log("var function = 'error'; // SyntaxError");
console.log("var class = 'error'; // SyntaxError");
console.log("var return = 'error'; // SyntaxError");

console.log("\nRule 5 examples (case-sensitive):");
console.log(myVar, MyVar, MYVAR);
console.log("myVar === MyVar:", myVar === MyVar);
console.log("myVar === MYVAR:", myVar === MYVAR);
