### Resumen de Ejercicios de JavaScript

#### Ejercicio 1: Calcular el Área y el Perímetro de un Rectángulo
**Descripción:**
Crea funciones para calcular el área y el perímetro de un rectángulo y usa una función de orden superior para aplicar ambas funciones a un rectángulo.

**Instrucciones:**
1. Declara una función `calcularAreaRectangulo` que tome `ancho` y `alto` y devuelva el área.
2. Declara una función `calcularPerimetroRectangulo` que tome `ancho` y `alto` y devuelva el perímetro.
3. Declara una función `aplicarCalculo` que tome `ancho`, `alto` y una función `calculo`, y devuelva el resultado de aplicar `calculo` a `ancho` y `alto`.

```javascript
function calcularAreaRectangulo(ancho, alto) {
    return ancho * alto;
}

function calcularPerimetroRectangulo(ancho, alto) {
    return 2 * (ancho + alto);
}

function aplicarCalculo(ancho, alto, calculo) {
    return calculo(ancho, alto);
}

let ancho = 5, alto = 10;
console.log(aplicarCalculo(ancho, alto, calcularAreaRectangulo)); // Imprime 50
console.log(aplicarCalculo(ancho, alto, calcularPerimetroRectangulo)); // Imprime 30
```

#### Ejercicio 2: Convertir Grados Celsius a Fahrenheit y Viceversa
**Descripción:**
Crea funciones para convertir grados Celsius a Fahrenheit y viceversa, y usa una función de orden superior para aplicar ambas conversiones.

**Instrucciones:**
1. Declara una función `convertirCelsiusAFahrenheit` que tome `celsius` y devuelva la conversión a Fahrenheit.
2. Declara una función `convertirFahrenheitACelsius` que tome `fahrenheit` y devuelva la conversión a Celsius.
3. Declara una función `aplicarConversion` que tome un valor y una función `conversion`, y devuelva el resultado de aplicar `conversion` al valor.

```javascript
function convertirCelsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function convertirFahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function aplicarConversion(valor, conversion) {
    return conversion(valor);
}

let celsius = 30, fahrenheit = 86;
console.log(aplicarConversion(celsius, convertirCelsiusAFahrenheit)); // Imprime 86
console.log(aplicarConversion(fahrenheit, convertirFahrenheitACelsius)); // Imprime 30
```

#### Ejercicio 3: Sumar y Multiplicar Números
**Descripción:**
Crea funciones para sumar y multiplicar una cantidad variable de números y usa una función de orden superior para aplicar ambas operaciones.

**Instrucciones:**
1. Declara una función `sumar` que use el rest parameter `...numeros` y devuelva la suma de los números.
2. Declara una función `multiplicar` que use el rest parameter `...numeros` y devuelva el producto de los números.
3. Declara una función `aplicarOperacion` que tome una función `operacion` y una cantidad variable de números, y devuelva el resultado de aplicar `operacion` a los números.

```javascript
function sumar(...numeros) {
    return numeros.reduce((total, numero) => total + numero, 0);
}

function multiplicar(...numeros) {
    return numeros.reduce((total, numero) => total * numero, 1);
}

function aplicarOperacion(operacion, ...numeros) {
    return operacion(...numeros);
}

console.log(aplicarOperacion(sumar, 1, 2, 3)); // Imprime 6
console.log(aplicarOperacion(multiplicar, 1, 2, 3, 4)); // Imprime 24
```

#### Ejercicio 4: Crear Mensajes con Prefijo
**Descripción:**
Crea una función que reciba un prefijo y una cantidad variable de mensajes, y retorne una cadena con todos los mensajes prefijados.

**Instrucciones:**
1. Declara una función `crearMensaje` que tome un parámetro `prefix` y use el rest parameter `...mensajes`.
2. Dentro de la función, usa `map` para agregar el prefijo a cada mensaje y `join` para combinarlos en una cadena.

```javascript
function crearMensaje(prefix, ...mensajes) {
    return mensajes.map(mensaje => `${prefix}: ${mensaje}`).join(', ');
}

console.log(crearMensaje('Info', 'Sistema iniciado', 'Nuevo usuario agregado'));
// Imprime: 'Info: Sistema iniciado, Info: Nuevo usuario agregado'
```

#### Ejercicio 5: Simular una Tarea Asíncrona con un Callback
**Descripción:**
Crea una función que simule una tarea asíncrona usando `setTimeout` y un callback.

**Instrucciones:**
1. Declara una función `simularTarea` que tome un parámetro `callback`.
2. Dentro de la función, usa `setTimeout` para simular una tarea que tarda 2 segundos en completarse.
3. Después de 2 segundos, llama al `callback`.

```javascript
function simularTarea(callback) {
    console.log("Tarea en progreso...");
    setTimeout(function() {
        console.log("Tarea completada.");
        callback();
    }, 2000);
}

function tareaCompletada() {
    console.log("¡La tarea ha sido completada!");
}

simularTarea(tareaCompletada);
```
