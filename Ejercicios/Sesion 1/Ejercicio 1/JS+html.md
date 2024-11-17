## Ejercicios para Incluir JavaScript en un Archivo HTML

### Ejercicio 1: Código JavaScript Directamente en HTML

**Descripción:**
Escribe un pequeño fragmento de código JavaScript directamente en un archivo HTML que muestre un mensaje de alerta.

**Instrucciones:**
1. Crea un archivo HTML llamado `index.html`.
2. Dentro del archivo, escribe el siguiente código:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 1</title>
</head>
<body>
    <script>
        alert("Hola Mundo!");
    </script>
</body>
</html>
```

### Ejercicio 2: Enlazar un Archivo JavaScript Externo

**Descripción:**
Crea un archivo JavaScript externo y enlázalo a un archivo HTML para ejecutar el código.

**Instrucciones:**
1. Crea un archivo HTML llamado index.html.
2. Crea un archivo JavaScript llamado script.js.
3. En el archivo script.js, escribe el siguiente código:

```javascript
alert("Hola Mundo desde un archivo externo!");
```

4. Dentro del archivo index.html, enlaza el archivo JavaScript externo:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 2</title>
    <script src="script.js"></script>
</head>
<body>
</body>
</html>
```

### Ejercicio 3: Controlar la Carga del Archivo con defer o async

**Descripción:**
Usa el atributo defer para controlar la carga de un archivo JavaScript externo.

**Instrucciones:**
1. Crea un archivo HTML llamado index.html.
2. Crea un archivo JavaScript llamado script.js.
3. En el archivo script.js, escribe el siguiente código:

```javascript
document.addEventListener("DOMContentLoaded", function() {
    alert("El DOM está completamente cargado y analizado");
});
```
4. Dentro del archivo index.html, enlaza el archivo JavaScript externo con el atributo defer:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 3</title>
    <script defer src="script.js"></script>
</head>
<body>
</body>
</html>
```

### Ejercicio 4: ¿Dónde Colocar los Scripts en HTML?

**Descripción:**
Explora las ventajas de colocar scripts en el `<head>` o justo antes del cierre del `<body>` en un archivo HTML.

**Instrucciones:**
1. Crea un archivo HTML llamado index.html.
2. Dentro del archivo, coloca un script en el `<head>` con el atributo defer:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 4</title>
    <script defer src="script.js"></script>
</head>
<body>
</body>
</html>
```

3. Crea un archivo JavaScript llamado script.js y escribe el siguiente código:

```javascript
alert("Script en el head con defer");
```

4. Crea otro archivo HTML llamado index2.html.
5. Dentro del archivo, coloca un script justo antes del cierre del `<body>`:
6. Crea un archivo JavaScript llamado script2.js y escribe el siguiente código:

```javascript
alert("Script justo antes del cierre del body");
```

7. Enlaza el archivo JavaScript externo en el archivo index2.html:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 4</title>
</head>
<body>
    <script src="script2.js"></script>
</body>
</html>
```
