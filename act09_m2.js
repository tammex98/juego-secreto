//Crear una función que muestre "¡Hola, mundo!" en la consola.

function saludo(){
console.log('Hola Mundo');
}

saludo();

//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

function saludoExclusivo(nombre){
    console.log("Hola," + nombre + "!");
    //  console.log(`¡Hola, ${nombre}!`);

}

saludoExclusivo("Juana");

//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function duplicar(numero){
    doble = numero * 2 ;
    console.log(doble);
}

duplicar(6);

/*function calcularDoble(numero) {
  return numero * 2;
}

let resultadoDoble = calcularDoble(5);
console.log(resultadoDoble);*/


//Crear una función que reciba tres números como parámetros y devuelva su promedio.

function numerosVarios(numero1,numero2,numero3){
suma = numero1 + numero2 + numero3;
promedio = suma/3;
console.log (promedio);
}

numerosVarios(5,5,5);

/*function calcularPromedio(a, b, c) {
  return (a + b + c) / 3;
}

let promedio = calcularPromedio(4, 7, 10);
console.log(promedio);*/

function mayor(numero1, numero2){
if(numero1>numero2){
    console.log(numero1);
}else{
    console.log(numero2);
}

}

mayor(10,30);

/*function encontrarMayor(a, b) {
  return a > b ? a : b;
}

let numeroMayor = encontrarMayor(15, 9);
console.log(numeroMayor);*/

//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function multiplicacion(numero){

    return numero* numero;
}

let resultado = multiplicacion(10);
console.log(resultado);

/*function cuadrado(numero) {
  return numero * numero;
}

let resultado = cuadrado(2);
console.log(resultado);*/