### Ejercicio 1: Convertir de Cadena a Número

**Descripción:**
Practica la conversión de cadenas a números en JavaScript usando `parseInt` y `parseFloat`.

**Instrucciones:**
1. Crea un archivo JavaScript llamado `convertirCadenaNumero.js`.
2. Dentro del archivo, escribe el siguiente código:

```javascript
var numeroEntero = parseInt("123");
var numeroDecimal = parseFloat("123.45");

console.log(numeroEntero); // 123
console.log(numeroDecimal); // 123.45
```

### Ejercicio 2: Convertir Número a Cadena

**Descripción:**
Practica la conversión de números a cadenas en JavaScript usando `toString`.

**Instrucciones:**
1. Crea un archivo JavaScript llamado `convertirNumeroCadena.js`.
2. Dentro del archivo, escribe el siguiente código:

```javascript
var numero = 123;
var cadena = numero.toString();

console.log(cadena); // "123"
```

### Ejercicio 3: Convertir Texto a Mayúsculas y Minúsculas

**Descripción:**
Practica la conversión de texto a mayúsculas y minúsculas en JavaScript usando `toUpperCase` y `toLowerCase`.

**Instrucciones:**
1. Crea un archivo JavaScript llamado `convertirTexto.js`.
2. Dentro del archivo, escribe el siguiente código:

```javascript
var texto = "hola";
var textoEnMayusculas = texto.toUpperCase();
console.log(textoEnMayusculas); // "HOLA"

texto = "HOLA";
var textoEnMinusculas = texto.toLowerCase();
console.log(textoEnMinusculas); // "hola"
```

### Ejercicio 4: Funciones Number y String

**Descripción:**
Practica el uso de las funciones `Number` y `String` para convertir valores en JavaScript.

**Instrucciones:**
1. Crea un archivo JavaScript llamado `funcionesNumberString.js`.
2. Dentro del archivo, escribe el siguiente código:

```javascript
var numero1 = Number("123");
var numero2 = Number("123.45");
var numeroInvalido = Number("abc");

console.log(numero1); // 123
console.log(numero2); // 123.45
console.log(numeroInvalido); // NaN

var numero = 456;
var booleano = true;
var cadenaNumero = String(numero);
var cadenaBooleano = String(booleano);

console.log(cadenaNumero); // "456"
console.log(cadenaBooleano); // "true"
```
