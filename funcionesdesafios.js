function calcularMasa() {


    resultado = PesoKg / Altura * Altura;


}

let Altura = parseInt(prompt('Dame tu estatura ')),
    PesoKg = parseInt(prompt('Dame tu peso corporal'));

let imc = calcularMasa(Altura, PesoKg);
console.log(`tu inidice de Mas corpolar es ${imc}`);






function calcularFacorial(numero) {

    if (numeroFactorial === 0 || numeroFactorial === 1) {
        return 1;
    } else {
        let res = 1;
        for (let i = 2; i <= numeroFactorial; i++) {
            res *= i;
        }
    }
    return res;
}

let numeroFactorial = parseInt(prompt('Dame en numero')),
    resultadoFinal = numeroFactorial;
console.log(`El numero factorial de ${numeroFactorial} es ${resultadoFinal}`);



let vDollar = 59.1;
let cDollar = 5;
let resultadoConversion = convertirDolares(vDollar);

function convertirDolares(vDollar) {
    return (vDollar * cDollar);
}
console.log(`la conversion de ${cDollar} dollar a peso son ${resultadoConversion}`);



let ancho = 12,
    altura = 21;

function AlturayAncho(ancho, altura) {

        let area = ancho * altura;

        let peri = ancho + altura;

       console.log (`el area es ${area} metros`);
       console.log (`el perimetro es ${peri} metros`);
}

AlturayAncho(ancho, altura);

function calcularAreaPerimetro(radio) {
    const pi = 3.14;
    let area = pi * radio * radio;
    let perimetro = 2 * pi * radio;

    console.log(`El área de la sala circular es: ${area}`);
    console.log(`El perímetro de la sala circular es: ${perimetro}`);
}

// Ejemplo de uso
calcularAreaPerimetro(5); // Pasamos el radio como parámetro


let numero = 2;

function tablaDeMultiplicar(numero) {
    for(let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} X ${i} = ${resultado}`)
    }
}

tablaDeMultiplicar(numero);