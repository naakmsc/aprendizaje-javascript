class Empleado{
    constructor(nombre,sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(e){
        this._nombre = e;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(e){
        this._sueldo = e;
    }
    obtenerDetalle(){
        return `Empleado: nombre: ${this.nombre}, sueldo: $${this.sueldo}`;
    }
}


class Gerente extends Empleado{
    constructor(nombre,sueldo,depto){
        super(nombre,sueldo);
        this._depto = depto;
    }
    get depto(){
        return this._depto;
    }
    set depto(e){
        this._depto = e;
    }
    obtenerDetalle(){
        return `Gerente: ${super.obtenerDetalle()}, Depto: ${this.depto}`;
    }
}

function determinarTipo(tipo){
    // console.log(tipo.obtenerDetalle());
    if(tipo instanceof Gerente){
        console.log("tipo de Gerente");
        console.log(tipo.depto);
    }
    else if(tipo instanceof Empleado){
        console.log("tipo de Empleado");
        console.log(tipo.depto);
    }
    else if(tipo instanceof Object){
        console.log("tipo de Object");
    }
}

let gerente1 = new Gerente("Juan",500,"sistemas");
let empleado1 = new Empleado("Carlos",600);

determinarTipo(gerente1);
determinarTipo(empleado1);