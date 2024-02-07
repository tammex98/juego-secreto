/*let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';*/
let numeroSecreto = 0;
let intentos = 0;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto ;
    return;
}
 

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    /*console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario === numeroSecreto);
    console.log(numeroSecreto)*/

    //console.log(intentos);
    if(numeroSecreto === numeroDeUsuario){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acerto
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }

        intentos++;
        limpiarCaja();
     
    }



    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}


function generarNumeroSecreto() {
let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

console.log(numeroGenerado);
console.log(listaDeNumerosSorteados);

//Si ya sorteamos todos los numero podemos mostrar un mensaje en pantalla y cerrar el juego 
if(listaDeNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');

}else{



//RECURSIVIDAD
//Si el numero generado esta incluido en la lista hacemos una operacion, si no, hacemos otra
    if(listaDeNumerosSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto();

        }else{
            listaDeNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    } 
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja 

    limpiarCaja();
    //Indicar mensaje de intervalo de numeros 
    //generar el numero aleatorio
    //Inicializar el numero de intentos 
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled','true');


}

condicionesIniciales();

