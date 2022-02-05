"use strict";
function numeroDia(dias){
    let annos = dias/365;

    let meses = annos/12 

    let semanas = dias/7 

    console.log("El número de días es "+dias+" que equivale a "+annos+" años, "+meses+"meses, y a "+semanas+" semanas");
}
numeroDia(40)