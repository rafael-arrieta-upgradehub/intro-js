
function testConstants() {
    const pi = 3.14;
    console.log(pi); // 3.14

    // Intentar reasignar el valor
    pi = 3.15; // Error: Assignment to constant variable.
    console.log(pi); // 3.14

    let x = 10;
    console.log(x); // 10
    x = 20;
    console.log(x); // 20

    var y = 30;
    console.log(y); // 30
    y = 40;
    console.log(y); // 40

}

testConstants();

console.log(pi); // Error: pi is not defined
console.log(x); // Error: x is not defined
console.log(y); // 40
