"use strict";

function sucesion(numero,numeroFinal){
    let a = 1;
    while(numero <= numeroFinal){
        console.log(numero);
        a += 1; 
        numero = a*a;

    }
    


}
(sucesion(1,50))