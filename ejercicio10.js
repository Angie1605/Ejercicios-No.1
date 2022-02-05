"use strict";

function factorial (numero) {
	let total = 1; 
	for (let i=1; i<=numero; i++) {
        
		total = total * i; 
	}
    console.log(total)
	
}
factorial(5)