
// Ejemplo usando el método ".filter"

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
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});
undefined
articulosFiltrados
(2) [{…}, {…}]0: {nombre: 'libro', costo: 500}1: {nombre: 'Teclado', costo: 500}length: 2[[Prototype]]: Array(0)

// .filter: nos permite filtrar solo los elementos que deseamos
// (según ciertos criterios) y devolverlos en un nuevo array.

// Crea un nuevo array con los elementos del array que se paso 
//como parametro y con la condicion definida




// Ejemplo usando el método ".map"


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

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre

});

nombreArticulos

(7) ['Bici', 'Tv', 'Celular', 'Laptop', 'libro', 'Teclado', 'Audifonos']


// ".map": crea un nuevo array con los resultados de la llamada a la 
// funcion indicada aplicadas a cada uno de sus elementos

// En el ejemplo pasado, muestra el array con el nombre de los 
// articulos 


// PREGUNTA IMPORTANTE PARA ENTREVISTAS TECNICAS

// Cual es la diferencia entre .find() y filter()?
// Filter retorna todas las coincidencias y find retorna 
// solo la primer coincidencia 

//Crea un nuevo array con los resultados de la llamada a la funcion indicada aplicados
//a cada uno de sus elementos 