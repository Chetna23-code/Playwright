const BASE_URL = "https://app.thetestingacademy.com";
// BASE_URL = "https://app.thetestingacademy.com";
// trying to reassig the variable declared with const will give TypeError
// TypeError: Assignment to constant variable.


// let name = "pending";
// name = "done";          so basically var declared with let can be reassigned 


let name = "pending";
name = "done";

{
    let name = "chetna";
}

console.log(name);

function say() {
    let name = "toor";
}

say();










