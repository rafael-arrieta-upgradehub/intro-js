


//console.log('Funciones propias del lenguaje')
//
//parseInt('42') // 42
//parseInt('42.42') // 42
//parseInt(null) // NaN
//
//parseFloat('42') // 42
//parseFloat('42.42') // 42.42
//parseFloat(null) // NaN
//parseFloat(undefined) // NaN
//
//const iAmANumber = 42;
//console.log(iAmANumber)// 42
//console.log(iAmANumber.toString()); // "42"
//console.log(typeof iAmANumber.toString()); // "string"
//
//
//const iAmAString = "Esto es una cadena de texto";
//
//console.log(iAmAString.toUpperCase()); // "ESTO ES UNA CADENA DE TEXTO"
//console.log(iAmAString.toLowerCase()); // "esto es una cadena de texto"


// usando las funciones nativas de Number() y String()

//const iAmANumber = 42;
//const iAmANumberFloating = 42.12321;
//const iAmAString = "I am a string";
//const iAmAStringNumber = "42";
//const iAmAStringNumberFloating = "42.12321";
//const iAmABoolean = true;
//
//console.log(Number(iAmAString)); // NaN
//console.log(Number(iAmAStringNumber)); // 42
//console.log(Number(iAmAStringNumberFloating)); // 42.12321
////console.log(Number(iAmABoolean)); // 1
//
//console.log(String(iAmANumber) + " concatenamos valores"); // "42"


// Usando prompt() y confirm()

var respuesta = prompt("¿Cuál es tu nombre?");

console.log(respuesta);

var confirmar = confirm("¿Estás seguro de que quieres hacer esto?");

console.log(confirmar)