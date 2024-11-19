


var iAmANumber = 42;
var iAmAString = "42";

console.log(iAmANumber == iAmAString); // true
console.log(iAmANumber === iAmAString); // false

console.log(iAmANumber + iAmAString); // "4242"

console.log(typeof iAmANumber); // number
iAmANumber = iAmANumber.toString();
console.log(typeof iAmANumber); // string