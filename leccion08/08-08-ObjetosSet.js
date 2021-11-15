let persona = {
    nombre : "Juan",
    apellido : "Lara",
    edad : 25,
    idioma : "es",
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona.lang);
persona.lang = "en";
console.log(persona.idioma);