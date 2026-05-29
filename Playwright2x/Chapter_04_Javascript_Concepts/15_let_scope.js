
let a = 10;//Globalscope
console.log(a);


//Defination of function
function printHello() {
    console.log("Hello");
    let a = 20;  //local scope 
    console.log(a);
    if (true) {
        let a = 30;
        console.log(a); // 30 
    }
    console.log("F->", a);
}

console.log("G->", a);
printHello();
