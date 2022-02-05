"use strict";
function compra(cantidadProductos, valorProducto){

    let totalCompra= cantidadProductos*valorProducto;
    let IVA = totalCompra * 0.19;
    let totalIva= IVA+totalCompra;

    console.log("El total de la compra sin iva es: "+totalCompra);
    console.log("El iva es: "+IVA);
    console.log("El total de la compra con iva es: "+totalIva);


}
compra(5,2000)