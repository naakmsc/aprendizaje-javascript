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

function imprimir(tipo){
    console.log(tipo.obtenerDetalle());
}

let gerente1 = new Gerente("Juan",500,"sistemas");
let empleado1 = new Empleado("Carlos",600);

imprimir(gerente1);
imprimir(empleado1);