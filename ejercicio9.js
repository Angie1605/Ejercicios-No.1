"use strict";

function ulam(numero){
  let count = 0;
  while(numero > 1){
    if(numero%2==0){
    console.log(numero)
      numero = numero/2;
    } else{
        console.log(numero)
      numero = (numero*3)+1; 
    }
    count +=1
  }
  console.log(numero)
 
}
ulam(5)