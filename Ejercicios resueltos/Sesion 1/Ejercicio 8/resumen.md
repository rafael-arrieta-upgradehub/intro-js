### Ejercicio 1: Juego de Adivinanza de Números

**Descripción:**
Crea un juego simple donde el usuario debe adivinar un número aleatorio entre 1 y 10. El resultado se mostrará en un HTML.

**Instrucciones:**
1. Crea un archivo HTML llamado `adivinaNumero.html`.
2. Dentro del archivo, escribe el siguiente código:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Juego de Adivinanza de Números</title>
  <style>
    body {
      text-align: center;
      margin-top: 50px;
    }
  </style>
</head>
<body>
  <h1>Juego de Adivinanza de Números</h1>
  <p>Adivina un número entre 1 y 10</p>
  <input type="number" id="adivinanza" min="1" max="10">
  <button onclick="adivinar()">Adivinar</button>
  <p id="resultado"></p>
  <script>
    var numeroSecreto = Math.floor(Math.random() * 10) + 1;
    var intentos = 3;

    function adivinar() {
      var adivinanza = document.getElementById("adivinanza").value;
      var resultado = document.getElementById("resultado");
      if (parseInt(adivinanza) === numeroSecreto) {
        resultado.innerText = "¡Felicidades! Adivinaste el número.";
      } else {
        intentos--;
        if (intentos > 0) {
          resultado.innerText = "Número incorrecto. Te quedan " + intentos + " intentos.";
        } else {
          resultado.innerText = "Lo siento, no adivinaste el número. El número era " + numeroSecreto;
        }
      }
    }
  </script>
</body>
</html>
```

### Ejercicio 2: Cambiar el Color de Fondo

**Descripción:**
Crea un botón que cambie el color de fondo de la página cada vez que se haga clic en él.

**Instrucciones:**
1. Crea un archivo HTML llamado `cambiarColor.html`.
2. Dentro del archivo, escribe el siguiente código:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Cambiar Color de Fondo</title>
  <style>
    body {
      text-align: center;
      margin-top: 50px;
    }
  </style>
</head>
<body>
  <button onclick="cambiarColor()">Cambiar Color de Fondo</button>
  <script>
    function cambiarColor() {
      var colores = ["red", "blue", "green", "yellow", "purple", "orange"];
      var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
      document.body.style.backgroundColor = colorAleatorio;
    }
  </script>
</body>
</html>
```

### Ejercicio 3: Contador de Clics

**Descripción:**
Crea un contador que aumente cada vez que se haga clic en un botón.

**Instrucciones:**
1. Crea un archivo HTML llamado `contadorClics.html`.
2. Dentro del archivo, escribe el siguiente código:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Contador de Clics</title>
  <style>
    body {
      text-align: center;
      margin-top: 50px;
    }
    #contador {
      font-size: 2em;
    }
  </style>
</head>
<body>
  <div id="contador">0</div>
  <button onclick="incrementarContador()">Clic aquí</button>
  <script>
    var contador = 0;
    function incrementarContador() {
      contador++;
      document.getElementById("contador").innerText = contador;
    }
  </script>
</body>
</html>
```
