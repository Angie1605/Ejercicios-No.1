"use strict";

function fibonacci(num1,num3){
    let num2=num1+1; 
    let result;
    for(let i = 0; i < num3; i++){
         console.log(num1);
         result= num1+ num2;
         num1 = num2;
         num2 = result;
    }
  


}
(fibonacci(20,10))