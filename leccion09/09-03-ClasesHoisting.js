//Hoisting de clases, debemos crearla primero antes de mandarla a llamar.
// let personita = new Persona('Maria','Lara');
// console.log(personita.nombre);

class Persona{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(e){
        this._nombre = e;
    }
}
//Debemos mandar a llamarla luego de haberla creado
let persona = new Persona('Carlos','Perez');
console.log(persona.nombre);