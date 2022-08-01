//Cuando hablamos de funciones de Javascript, tenemos dos tipos de funciones:
// * Funciones Declarativas(function statement)
// * Expresiones de funcion (function expression)

//------------------------------------------------------------------------------

//Funciones Declarativas

//En las funciones declarativas, utilizamos la palabra reservada function 
//al inicio para poder declarar la funcion: 

function saludar(nombre){
    console.log(`Hola ${nombre}`);

}

saludar('Diego');


//----------------------------------------------------------------------------

//Expresion de funcion

//En la expresion de funcion, la declaracion se inicia con la palabra reservada
// "var", donde se genera una variable que guardara una funcion anonima 

var nombre = function(nombre){
    console.log(`Hola ${nombre}`)

}

nombre('Diego');

//En la expresion de funcion, la funcion podria o no llevar nombre, aunque es mas comun
// que se hagan anonimas

//------------------------------------------------------------------------------

// Diferencias

// A las funciones declarativas se les aplica hoisting, y a la expresion de funcion, no.
// Ya que el hoisting solo se aplica en las palabras reservadas var y function

// Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la funcion
// antes de que esta sea declarada, y con la expresion de funcion, no, tendriamos que 
// declararla primero, y despues mandarla llamar

//-------------------------------------------------------------------------------------------

//Cuando se refiere a que el hoisting afecta a una y a la otra no: 
    // 1. si intentamos usar primero una funcion declarativa antes de ser declarada:

    saludar('Diego');
    function saludar(nombre){
        console.log(`Hola ${nombre}`);
    }

    Hola diego
    undefined

    // 2. Si intentamos usar primero una expresion de funcion antes de ser declarada

    nombre('Diego');

    var nombre = function(nombre){
        console.log(`Hola ${nombre}`)
    }

    Uncaught TypeError: nombre is not a function
    <anonymous> debugger eval code: 1
    

