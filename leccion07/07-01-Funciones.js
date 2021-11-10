miFuncion(3,2);

//Declaracion
function miFuncion(a,b){
    console.log("Suma: "+(a+b));
}
//Llamar
miFuncion(5,6);


//Funciones con Return
function sumar(a,b){
    return a + b;
}

let resultado = sumar(5,4);
console.log(resultado);

//Funciones de tipo expresion
//Declaracion
let x = function(a,b){return a + b};

resultado = x(1,2);
console.log(resultado);