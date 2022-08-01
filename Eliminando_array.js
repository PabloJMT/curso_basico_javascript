//Eliminando elementos de un Array
// El método .push() nos permite agregar uno o mas elementos
// al final de un array 

let numArray = [1,2,3,4,5]

function newNum(){
    numArray.push(6,7)
    console.log(numArray)
    
}
undefined
newNum()
VM672:5 (7) [1, 2, 3, 4, 5, 6, 7]
undefined

//En este ejemplo se puede observar claramente que los numeros 6 y 7 
//se agregan 


//---------------------------------------------------------------------

//Otro ejemplo de push() pero ahora usando cadenas

let txtArray = ["Ana", "Juan", "Diego", "Lautaro"]

function addCharacters(){
    txtArray.push("Chris","Maria")
    console.log(txtArray)
}
undefined
addCharacters()
VM1041:5 (6) ['Ana', 'Juan', 'Diego', 'Lautaro', 'Chris', 'Maria']
undefined

//Como podemos ver, agregamos dos cadenas de strings al ejecutar la funcion donde
//tenemos txtArray.push(). Es decir, indico el array al que voy agregar elementos,
//uso el metodo .push() y dentro de .push() indico los elementos que quiero agregar
// al string.
//Finalmente, el console.log() lo uso para revisar en la consola si esto sucedio
// o no 

//-----------------------------------------------------------------------

//En esta clase aprenderemos el uso de shift() 
//Ahora pasemos a la otra cara de la moneda donde necesitaremos eliminar un 
// elemento del array .shift() eliminar el primer elemento de un array, es decir,
// elimina el elemento que este en el indice 0 


// Aqui el siguiente ejemplo

let array = [1,2,3,4,5]
console.log(array)

let shiftArray = array.shift()

console.log(array)
 (5) [1, 2, 3, 4, 5]
 (4) [2, 3, 4, 5]

// Como vemos, luego de aplicar .shift() se elimino exitosamente el primer elemento
// del array

//------------------------------------------------------------------------------------

// El ultimo metodo que veremos en esta clase sera el .pop()
// Este metodo eliminara el ultimo elemento de un array.
// En este sentido, si tenemos un array de 5 elementos, pop()
// eliminara el elemento en el indice 4
// Usemos el mismo ejemplo pero usando este metodo

let array = [1,2,3,4,5]
console.log(array)

let shiftArray = array.pop()

console.log(array)

 (5) [1, 2, 3, 4, 5]
 (4) [1, 2, 3, 4]

 
