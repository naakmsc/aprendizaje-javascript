let persona = {
    nombre: "Juan",
    edad: "18"
}

//Agregar propiedades
persona.apellido = "Lara";
console.log(persona);

//Modificar propiedades
persona.apellido = "Vasquez";

//Borrar propiedades
delete persona.edad;
console.log(persona);