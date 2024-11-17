## Ejercicios para Entender los Tipos de Datos en JavaScript

### Ejercicio 1: Identificar Tipos de Datos

**Descripción:**
Escribe un fragmento de código que declare variables de diferentes tipos de datos y use `typeof` para imprimir el tipo de cada variable.

**Instrucciones:**
1. Crea un archivo JavaScript llamado `tiposDeDatos.js`.
2. Dentro del archivo, escribe el siguiente código:

```javascript
var sinValor;
var nulo = null;
var esVerdadero = true;
var edad = 25;
var nombre = "Juan";

console.log(typeof sinValor); // undefined
console.log(typeof nulo); // object
console.log(typeof esVerdadero); // boolean
console.log(typeof edad); // number
console.log(typeof nombre); // string
```

## Ejercicio 2: Cambiar Tipos de Datos

**Descripción:**
Declara una variable y cambia su tipo de dato varias veces, imprimiendo el tipo de dato después de cada cambio.

**Instrucciones:**
1. Crea un archivo JavaScript llamado `cambiarTipos.js`.
2. Dentro del archivo, escribe el siguiente código:

```javascript
var variable = 10;
console.log(typeof variable); // number

variable = "Hola";
console.log(typeof variable); // string

variable = true;
console.log(typeof variable); // boolean

variable = null;
console.log(typeof variable); // object
```

## Ejercicio 3: Inferencia de Tipos

**Descripción:**
Declara variables sin especificar el tipo de dato y deja que JavaScript infiera el tipo basado en el valor asignado.

**Instrucciones:**
1. Crea un archivo JavaScript llamado `inferenciaTipos.js`.
2. Dentro del archivo, escribe el siguiente código:

```javascript
var numero = 10;
var texto = "Hola";
var sinDato;

console.log(typeof numero); // number
console.log(typeof texto); // string
console.log(typeof sinDato); // undefined
```
