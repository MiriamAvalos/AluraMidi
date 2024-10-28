/* 
function playSonidoPom(){
    document.querySelector('#sonido_tecla_pom').play();
}

para que no se ejecute el sonido se guarda solo una referencia a la función dentro del atributo onclick. La función se ejecutará solo cuando se haga clic en el botón.
document.querySelector('.tecla_pom').onclick = playSonidoPom; */

/*Empleamos el document.querySelectorAll() para seleccionar todos los elementos del selector deseado, reduciendo la cantidad de repeticiones de código, lo que, en consecuencia, promoverá una optimización en el código en lugar de la repetición.*/
const listaDeTeclas = document.querySelectorAll('.tecla')

function playSonidoPom(){
    document.querySelector('#sonido_tecla_pom').play();
}

let contador = 0;
/* usare un bucle while para recorrer mi lista */
while (contador < 9){
    listaDeTeclas[0].onclick = playSonidoPom;
contador = contador + 1;
console.log('vuelta' + contador);
}