"use strict";
function numeroCifras(numero){
 let numCifras = 1; 
 
 while( numero >=20) {
     numero = numero/10;
     numCifras +=1;


 }
 console.log("el numero de cifras es: "+numCifras)
}
numeroCifras(45389)