function persona (nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let padre = new persona("Juan","Lara","juan@mail.com");
console.log(padre);

let miObjeto = new Object();
let miObjeto2 = {};

let miCadena = new String("Hola");
let miCadena = "Hola";

let miNumero = new Number(1);
let miNumero = 1;

let miBool = new Boolean();
let miBool = false;

let miArreglo1 = new Array();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion2 = function(){};