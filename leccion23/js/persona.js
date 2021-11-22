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