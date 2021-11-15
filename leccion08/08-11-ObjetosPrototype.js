function Persona(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

Persona.prototype.tel = "25252525";

let padre = new Persona("Juan","Lara","juan@gmail.com");
padre.tel = "10101010";
console.log(padre);

let madre = new Persona("Mario","Lara","maria@mail.com");
madre.tel = "0000000";
console.log(madre);