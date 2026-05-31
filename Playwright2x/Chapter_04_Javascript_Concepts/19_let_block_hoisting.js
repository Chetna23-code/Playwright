// let is blocked-scoped

let x = "global";
if (true) {
    // TDZ for blocked-scoped "x" starts here
    // console.log(x);  //ReferenceError (not "global!")


    let x = "block";   // let is block scope so we can use again with same name it will act as local var
    console.log(x);
}