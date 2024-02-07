//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su 
//altura en metros y peso en kilogramos, que se recibirán como parámetros.
function IMC(peso,altura){
//IMc peso/altura al cuadrado 

return peso/(altura*altura);

}

calculoImc = IMC(50,1.50);
console.log(calculoImc);

function calcularIMC(peso,altura){
    //IMc peso/altura al cuadrado 
   imc = peso/(altura*altura);
    return (imc)
    
    }

    calcularIMC(50,1.50);
    console.log(imc);

    //Crea una función que calcule el valor del factorial de un número pasado como parámetro.

    function calcularFactorial(numero) {
        if (numero === 0 || numero === 1) {
          return 1;
        } else {
          return numero * calcularFactorial(numero - 1);
        }
      }
      // Ejemplo de uso
      let numero = 2;
      let resultado = calcularFactorial(numero);
      console.log(`El factorial de ${numero} es ${resultado}`);


      //Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales
      //(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

      function conversion(moneda){
        //1 dolar =R$4,80
            let real = 4.80;
            return moneda * real;
    
      }

      let cambioMoneda = conversion(5);
      console.log(cambioMoneda);

//Entrenador 
      function convertirDolaresAReales(dolares) {
        var cotizacionDolar = 4.80;
        var reales = dolares * cotizacionDolar;
        return reales;
      }
      // Ejemplo de uso
      let valorEnDolar = 5;
      let valorEnReales = convertirDolaresAReales(valorEnDolar);
      console.log(`${valorEnDolar} dólares  es R$ ${valorEnReales}`);

      //Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular,
      // utilizando la altura y la anchura que se proporcionarán como parámetros.

      function area (base,altura){
        multiplicacion =  base*altura;
        calculo = multiplicacion/2;
      }

      let calculoArea = area(60,2);
      console.log(calculo);
//instructor
      function calcularAreaYPerimetroRectangular(altura, anchura) {
        var area = altura * anchura/2;
        var perimetro = 2 * (altura + anchura);
        console.log("Área: " + area);
        console.log("Perímetro: " + perimetro);
      }
      // Ejemplo de uso
      let altura = 60; // en metros
      let anchura = 2; // en metros
      calcularAreaYPerimetroRectangular(altura, anchura);

      //Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
      //utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

      function areaCirculo(radio){
        pi = 3.14;
       let area = pi * (radio*radio);
       let perimetro = 2* pi * radio;
       console.log("Area_Circulo:" + area);
       console.log("Perimetro_Circulo:" + perimetro);
      }

      areaCirculo(10);
      //Entrenador 

      function calcularAreaYPerimetroCircular(radio) {
        var pi = 3.14;
        var area = pi * radio * radio;
        var perimetro = 2 * pi * radio;
        console.log("Área: " + area);
        console.log("Perímetro: " + perimetro);
      }
      // Ejemplo de uso
      let radio = 10; // en metros
      calcularAreaYPerimetroCircular(radio);

      //Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
    
      function mostrarTablaDeMultiplicar(numero2) {
        for (var i = 1; i <= 10; i++) {
          var resultado = numero2 * i;
          console.log(numero2 + " x " + i + " = " + resultado);
        }
      }
      // Ejemplo de uso
      let numero2 = 7;
      mostrarTablaDeMultiplicar(numero2);