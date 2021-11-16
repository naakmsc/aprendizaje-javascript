class Persona{
    static contadorPersonas = 0;
    constructor(nombre,apellido,edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get idPersona(){
        return this._idPersona;
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
    get edad(){
        return this._edad;
    }
    set edad(e){
        return this._edad = e;
    }
    toString(){
        return this._idPersona + " " + this._nombre + " " + this._apellido + " " + this._edad;
    }
}

class Empleado extends Persona{

    static contadorEmpleado = 0;

    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this._idEmpleado = ++Empleado.contadorEmpleado;
        this._sueldo = sueldo;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(e){
        this._sueldo = e;
    }
    toString(){
        return super.toString() + ", " +  this.idEmpleado + " " + this.sueldo;
    }
}

class Cliente extends Persona{

    static contadorCliente = 0;
    
    constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre,apellido,edad);
        this._idCliente = ++Cliente.contadorCliente;
        this._fechaRegistro = fechaRegistro;
    }
    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(e){
        this._fechaRegistro = e;
    }
    toString(){
        return super.toString() + ", " + this.idCliente + " " + this.fechaRegistro;
    }
}

let persona1 = new Persona("Oscar","Ramirez",14);
console.log(persona1.toString());

let empleado1 = new Empleado("Juan","Perez",25,1500);
console.log(empleado1.toString());

let cliente1 = new Cliente("Alma","Bernal",15,new Date());
console.log(cliente1.toString());