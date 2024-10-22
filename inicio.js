console.log("Hello, World");
// control+k+c para comentar y control+k+u

// este es un comentario de una línea

/*
varias 
líneas
*/

/* Dato: se puede usar css en console.log, hay que poner %c siempre,
luego una coma y " " para el código css*/
console.log("%cHello, World", "color: blue; font-size: 40px");

// Concatenar (+)
console.log("Hello " + "there, " + "World");
// Concatenar (,)
console.log("Hello", "there,", "World");
// Concatenar (+=)
var longString = "";
longString += "Once upon a";
longString += " time...";
console.log(longString);
// Se puede concatenar un num y un string. El resultado será un string
console.log(365 + " days");

// Operadores aritméticos:
// Suma, resta, multiplicación y división
// Exponenciación: ** | 10**2 = 100
// Módulo: % | devuelve el resto de cuántas veces cabe 8 en 9. 9%8 = 1
// 16%8 = 0
// Incremento: ++ | solo se puede poner con variables
// Decremento: -- | solo se puede poner con variables

// Operadores de comparación: retornan un valor true o false
// Mayor que, menor que, mayor o igual que, menor o igual que
// Igualdad: ==
// Desigualdad: !=
// Igualdad estricta: ===
// Desigualdad estricta: !==

// Operadores lógicos: retornan un valor true o false
// AND: &&
// OR: ||
// NOT: !

// Operadores de asignación:
// =
// De suma: +=
// a += b / a = a + b
// De resta, de multiplicación, de división, de resto, de exponenciación

// En console.log se puede: poner varios tipos de datos como
// strings, números, decimales, booleanos, null y undefined
console.log("Hola " + -3 + 2.7 + " " + false + null + undefined);
// también variables, funciones y arrays
let miArray = [1, 2, 3, 4, 5];
console.log(miArray);
// y operadores aritméticos, de comparación, lógicos y de asignación
var num = 2.2;
console.log(3 - 2 - num);
console.log(15 % 4);
console.log(++num);
console.log(3 != 2); // retorna true o false, un valor booleano
console.log(true && false);
console.log(5 < 3 || 10 > 20);
console.log(!(2 > 3));
console.log((num += 3));
let y; // de asignación
console.log(y = 10);
console.log(y += 3);
console.log( w = 83) // de asignación sin haber declarado antes la variable

// Reasignar valor a la variable (si fue creada con var)
person = "Lucas";
console.log(person);

var result = 40;
// if (result > 40) {
//     console.log("Congratulations");
// } else if (result == 40) {
//     console.log("You barely passed");
// } else {
//     console.log("You didn't pass");
// }

switch (result) {
    case 20:
        console.log("El resultado es 20");
        break;
    case 40:
        console.log("El resultado es 40");
        break;
    default:
        console.log("No sé");
}

//Bucles: Bucle for se declara el valor | condición | acción
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
//Bucle while
num = 1;
while (num <= 3) {
    console.log(num);
    num++;
}

//Bucles anidados
for (var i = 1; i <= 2; i++) {
    for (var j = 1; j <= 5; j++) {
        console.log("Week " + i + " day " + j);
    }
}

for (var i = 40; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}

//iterar sobre un variable
var cubes = "ABC";

for (var i = 0; i < cubes.length; i++) {
    var styles =
        "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles);
}

//arrays (es considerado un tipo de objeto en js) o matriz
var train = ["wheat", "salt", "potato"];
console.log(train[0]);

//funciones con y sin parámetros
function listArrayItems(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

var colors = ["red", "orange", "yellow"];
listArrayItems(colors);

// objetos: partes = propiedades y métodos (funciones dentro de los objetos)
// para crear objetos NO es necesario instanciarlos de una clase
var storeManager = {};
storeManager.socialSkills = 50; //propiedad
storeManager.health = 30;

console.log(storeManager);

var assistantManager = {
    movement: 3,
    socialSkills: 30,
    health: 20,
};
console.log(assistantManager.movement);

// ejemplo con método: un método es también una propiedad pero especial
var car = {};
car.mileage = 98765;
car.color = "red";
car.turnTheKey = function () {
    // método
    console.log("The engine is running");
};
console.log(car);

// añadir nueva propiedad al objeto
storeManager["nextAchievement"] = "Open a new store";
// actualizar propiedad
storeManager.health = 100;

// .push para arrays
var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push("pear"); // ['apple', 'pear']
fruits.pop(); // elimina el último elemento del array
console.log(fruits); // ['apple']

//objeto Math
console.log(Math.PI); //propiedad
console.log(Math.abs(-7)); //método

// los arrays y los Strings son iterables, es decir que se pueden recorrer sus valores
// individualmente

// propiedades y métodos
var greet = "Hello";
greet.length; // 5, para que se imprima hay que poner console.log
greet.charAt(0); // 'H'
"Wo".concat("rl").concat("d"); // 'World'
"ho-ho-ho".indexOf("h"); // 0
"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']
greet.toUpperCase(); // "HELLO"

// try and catch: sirve para detectar errores, a excepción de sintax errores
try {
    console.log(a + b);
} catch (nombreQueYoQuiera) {
    //la variable es para capturar el error
    console.log("Voy a imprimir un error, no te preocupes");
    console.log(nombreQueYoQuiera);
}
console.log("Ves que no había que preocuparse?");

try {
    throw new ReferenceError(); // también está throw, para lanzar un error
} catch (error) {
    console.log(error);
}
console.log("tranquilo weee, tampoco pasó nada como en la anterior vez");

// Estos son algunos de los errores más comunes en JavaScript:
// ReferenceError: cuando se intenta usar variables que no han sido declaradas en ninguna parte.
// SyntaxError: cualquier tipo de código JavaScript no válido como que falte un ; o un =.
// TypeError: cuando se intenta ejecutar un método en un tipo de datos no compatible. "hello".pop()
// RangeError: cuando proporcionamos un valor a una función, pero ese valor está fuera del rango permitido
// de los valores de entrada aceptables. (10).toString(100); pq se traduce 10 a la base 100 (no existe en js)

// match method
var letters = "abc";
var resultado = letters.match(/a/);
console.log(resultado);

// Undefined
// var food;
// console.log(food);

try {
    console.log("Hello");
} catch (err) {
    console.log("Goodbye"); // como no hay error no va a esta línea
}

// throw new Error();
// console.log("Hello"); no se va a imprimir, porque el error detiene la ejecución del código
/*try {
    console.log('hello)
    } catch(e) {
    console.log('caught')
    } */  //esto tira error y se acaba el programa, ya que los sintax error no se pueden manejar con try catch
    

// recursividad: cuando una función se llama a sí misma. es una alternativa a los blucles
let counter = 3;
function example() {
    console.log(counter);
    counter -= 1;
    if (counter == 0) return; // aquí no se ejecuta más example()
    example();
}
example();

// return se usa para salir de una función o bloque y, opcionalmente, devuelves un valor.
// break se usa para salir de un bucle, NO función, pero no afecta a una función completa.

// global scope: el código fuera de la función es global
// local scope: el código dentro de la función es local

// El paradigma de la programación funcional: usamos muchas funciones y variables. Cuando 
// escribimos un código FP, mantenemos los datos y la funcionalidad por separado y pasamos 
// los datos a las funciones solo cuando queremos que algo se calcule.
/*
function getTotal(a,b) {
    return a + b
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);
*/