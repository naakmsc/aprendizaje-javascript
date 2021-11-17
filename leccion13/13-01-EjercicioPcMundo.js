class DispositivoEntrada{

    constructor(marca,tipoEntrada){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get marca(){
        return this._marca;
    }
    set marca(e){
        this._marca = e;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(e){
        this._tipoEntrada = e;
    }
}

let dispositivo1 = new DispositivoEntrada("Omega","Usb");
// console.log(dispositivo1);

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(marca,tipoEntrada){
        super(marca,tipoEntrada);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }

}

let raton1 = new Raton("Raton HP","Usb C");
console.log(raton1.toString());
let raton2 = new Raton("IBM","USB");
console.log(raton2.toString());

class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;

    constructor(marca,tipoEntrada){
        super(marca,tipoEntrada);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

let teclado1 = new Teclado("IBM","Usb");
console.log(teclado1.toString());
let teclado2 = new Teclado("Philip","USB");
console.log(teclado2.toString());

class Monitor{
    static contadorMonitores = 0;
    constructor(marca,tamanio){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamanio = tamanio;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    get marca(){
        return this._marca;
    }
    set marca(e){
        this._marca = e;
    }
    get tamanio(){
        return this._tamanio;
    }
    set tamanio(e){
        this._tamanio = e;
    }
    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamanio}]`;
    }
}

let monitor1 = new Monitor("Compaq","12 Pulgadas");
console.log(monitor1.toString());
let monitor2 = new Monitor("Dell","15 Pulgadas");
console.log(monitor2.toString());


class Computadora{
    static contadorComputadora = 0;
    constructor(nombre,monitor,teclado,raton){
        this._idComputador = ++Computadora.contadorComputadora;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }
    get idComputadora(){
        return this._idComputador;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(e){
        this._nombre = e;
    }
    get monitor(){
        return this._monitor;
    }
    set monitor(e){
        this._monitor;
    }
    get teclado(){
        return this._teclado;
    }
    set teclado(e){
        this._teclado = e;
    }
    get raton(){
        return this._raton;
    }
    set raton(e){
        this._raton = e;
    }
    toString(){
        return `Computadora: ${this._idComputador}: ${this._nombre}\n${this._monitor} \n${this._teclado}\n${this._raton}`;
    }
}

let computadora1 = new Computadora("Asus",monitor1,teclado1,raton1);
console.log(computadora1.toString());
let computadora2 = new Computadora("Lenovo",monitor2,teclado2,raton2);
console.log(computadora2.toString());


class Orden{
    static contadorOrden = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrden;
        this._computadoras = [];
    }
    get idOden(){
        return this._idOrden;
    }
    agregarComputadora(e){
        this._computadoras.push(e);
    }
    mostrarOrden(){
        let computadorasOrden = "";
        for(let computadora of this._computadoras){
            computadorasOrden += `\n${computadora}`;
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora1);
orden1.mostrarOrden();
