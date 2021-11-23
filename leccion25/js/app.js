const ingresos = [
    new Ingreso("Salario",300),
    new Ingreso("Venta conche",5000)
];

const egresos = [
    new Egreso("Renta Departamento",300),
    new Egreso("Mudada Navidad",45)
];

let cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

let totalIngresos = () =>{
    let totalIngreso = 0;
    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos = () =>{
    let totalEgreso = 0;
    for(let egreso of egresos){
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

let enviarDatos = (id, valor) => {
    document.getElementById(id).innerHTML = valor;
}

let cargarCabecero = () =>{
    let presupuesto = totalIngresos()- totalEgresos();
    let porcentaje = totalEgresos()/totalIngresos();
    enviarDatos("presupuesto",formatoMoneda(presupuesto));
    enviarDatos("porcentaje",formatoPorcentaje(porcentaje));
    enviarDatos("ingresos",formatoMoneda(totalIngresos()));
    enviarDatos("egresos",formatoMoneda(totalEgresos()));
}

const formatoMoneda = (valor) =>{
    return valor.toLocaleString("es-SV",{style:"currency",currency:"USD",minimumFractionDigits:2});
}

const formatoPorcentaje = (valor) =>{
    return valor.toLocaleString("es-ES",{style:"percent",minimumFractionDigits:2})
}


const cargarIngresos = () =>{
    let ingresosHTML = "";
    for(let ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    enviarDatos("lista-ingresos",ingresosHTML);
}

const crearIngresoHTML = (ingreso) => {
    let ingresoHTML = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${ingreso.descripcion}</div>
            <div class="derecha limpiarEstilos" >
                <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn">
                        <ion-icon name="close-circle-outline" onclick="eliminarIngreso(${ingreso.idIngreso})"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    `;
    return ingresoHTML;
}

const eliminarIngreso = (id) => {
    let indiceEliminar = ingresos.findIndex(ingreso=> ingreso.idIngreso === id);
    // for(let ingreso of ingresos) //Esto hace lo de arriba

    ingresos.splice(indiceEliminar,1);

    cargarCabecero();
    cargarIngresos();
    console.log("eliminado");
}

const cargarEgresos = () => {
    let egresosHTML = "";
    for(let egreso of egresos){
        egresosHTML += crearEgresoHTML(egreso);
    }
    enviarDatos("lista-egresos",egresosHTML);
}

const crearEgresoHTML = (egreso) => {
    let egresoHTML = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${egreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
                <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn">
                        <ion-icon name="close-circle-outline" onclick="eliminarEgreso(${egreso.idEgreso})"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    `;
    return egresoHTML;
}

let eliminarEgreso = (id) => {
    let eliminarEgreso = egresos.findIndex(egreso=>egreso.idEgreso === id);

    egresos.splice(eliminarEgreso,1);

    cargarCabecero();
    cargarEgresos();
    console.log("egreso eliminado");
 }

 let agregarDato = () => {
     let forma = document.forms["forma"];
     let tipo = forma["tipo"];
     let descripcion = forma["descripcion"];
     let valor = forma["valor"];
     if(descripcion.value !== "" && valor.value !== ""){
         if(tipo.value === "ingreso"){
            ingresos.push(new Ingreso(descripcion.value,+valor.value));
         }else if (tipo.value === "egreso"){
            egresos.push(new Egreso(descripcion.value,+valor.value));
         }
         cargarApp();
     }
 }