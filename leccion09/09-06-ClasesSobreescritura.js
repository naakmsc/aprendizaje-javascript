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
    //Metodo
    nombreCompleto(){
        return this._nombre + " " + this._apellido;
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

    //Concepto de sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ", " + this._depto;
    }
}

let empleado = new Empleado('Maria','Lara','Sistemas');
console.log(empleado);
console.log(empleado.nombreCompleto());