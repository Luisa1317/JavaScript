console.log(4); // debería imprimir cuatro y luego tirar undefined

/* En programación funcional estos son los principales conceptos

Funciones de primera clase: una función en JavaScript es solo un valor; desde este punto 
de vista, casi no es diferente de una cadena o un número. 

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}

var useRandom = true;
var getNumber;

if(useRandom) {
    getNumber = randomNum
}

Función de orden superior:  tiene una o ambas de las siguientes: Acepta otras funciones como 
argumentos, Devuelve funciones cuando se invoca.
function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}

addTwoNums(specificNum, randomNum); // returned number is 42 + some random number

Funciones puras y efectos secundarios: devuelve exactamente el mismo resultado siempre que 
se le den los mismos valores.
function addTwoNums(a, b) {
    console.log(a + b)
}

no debe tener efectos secundarios: cualquier instancia en la que una función realiza un 
cambio fuera de sí misma. por ejemplo: llamar a Math.random(), llamar a una API y cambiar 
los valores de las variables fuera de la función misma
*/
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2));

let hola = [0,10,20,30,40,50].map( function(num) {
    return num / 10
})
console.log(hola)

