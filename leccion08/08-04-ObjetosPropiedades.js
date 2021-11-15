let persona = new Object({
    edad : 15
});
persona.nombre = "Juan";
persona.direccion = "El Salvador";
persona.tel = "25253535";

//Propiedad

console.log(persona["nombre"]);

//Recorrer propiedades en for

for( propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}