let persona = {
    nombre: "Juan",
    apellido: "Lara",
    edad: 25
}

//Imprimir por consola
console.log(persona.nombre);

//Imprimir por for
for(fila in persona){
    console.log(persona[fila]);
}

//Imprimir por arreglo
let personaArray = Object.values(persona);
console.log(personaArray[0]);

//Imprimir por cadena
let personaString = JSON.stringify(persona);
console.log(personaString);