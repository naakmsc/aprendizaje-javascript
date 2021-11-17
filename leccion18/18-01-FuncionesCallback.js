// miFuncion1();
// miFuncion2();
function miFuncion1(){
    console.log("funcion 1");
}

function miFuncion2(){
    console.log("funcion 2");
}


//Funciones callback

let imp = function imprimir(sms){
    console.log(sms);
}

function sumar(op1,op2,funcionCallback){
    let res = op1 + op2;
    funcionCallback("resultado: "+res);
}

sumar(3,5,imp);