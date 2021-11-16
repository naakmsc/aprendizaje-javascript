class Persona{

    //Variable estatica
    static contador = 0;

    //
    static get Max_obj(){
        return 4;
    }

    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contador < Persona.Max_obj){
            this.idPersona = ++Persona.contador;
        }else{
            console.log("Ya no se pueden crear otro objeto");
        }
        
    }
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set nombre(e){
        this._nombre = e;
    }
    set apellido(e){
        this._apellido = e;
    }
    nombreCompleto(){
        return this.idPersona + " " + this._nombre + " " + this._apellido
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido,depto){
        super(nombre,apellido);
        this._depto = depto;
    }
    get depto(){
        return this._depto;
    }
    set depto(e){
        this._depto = e;
    }
}

let persona1 = new Persona("Jorge","perez");
console.log(persona1.nombreCompleto());

let empleado1 = new Empleado("Maria","Lara","Sistemas");
console.log(empleado1.nombreCompleto());

let persona2 = new Persona("Karla","Grande");
console.log(persona2.nombreCompleto());

console.log(Persona.contador);

console.log(Persona.Max_obj);
Persona.Max_obj = 10;
console.log(Persona.Max_obj);

let persona3 = new Persona("Calor","Lara");
console.log(persona3.nombreCompleto());
let persona4 = new Persona("Calor","Lara");
console.log(persona4.nombreCompleto());