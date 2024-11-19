## Ejercicios para Entender `const` y `let` en JavaScript

### Ejercicio 1: Declarar Variables con `const`

**Descripción:**
Declara una variable con `const` y muestra un error al intentar reasignar su valor.

**Instrucciones:**
1. Crea un archivo JavaScript llamado `const.js`.
2. Dentro del archivo, escribe el siguiente código:

```javascript
const pi = 3.14;
console.log(pi); // 3.14

// Intentar reasignar el valor
pi = 3.15; // Error: Assignment to constant variable.
```

## Ejercicio 2: Declarar Variables con `let`

**Descripción:**
Declara una variable con let, reasigna su valor y muestra el resultado.

**Instrucciones:**
1. Crea un archivo JavaScript llamado `let.js`.
2. Dentro del archivo, escribe el siguiente código:

```javascript
let x = 10;
console.log(x); // 10
```

3. Reasigna el valor de `x` y muestra el resultado:

```javascript
x = 20;
console.log(x); // 20
```

## Ejercicio 3: Diferencias entre `const`, `let` y `var`

**Descripción:**
Compara las diferencias entre `const`, `let` y `var` en JavaScript.

**Instrucciones:**
1. Crea un archivo JavaScript llamado `diferencias.js`.
2. Dentro del archivo, escribe el siguiente código:

```javascript

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
    
```

3. Agrega comentarios para explicar las diferencias entre `const`, `let` y `var`:

```javascript
// const: Variable inmutable, no se puede reasignar.
// let: Variable mutable, se puede reasignar.
// var: Variable mutable con alcance global o de función.
```
