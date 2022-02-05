"use strict";
function segundos(seg){
  
    let minutos = seg/60;
    let segRestantes =60-(minutos%60);
    console.log("Los minutos son: "+minutos);
    console.log("Los segundos que restan para convertirse en un minuto son: "+segRestantes)

}
segundos(40)