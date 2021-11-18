let promesa = new Promise((resolved)=>{

    setTimeout(()=>resolved("saludos desde settimeout"),3000);

});

//Async indica que una funcion regresa una promesa

async function miFuncionConPromesa(){
    return "saludos con promesa de async";
}

miFuncionConPromesa().then(valor=>console.log(valor));