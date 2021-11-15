let persona = {
    nombre: "Juan",
    apellido: "Lara",
    edad: 25,
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona.nombreCompleto);
