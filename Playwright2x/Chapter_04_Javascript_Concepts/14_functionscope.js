
var a = 10; //Global scope
console.log(a);


//Defination of function
function printHello() {
    console.log("Hello");
    var a = 20;  //local scope 
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a); // 30 
    }
    console.log("F->", a);
}

console.log("G->", a);
printHello();