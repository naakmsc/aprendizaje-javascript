let miPromesa = new Promise((resolved, rejected) =>{
    let expresion = false;
    if(expresion){
        resolved("Resolvio");
    }else{
        rejected("Se produjo error");
    }
});

// miPromesa.then(valor => console.log(valor),error => console.log(error));

miPromesa
.then(valor=>console.log(valor))
.catch(error=>console.log(error));