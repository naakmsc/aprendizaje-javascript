// let miPromesa = new Promise((resolved,rejected) =>{
//     let expresion = false;
//     if(expresion){
//         resolved("Resolvio correcto");
//     }else{
//         rejected("Se produjo un error");
//     }
// });

let promesa = new Promise((resolved)=>{
    console.log("Inicio de la promesa");
    setTimeout(()=>resolved("saludos desde settimeout"),3000);
    console.log("Fin de la promesa");
});

promesa.then(valor => console.log(valor));