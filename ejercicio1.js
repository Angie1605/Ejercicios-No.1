"use strict";

function primo(/**parametros */ num1){
        
        for (let i = 2; i <= num1/2 ; i++) { // se divide entre 2  porque es el primer numero divisible 
            if (num1 % i == 0) 
            return "NO ES PRIMO";
        }
        
        return "ES PRIMO";
    }
    
console.log(primo(3))
    
    
