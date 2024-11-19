


var nIntentos = 5;
var numeroAleatorio = Math.random()

var numeroAleatorioEntero = Math.floor(numeroAleatorio * 10) + 1;

console.log(numeroAleatorio);
console.log(numeroAleatorioEntero);

function pintarIntentosYNumeroAleatorio () {
    var elementoConNumeroDeIntentos = document.getElementById('intentos');
    elementoConNumeroDeIntentos.innerHTML = nIntentos;

    var ElementoAleatorio = document.getElementById('aleatorio');
    ElementoAleatorio.innerHTML = numeroAleatorioEntero;
}


function adivinar () {
    var numeroIntroducido = document.getElementById('numero').value;

    if (numeroIntroducido == numeroAleatorioEntero) {
        alert('Has acertado');
    } else {
        nIntentos--;
        if (nIntentos == 0) {
            alert('Has perdido');
        } else {
            alert('Te quedan ' + nIntentos + ' intentos');
        }
    }

    pintarIntentosYNumeroAleatorio();
}

pintarIntentosYNumeroAleatorio();
