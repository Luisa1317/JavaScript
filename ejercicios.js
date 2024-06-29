//ejercicio 1
for (let x=-100;x<=10;x++){
    document.write(x+" ");
}
document.write("<br>");
//ejercicio 2
for (let y=40;y>=10;y--){
    document.write(y+" ");
}
document.write("<br>");
//ejercicio 3
let form = document.querySelector("#form");

form.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    let nombre = document.querySelector("#nombre").value; 
    let email = document.querySelector("#email").value;
    if(nombre==="Luis" && email==="edithquitian29@gmail.com"){
        evento.target.submit();
    }else{
                alert("Inválido");
    }
})
//let $form = document.querySelector("#form");

// $form.onsubmit = (evento) => {
//     evento.preventDefault();
//     let nombre = document.querySelector("#nombre").value; 
//     let email = document.querySelector("#email").value;
//     // Evita que el formulario se envíe y la página se recargue
    
//     if(nombre==="Luis" && email==="edithquitian29@gmail.com"){
//         evento.target.submit();
//     }else{
//         alert("Inválido");
//     }
// };

//ejercicio 4: algoritmo que imprima los caracteres al revés de una palabra
function algoritmo (palabra){
    for (let i=palabra.length-1;i>=0;i--){
        let resultado=palabra[i];
        document.write(resultado);
    }
}

algoritmo("Hola q hace");
document.write("<br>");

//ejercicio 5: algoritmo para contar las veces que se repite un caracter en una palabra
function contarLetra(letra,palabra){
    let contador=0;
    for(let i=0;i<=palabra.length-1;i++){
        if(palabra[i]==letra){
            contador++;
        }
    }
    document.write(contador);
}

contarLetra("a","madrastra");
// function palabra(letra, palabra){
//     for (i of palabra){
//         let contador=0;
//         if(i==letra){
//             let resultado=contador+1;
//             document.write(resultado);
//         }
//     }
// }

// palabra("m","mama");

document.write("<br>");
//ejercicio 6: factorial de un número
function factorial(num){
    resultado=1;
    for (i=num;i>1;i--){
        resultado*=i
    }
    document.write(resultado+"<br>");
}

factorial(4);
//ejercicio 7: verificar si una palabra es palíndromo

function palindromo(palabra){
    palabraInvertida="";

    for (let i=palabra.length-1;i>=0;i--){
        palabraInvertida+=palabra[i];
    }

    if(palabraInvertida==palabra){
        document.write(palabraInvertida+ " es palíndromo");
    } else {
        document.write("zzz, no es palíndromo");
    }
    
}
palindromo("oowoo");
document.write("<br>");

//ejercicio 8: verificar si es número primo
function numPrimo(num){
    let contador=0;
    for (let i=num;i>0;i--){
        if (num%i==0){
            contador++;
        }
    }
    if (contador>2){
        document.write("no es primo");
    } else {
        document.write("sí es primo");
    }
}
numPrimo(12);
document.write("<br>");
//ejercicio 9: verificar si es un número perfecto
function numPerfecto(num){
    let suma=0;
    for(let i=num-1;i>=0;i--){
        if (num%i==0){
            suma+=i;
        }
    }
    if (suma==num){
        document.write(suma+ " es perfectooo");
    } else {
        document.write("very imperfecto...");
    }
    
}
numPerfecto(29);
document.write("<br>");
//ejercicio 10: imprimir los números de 1 al 100, si es múltiplo
//de 3="fizz", si es de 5="buzz" y si es 3-5="fizzbuzz"
for (i=100;i>=1;i--){
    if (i%3==0 && i%5==0){
        console.log(i + "Fizzbuzz");
    } else if (i%3==0){
        console.log(i+"Fizz");
    } else if (i%5==0){
        console.log(i+"Buzz");
    } else {
        console.log(i)
    }
}
//ejercicio 11: transformar a lenguaje encriptado
let lenguajeEncriptado={
    "a": '4', "b": 'I3', "c": '[', "d": ')', "e": '3', "f": '|=', "g": '&', "h": '#',
    "i": '1', "j": ',_|', "k": '>|', "l": '1', "m": '/\\/\\', "n": '^/', "o": '0',
    "p": '|*', "q": '(_,)', "r": 'I2', "s": '5', "t": '7', "u": '(_)', "v": '\\/',
    "w": '\\/\\/', "x": '><', "y": 'j', "z": '2', "1": 'L', "2": 'R', "3": 'E',
    "4": 'A', "5": 'S', "6": 'b', "7": 'T', "8": 'B', "9": 'g', "0": 'o',
    " ": " ", ".":"."
};

function lenguajeHacker(texto){
    let resultado="";
    for (let caracter of texto) {
        // Si el carácter está en el diccionario, reemplázalo, de lo contrario, déjalo como está
        resultado += lenguajeEncriptado[caracter] || caracter;
    }

    document.write(resultado);
}

lenguajeHacker("hola");