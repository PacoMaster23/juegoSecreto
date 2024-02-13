let listaGenerica = [];

 let lenguajesDeProgrmacion = ['JS','C','C++','Kotlin','Python'];

lenguajesDeProgrmacion.push ('Java','Ruby','GoLang');


function mostrarLenguajes (lenguajes){
    console.log("Lista de Lenguajes");
    lenguajes.forEach(function(lenguaje) {
        console.log(lenguaje);
});
}

let lenguajesDeProgramacion = ["JavaScript", "Python", "Java", "C++", "Ruby"];
mostrarLenguajes(lenguajesDeProgramacion);

function mostrarLenguajesEnOrdenInverso(lenguajes) {
    console.log("Lista de lenguajes de programación en orden inverso:");
    lenguajes.reverse().forEach(function(lenguaje) {
        console.log(lenguaje);
    });
}

// Ejemplo de uso
let lenguajesDeProgramacionInverso = ["JavaScript", "Python", "Java", "C++", "Ruby"];
mostrarLenguajesEnOrdenInverso(lenguajesDeProgramacionInverso);




function promedioArray (listaNumeros){
    let i =0, suma = 0, listaNumLen = listaNumeros.length;
    while (i < listaNumLen){
        suma = suma + listaNumLen[i++];

    }
    return suma / listaNumLen;
}

 let listaNumeros = ['1','4','6','3','8'];
let a = promedioArray (listaNumeros);
console.log(a);


function encontrarExtremos(lista) {
    let numeroMasPequeno = lista[0];
    let numeroMasGrande = lista[0];

    lista.forEach(function(numero) {
        if (numero < numeroMasPequeno) {
            numeroMasPequeno = numero;
        }
        if (numero > numeroMasGrande) {
            numeroMasGrande = numero;
        }
    });

    console.log(`El número más pequeño en la lista es: ${numeroMasPequeno}`);
    console.log(`El número más grande en la lista es: ${numeroMasGrande}`);
}

// Ejemplo de uso
let listaNumeros2 = [10, 5, 30, 8, 15];
encontrarExtremos(listaNumeros);
