let persona1 = {
    nombre : "Juan",
    apellido : "Perez",
    nombreCompleto : function(titulo,tel){
        //return this.nombre + " " + this.apellido;
        return titulo + " : " + this.nombre + " " + this.apellido + " , " + tel;
    }
}

let persona2 = {
    nombre : "Carlos",
    apellido : "Lara"
}

console.log(persona1.nombreCompleto("Lic","5252525"));
let arreglo = ["Ing","0000000"];
console.log(persona1.nombreCompleto.apply(persona2,arreglo));
console.log(persona1.nombreCompleto.apply(persona2,["Doc","11111111"]));