'use strict'

let resultado = -5;

try{
    if (isNaN(resultado)) throw 'No es un numero';
    else if (resultado === '') throw 'Es cadena vacia';
    else if (resultado >= 0) throw 'valor positivo';
    else if (resultado < 0) throw 'valor negativo';
    // x = ;
}
catch(e){
    console.log(e);
    // console.log(e.name);
    // console.log(e.message);
}
finally{
    console.log("termina revision de errores");
}