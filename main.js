/* 
function playSonidoPom(){
    document.querySelector('#sonido_tecla_pom').play();
}

para que no se ejecute el sonido se guarda solo una referencia a la función dentro del atributo onclick. La función se ejecutará solo cuando se haga clic en el botón.
document.querySelector('.tecla_pom').onclick = playSonidoPom; */

/*Empleamos el document.querySelectorAll() para seleccionar todos los elementos del selector deseado, reduciendo la cantidad de repeticiones de código, lo que, en consecuencia, promoverá una optimización en el código en lugar de la repetición.*/
const listaDeTeclas = document.querySelectorAll(".tecla");
console.log("esta es la lista", listaDeTeclas);

function playSonido(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  console.log(instrumento);
  //template strings para crear textos dinámicos que incluyan variables, concatenamos palabra y el instrumento
  const idAudio = `#sonido_${instrumento}`;
  console.log(idAudio);
  /*funcion anonima para que el sonido solo se reproduzca cuando se hace click y no en automatico al cargar la pagina*/
  tecla.onclick = function () {
    playSonido(idAudio);
  };
}
