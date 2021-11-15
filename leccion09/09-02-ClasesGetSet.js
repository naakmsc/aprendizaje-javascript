class Persona{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(data){
        this._nombre = data;
    }

}

let persona1 = new Persona('Juan','Perez');
persona1.nombre = 'Carlos'; //Set
console.log(persona1.nombre); //Get