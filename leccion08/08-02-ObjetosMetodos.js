let persona = {
	nombre:"Juan",
	apellido:"Gonzalez",
	email:"juan@gmail.com",
	edad:28,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona.nombreCompleto());