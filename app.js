console.log('Hola mundo');

let num=15;

let nombr;
nombr="Luisa";
//dos formas de declarar variable
//var,let,const

let variable=null;
//NaN:Not a Number, se tienen que multiplicar núms.

let num1 = 5;
let num2 = 7;
alert(num1*num2);

let como_estas=prompt("¿cómo estás we?");
//prompt es una función. una vez que le responde, el valor se guarda en como_estas

let numero=10;
numero+=5; // Incremento del valor de la variable
document.write(numero);
//operadores de asignación: x+=y significa x=+y

let numero1=10;
numero1--; // Decrementa numero1 en 1
let resultado=-numero1;
document.write(resultado);
//operadores aritméricos: ** significa exponente

let saludo="hola Pedro";
let pregunta=" ¿Cómo estás?"
let frase=saludo+pregunta;
document.write(frase);
//esto es concatenar strings

numero1=10;
numero2=9;
resultado=""+numero1+numero2;
document.write(resultado);
//esto es concatenar núms (haciendo todo string)

texto1="ok";
texto2="estoy " + texto1 + " todos los días";
document.write(texto2);
//esto es concatenar

texto1="ok";
texto2=`estoy ${texto1} todos los días`;
document.write(texto2);
//control+alt+cerrar llaves: para ` 

let array=["lucas",24,"mdm"];
//variable, pero en lugar de agrupar un dato agrupa muchos
document.write(array[1]+"<br>");

let array_asociativo={
    nombre:"lucas",
    edad:24,
    mdm:"mdm"
};
document.write(array_asociativo["nombre"]);
let nombre=array_asociativo["nombre"];
frase=`mi nombre es ${nombre}`;
document.write(frase);

do{
    document.write("<br>"+numero);
    numero++;
} 
while (numero<=20);

for(let i=0;i<20;i++){
    document.write(i+"<br>");
    if(i==12){
        break;
    }
}

let f=6;
for (f;f>=0;f--){
    document.write(f+"<br>");
}
document.write(f+"<br>");

for(let j=1;j<=7;j++){
    if(j==4){
        break;
    }
    document.write(j+"<br>");
}

for(let j=1;j<=7;j++){
    if(j==4){
        continue;
    }
    document.write(j+"<br>");
}

let animales=["loro","caballo","perro"];
for (let animal in animales){
    document.write(animal+"<br>");//document.write(animales[animal]+"<br>")
}
document.write("<br>");
for (let animal of animales){
    document.write(animal+"<br>");
}

array1=["María","Josefa","Roberta"];
array2=["Pedro","Marcelo",array1,"Josefina"];
for (let array in array2){
    if(array==2){
        for(let array of array1){
            continue
            document.write(array+"<br>");
        }
    }else{
        document.write(array2[array]+"<br>");
    }
}

forX:
for (let array in array2){
    if(array==2){
        for(let array of array1){
            document.write(array+"<br>");
            break forX;
        }
    }else{
        document.write(array2[array]+"<br>");
    }
}
//forX es un label

function saludar(){
    rta=document.write("holaaa");
}
saludar();
saludar(); //se puede ejecutar todas las veces que se quiera

function ejemplo() {
    return 42;
    console.log("Esto nunca se ejecutará");
}

document.write(ejemplo());  // Salida: 42, return muestra un valor y termina con la función

function crearPersona(nombre, edad) {
    return "hola "+nombre+ " tu edad es "+edad;
}

document.write(crearPersona("Ana", 30));
//parámetros: function nombre(nom1, nom2){}

// Declaración de una función anónima y asignación a una variable
let saluda = function(nombre) {
    return "Hola, " + nombre;
};

document.write(saluda("Juan"));  

let suma = (a, b) => { //si hay un solo parámetro puede no ponerse paréntesis, si no hay se deja ()
    document.write("<br>" + (a + b)); //si solo hay una instrucción, se pueden quitar las llaves y dejar en la línea de arriba
};

suma(2, 3);  // Salida: 5

let cantidad=prompt("¿Cuántos alumnos son?");
let alumnosTotales=["juan","pedro"];

//for (i=0;i<cantidad;i++){
//  alumnosTotales[i]=[prompt("Nombre del alumno "+(i+1)),0]
//}

//for (i=0;i<30;i++){
//    for (let alumno in alumnosTotales){
//        tomarAsistencia(alumnosTotales[alumno][0],alumno);
//   }
//} 

class producto{
    constructor(nombre,precio,stock) {
        this.nombre = nombre; //this.atributoSinImportarElNombre=nombre que es el mismo nombre de arriba
        this.precio = precio;
        this.stock = stock;
    }
    info(){ //método=acción
        document.write("HolaaaInfo<br>");
    }
}

class carro extends producto{
    constructor(nombre,precio,stock,algomas){
        super(nombre,precio,stock,algomas);
        this.algomas=algomas; 
    }
}

let computadora = new producto("Lenovo","200.000$", 30);
document.write(computadora);
computadora.info();

let cadena="cadena de prueba";
let cadena2=" cadena 2";

resultado=cadena.concat(cadena2);
rta1=cadena.startsWith(cadena2); //empezar con todas las letras. igual con endsWith
//.includes() que esté adentro sin importar el orden
//indexOf() igual que includes pero devuelve la posición de la primera letra
//lastIndexOf() devuelve la primera posición de la última palabra llamada igual
document.write(resultado);
document.write(rta1);
//.repeat(10)
//toLowerCase() minúsuclas y toUpperCase mayúsculas
//toString() convertir a string
//trim() elimina  espacios
//trimStart() y trimEnd() hacen lo mismo pero solo con el f o i
//.length

//métodos con arrays
let apellidos=["Rodriguez","López","Castro","Castillo"];
let result=apellidos.pop(); //elimina el último y lo muestra en pantalla
document.write("<br>"+result);
//shift() lo mismo pero con el primero
//push("algo","2") agrega elemento al final de la lista, devuelve la cantidad de elementos que ahora tiene el array
//reverse() invierte el orden del array
//unshift(0,1) agrega uno o más elementos al comienzo
//sort() organiza en orden ascendente de números o abecedario
//splice(1,3) empieza en la posición 1 y a partir de ahí elimina 3 elementos
//splice(1,3,"Roberto","Gustavo") y ese campo vacío que eliminó se puede reemplazar por otros elementos
//splice(1,0,"hola") para no eliminar nada y agregar un hola en la posición 1
//y se pone (-1,0,"hola") para agregar al final  
//join es toString pero permite poner texto en medio de cada array
//slice(0,3) mostrar del elemento 0 al 2 (excepto el 3)
apellidos.filter(function(apellido){
    document.write("<br>"+apellido)
})
//filter y forEach seleccionan un elemento del array, en una función, para mostrar solo uno
//el filter permite hacer una condición, es la única diferencia