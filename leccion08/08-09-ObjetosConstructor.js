//Funcion constructor de objetos de tipo Persona
function Persona(nombre = "Juan",apellido = "Lara",email = "correo@gmail.com"){
    this.nombre = nombre;
    this.apellido = apellido; 
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

let padre = new Persona();
console.log(padre.nombreCompleto());

padre.nombre = "Carlos";

let madre = new Persona("Maria","Lara","maria@mail.com");
console.log(madre.nombreCompleto());