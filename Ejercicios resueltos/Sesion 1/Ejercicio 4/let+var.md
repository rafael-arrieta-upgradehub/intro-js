### Ejercicio 1: Alcance de la Variable (Scope)

**Descripción:**
Muestra la diferencia en el alcance de las variables declaradas con `var` y `let`.

**Instrucciones:**
1. Crea un archivo JavaScript llamado `alcance.js`.
2. Dentro del archivo, escribe el siguiente código:

```javascript
function ejemploVar() {
  if (true) {
    var x = 10;  // 'x' está disponible en toda la función
  }
  console.log(x);  // Imprime 10, porque 'x' está disponible aquí
}

function ejemploLet() {
  if (true) {
    let y = 20;  // 'y' solo está disponible dentro de este bloque
  }
  console.log(y);  // Error, porque 'y' no está disponible aquí
}

ejemploVar();
ejemploLet();
```

### Ejercicio 2: Redefinición de Variables

**Descripción:**
Muestra la diferencia en la redefinición de variables declaradas con `var` y `let`.

**Instrucciones:**
1. Crea un archivo JavaScript llamado `redefinicion.js`.
2. Dentro del archivo, escribe el siguiente código:

```javascript
var z = 30;
var z = 40;  // No hay error, pero puede ser confuso
console.log(z);  // Imprime 40

let a = 50;
let a = 60;  // Error, porque ya has declarado 'a' en este bloque
console.log(a);
```

### Ejercicio 3: Hoisting (Elevación de Variables)

**Descripción:**
Muestra la diferencia en el hoisting de variables declaradas con `var` y `let`.

**Instrucciones:**
1. Crea un archivo JavaScript llamado `hoisting.js`.
2. Dentro del archivo, escribe el siguiente código:

```javascript
console.log(b);  // Imprime undefined, no causa error
var b = 70;

console.log(c);  // Error, porque 'c' no está definida aún
let c = 80;
```

