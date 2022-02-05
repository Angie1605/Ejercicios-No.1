"use strict";
 function pares (num1, num2){ 
  let sumaPar=0;
  let sumaImpar=0;
  let numeroPares = 0;
  let numeroImpares = 0;
  while (num1 <= num2){
      if(num1 % 2 == 0){
          sumaPar += num1;
          numeroPares += 1;
      } else{
          sumaImpar += num1;
          numeroImpares += 1;

      }
    num1 = num1+1
  }

  console.log("la suma de los pares es:"+ sumaPar)
  console.log("El numero de pares es:"+ numeroPares)
  console.log("la suma de los impares es:"+ sumaImpar)
  console.log("El numero de impares es:"+ numeroImpares)
 }
 (pares(1,100))

 