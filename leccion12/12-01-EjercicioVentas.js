class Producto{
    
    static contadorProductos = 0;

    constructor(nombre,precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(e){
        this._nombre = e;
    }
    get precio(){
        return this._precio;
    }
    set precio(e){
        this._precio = e;
    }
    toString(){
        return `idProducto:${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`;
    }
}

class Orden{
    static contadorOrden = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrden;
        this._productos = [];
        // this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }
    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            // this._productos[this._contadorProductosAgregados++] = producto;
        }else{
            console.log("No se pueden agregar mas de "+ Orden.MAX_PRODUCTOS + " de Productos");
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        
        for(let producto of this._productos){
            totalVenta += producto.precio;
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this._productos){
            productosOrden += '\n{' + producto.toString() + '} ';
        }
        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()} Productos: ${productosOrden}`);
    }

}

let producto1 = new Producto("Pantalon",10);
let producto2 = new Producto("Camisa",5);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

orden1.mostrarOrden();

let orden2 = new Orden();

let producto3 = new Producto("Cinturon",2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto3);
orden2.mostrarOrden();