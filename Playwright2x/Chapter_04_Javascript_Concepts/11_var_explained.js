var a = 10; //Global Variable

// var is function scoped

console.log(a);

function printHello() {
    console.log("Hello, How are you!!");
    var a = 20;    // Local Variable (Redeclared)
    console.log(a);
    if (true) {
        var a = 30;    // Local Variable (Redeclared)
        console.log(a);
    }
}



printHello();

// var === flipped,trump,not trust worthy, dual faced
// var a = 50;  we can again declare the var with same name again outside the scope of the function

