//let -  block scoped, it can life only within {}
// let can be reassigned but can not be redeclared

let a = 10;
let retryCount = 0;
retryCount = retryCount + 1;    //reassigned
// let retryCount = 2;    can not be redeclared, will give SyntaxError: Identifier 'retryCount' has already been declared
console.log("Retry attempt:", retryCount);

let testStatus = "pending";

if (testStatus === "pending") {
    let executionTime = 200;
    console.log("Inside block:", executionTime);

}


// console.log(executionTime);   can not be accessed outside the block since it is decalred within the block
// will give this ReferenceError: executionTime is not defined

// Block is basically anything written inside  {}

// {}
// if {}{}
// function (){}

// let = loyal / can be changed once declared
// var = can change / traitor  / variable 