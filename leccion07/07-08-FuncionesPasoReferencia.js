const persona = {
    nombre: "Naak",
    apellido: "msc"
}

function cambiarValorObjeto(p1){
    p1.nombre = "Jorge";
    p1.apellido  = "Gonzalez";
}

//Paso por Referencia
cambiarValorObjeto(persona);
console.log(persona);