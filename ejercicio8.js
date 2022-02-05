"use strict";

function intervalo(numeroMenor,numeroMayor){

    let sumaNumeros = 0;
    while (numeroMenor<=numeroMayor){
        console.log(numeroMenor)
        sumaNumeros += numeroMenor;
        numeroMenor= numeroMenor+1;
    }
    console.log("La suma del intervalo es: "+sumaNumeros)
}
intervalo(-5,4)