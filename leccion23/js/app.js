const personas = [
    new Persona("Juan","Perez"),
    new Persona("Ana","Martinez"),
    new Persona("Maria","Juarez")
];

function mostrarPersonas(){
    console.log("hello");
    let texto = "";
    for(let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById("personas").innerHTML = texto;
}

function agregarPersona(){
    const forma = document.forms["forma"];
    const nombre = forma["nombre"];
    const apellido = forma["apellido"];
    if(nombre.value != "" && apellido.value != ""){
        const persona = new Persona(nombre.value,apellido.value);
        personas.push(persona);
        mostrarPersonas();
    }else{
        console.log("No hay informacion que agregar!");
    }
}