//Crea una lista vacía llamada "listaGenerica".
let listaVacia = [];
//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion 
//con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'
let lenguajesDeProgramacion = ["JavaScript", "C","C++","Kotlin","Python"];
//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push("Java","Ruby","GoLang");
//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function elementos(){
console.log(lenguajesDeProgramacion);
}

elementos();

//Crea una función que muestre en la consola 
//todos los elementos de la lista lenguagesDeProgramacion por separado.

function mostrarLenguagesSeparadamente() {
    for (let i = 0; i < lenguajesDeProgramacion.length; i++) {
      console.log(lenguajesDeProgramacion[i]);
    }
  }
  
  mostrarLenguagesSeparadamente();

 // Crea una función que muestre en la consola todos los elementos 
 //de la lista "lenguagesDeProgramacion en orden inverso.

 function mostrarLenguagesReversoSeparadamente() {
    for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
      console.log(lenguajesDeProgramacion[i]);
    }
  }
  
  mostrarLenguagesReversoSeparadamente();

  //Crea una función que calcule el promedio de los elementos en una lista de números.

  function calcularMedia(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma / lista.length;
  }
  
  let numeros1 = [10, 20, 30, 40, 50];
  let media = calcularMedia(numeros1);
  console.log('Média:', media);


//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];
  
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > mayor) {
        mayor = lista[i];
      }
      if (lista[i] < menor) {
        menor = lista[i];
      }
    }
  
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
  }
  
  let numeros2 = [15, 8, 25, 5, 12];
  encontrarMayorMenor(numeros2);

  //Crea una función que devuelva la suma de todos los elementos en una lista.

  function calcularSuma(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma;
  }
  
  let numeros = [15, 8, 25, 5, 12];
  let suma = calcularSuma(numeros);
  console.log('Suma:', suma);


//Crea una función que devuelva la posición en la lista donde se encuentra 
//un elemento pasado como parámetro, o -1 si no existe en la lista.
function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }

  //Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
  //Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.