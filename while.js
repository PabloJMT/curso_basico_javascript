//LOOPS(ciclos) - WHILE 

//Ejemplo utilizando un array: 

var estudiantes = ["Maria", "Sergio","Rosa","Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
    
}
//Mientras lo que este incluido en el while sea verdad, se seguira realizando la tarea:
while(estudiantes.length > 0){
    var estudiante = estudiantes.shift(); //Usamos shift como metodo de mutacion
    saludarEstudiantes(estudiante);
}

//Para entender como se esta mutando el array con el Shift y con el ciclo:
var estudiantes = [ "Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
    
}
while(estudiantes.length > 0){
    console.log(); //Mandamos traer el array para notar como el ciclo irá sacando(descartando) cada 
                   // nombre, hasta que la longitud del array ya no será mayor a cero y se rompe 
                   // el While(ciclo):
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}

// Como resultado:
// Primer ciclo un array con 4 elementos:
// Array(4) ["Maria", "Sergio", "Rosa", "Daniel" ]
// Hola, Maria

// Segundo ciclo un array con 2 elementos:
// Array(3) ["Maria", "Sergio", "Rosa", "Daniel" ]
// Hola, Sergio

// Tercer ciclo un array con 2 elementos: 
// Array ["Rosa", "Daniel" ]
// Hola, Rosa

// Cuarto ciclo un array con 1 elemento
// Array [ "Daniel" ]
// Hola, Daniel

// No ocurre un quinto ciclo porque se rompe la condicion estudiantes deben ser > a 0

