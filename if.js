var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(usuario,cpu){
    if(usuario != cpu){
        if(usuario === op1 && cpu === op3){

            console.log("el usuario gano con "+ op1)}
        else if(usuario === op2 && cpu === op1){

            console.log("el usuario gano con " + op2)}
        else if(usuario === op3 && cpu === op2){


            console.log("el usuario gano con " + op3)}
        else{

            console.log("La cpu gano")
        }

        } else if(usuario === cpu){
            console.log("Empate")
        }

        };

        resultado(op1,op3)







        

    
