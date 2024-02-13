
function holaMundo(){
    console.log ('Hola Mundo');
    }
    holaMundo();


    

    var nombre =  'Pedro';
function holaMundo2() {
    console.log( 'Hola ' + nombre);

}
holaMundo2(nombre);



   function Doblenumero(numero) {
    return numero * 2;
    
    }
    let recibirNumero = parseInt(prompt('Dame un Numero y te lo devolvere al doble :) '));
    let resultado = Doblenumero(recibirNumero);
       console.log (`el doble de ${recibirNumero} es ${resultado}`);
       
       function calcularPromedio(numero1,numero2, numero3) {
        return (numero1 + numero2 + numero3 / 3);
    }
    var numero1 = parseFloat(prompt('Ingrese un valor')),
    numero2 = parseFloat(prompt('Ingrese un segundo valor')),
    numero3 = parseFloat(prompt('Ingrese un  tercer y ultimo valor'));
    let promedio = calcularPromedio (numero1, numero2, numero3);
    
    alert(`El promedio de ${numero1}, ${numero2} y ${numero3} es : ${promedio} `);


    
function mayorQue(opcionA, opcionB){
    if(  opcionA > opcionB  ){
        alert (`${opcionA} es el numero mayor`);
    
    }else if (opcionA < opcionB ){
        alert (`${opcionB} es el numero mayor`);
    }
    else{
        alert('los numeros son iguales');
    }
    }
    
    var opcionA = parseInt(prompt("Dame un numero")),
    opcionB = parseInt(prompt('Dame otro numero'));
    res = mayorQue(opcionA, opcionB);

    function porSiMismo() {
        return dameUnValor * dameUnValor 
        
        }
        
        
        let  dameUnValor = parseInt(prompt("Dame un numero"));
        let resul = porSiMismo (dameUnValor);
        alert(`el numero es ${resul}`);
        
        