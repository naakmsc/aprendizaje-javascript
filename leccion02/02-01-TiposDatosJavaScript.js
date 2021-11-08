/* Ejemplo 
de tipos de 
datos en Javascript*/

//Tipo de dato string o texto con numeros y simbolos
var nombre = "Nakk";
console.log(nombre);

nombre = 10;
console.log(typeof nombre);

//Tipo de dato numerico
var numero = 999;
console.log(numero);

//Tipo de dato object
var objeto = {
    nombre: "Naakmsc",
    apellido: "Apellido",
    telefono: "25252424"
};
console.log(typeof objeto);

//Bolean (true, false)

var bandera = false;
console.log(bandera);

// Tipo de dato function
function miFuncion(){

}
console.log(typeof miFuncion);

//Tipo de dato symbol
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

//Tipo clase es una function
class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);

//Tipo undefined
var x;
console.log(x);
x = undefined;
console.log( typeof x);
//null = ausencia de valor
var y = null;
console.log(typeof y);

var autos = ['bmw','audi','Volvo'];
console.log(autos);
console.log(typeof autos);

var z = "";
console.log(z);
console.log(typeof z);