
let a = 5;
let b = 2;

//console.log(a + b);  // 7
//console.log(a - b);  // 3
//console.log(a * b);  // 10
//console.log(a / b);  // 2.5
//console.log(a % b);  // 1
//console.log(a++);    // 5 (después de esta línea, a es 6)
//console.log(a--);    // 6 (después de esta línea, a es 5)
//console.log(a ** b); // 25


//var x = 5;
//var y = '5';
//var z = 5;
//
//if (x == y) {
//    console.log("x is equal to y");
//} else {
//    console.log("x is not equal to y");
//}
//
//if (x === y) {
//    console.log("x is exact equal to y");
//} else {
//    console.log("x is exact not equal to y");
//}
//
//if (3 != '3') {
//    console.log("3 is not equal to 3 as string");
//} else {
//    console.log("3 is equal to 3 as string");
//}
//
//if (3 !== '3') {
//    console.log("3 is not equal to 3 as string");
//} else {
//    console.log("3 is equal to 3 as string");
//}
//
//
//if (6 > 2) {
//    console.log("6 is greater than 2");
//}
//
//if (6 < 2) {
//    console.log("6 is less than 2");
//} else {
//    console.log("6 is not less than 2");
//}
//
//if (6 >= 6) {
//    console.log("6 is greater than or equal to 6");
//}
//
//if (6 <= 6) {
//    console.log("6 is less than or equal to 6");
//}
//
//const arrayOfNumbers = [1, 2, 3, 4, 5];
//
//arrayOfNumbers.forEach(function (element) {
//    if (element % 2 === 0) {
//        console.log(element + " is par");
//    } else {
//        console.log(element + " is impar");
//    }
//})


console.group('Operadores Logicos')

const iAmTrue = true;
const iAmFalse = false;

if (iAmTrue && iAmFalse) {
    console.log("Ambos son verdad con el operador AND");
} else {
    console.log("Ninguno es verdad con el operador AND");
}


if (iAmTrue || iAmFalse) {
    console.log("Al menos uno es verdad con el operador OR");
} else {
    console.log("Ninguno es verdad con el operador OR");
}

if (!iAmFalse) {
    console.log("iAmFalse es falso con el operador NOT");
} else {
    console.log("iAmFalse es verdadero con el operador NOT");
}
