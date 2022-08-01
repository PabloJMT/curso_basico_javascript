// En esta clase aprendemos como utilizar otros métodos para
// recorrer arrays usando .find(), .forEach() y .some()


//Ejemplo usando el método ".find()"
var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 7000 }, 
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "libro", costo: 500},
    { nombre: "Teclado", costo: 500},
     { nombre: "Audifonos", costo: 1500},
    
    
];
undefined
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop" 
    
});
undefined
encuentraArticulo
{nombre: 'Laptop', costo: 20000}

//Su principal funcion es devolver el primer elemento del array que cumpla la
// condicion, pero solo el primer elemento.
//Retorna el primer elemento de un array que cumple con una condicion definida
//en un nuevo array



//Ejemplo usando el metodo ".forEach()"

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 7000 }, 
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "libro", costo: 500},
    { nombre: "Teclado", costo: 500},
     { nombre: "Audifonos", costo: 1500},
    
    
];

articulos.forEach(function(articulo){
    console.log(articulo.nombre);

});

Bici
Tv
Libro
Celular
Laptop
Teclado
Audifonos

// El metodo .forEach() llama a todo el argumento que el usuario especifique 
// En este caso, imprimio todos los nombres de los articulos

//Ejecuta la funcion indicada una vez por cada elemento del array


// Ejemplo del metodo .some()
var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 7000 }, 
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "libro", costo: 500},
    { nombre: "Teclado", costo: 500},
     { nombre: "Audifonos", costo: 1500},
    
    
];

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
    
});

undefined

true

//Este metodo tiene la funcion de devolver un dato booleano de acuerdo
// Si se cumple la comparacion. Solo compara existencia

// Retorna "true" o "false" si hay elementos en un array que cumplan
// con la condicion indicada



// PREGUNTA IMPORTANTE PARA ENTREVISTAS TECNICAS

// Cual es la diferencia entre .find() y filter()?
// Filter retorna todas las coincidencias y find retorna 
// solo la primer coincidencia 


