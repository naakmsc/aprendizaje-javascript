function miFuncion(a,b){
    console.log(arguments.length);
    return a + b;
}

var miTextito = miFuncion.toString();
console.log(miTextito);