class Persona{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(e){
        this._nombre = e;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(e){
        this._apellido = e;
    }
}

class Empleado extends Persona{
    constructor(nombre,apellido,depto){
        super(nombre,apellido); //Llamando al constructor de Persona
        this._depto = depto;
    }
    get depto(){
        return this._depto;
    }
    set depto(e){
        this._depto = e;
    }
}

let persona1 = new Persona('Maria','Lara');
console.log(persona1);

let empleado1 = new Empleado('Luci','Lara','Sistemas');
console.log(empleado1);
console.log(empleado1.nombre);