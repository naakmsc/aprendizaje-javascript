class Dato{
    constructor(descripcion,valor){
        this._descripcion = descripcion;
        this._valor = valor;
    }
    get descripcion(){
        return this._descripcion;
    }
    set descripcion(e){
        this._descripcion = e;
    }
    get valor(){
        return this._valor;
    }
    set valor(e){
        this._valor = e;
    }
}