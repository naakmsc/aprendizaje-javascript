class Persona{

    //Atributos de nuestra clase
    static contadorObjetosPersona = 0; 

    //Atributo de nuestros objetos
    email = "correo@mail.com";

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona++;
        console.log("Se aumenta el contador luego de crearse un nuevo objeto");
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
        return this._nombre + " " + this._apellido;
    }
    toString(){
        return this.nombreCompleto;
    }

    static saludar(){
        console.log("Saludos de este metodo static");
    }
    static saludar2(per){
        console.log("Hello "+per.nombre);
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, depto){
        super(nombre,apellido); //llamado al constructor del padre
        this._depto = depto;
    }
    get depto(){
        return this._depto;
    }
    set depto(e){
        this._depto = e;
    }
    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ", " + this._depto;
    }
}

let persona = new Persona('Juan','Perez');
console.log(persona);

let empleado = new Empleado('Oscar','Lara','Sistemas');
console.log(empleado);

//No podemos usar una funcion estatica desde este objeto
//persona.saludar();
Persona.saludar();

Persona.saludar2(persona);

Empleado.saludar();

//Los metodos o funciones Static solo se pueden usar desde
//la clase padre o una clase hija

//Atributos staticos
console.log(persona.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);

console.log(Empleado.contadorObjetosPersona);

/* Variables estaticas solo se pueden ussar con la clase
y no con this*/

//Atributos o variables no Static
console.log(persona.email);
console.log(empleado.email);
console.log(Persona.email);