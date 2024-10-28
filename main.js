
function playSonidoPom(){
    document.querySelector('#sonido_tecla_pom').play();
}

/*para que no se ejecute el sonido se guarda solo una referencia a la función dentro del atributo onclick. La función se ejecutará solo cuando se haga clic en el botón.*/
document.querySelector('.tecla_pom').onclick = playSonidoPom;