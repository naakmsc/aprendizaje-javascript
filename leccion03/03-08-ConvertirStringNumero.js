let miNumero = "18x";
// console.log(typeof miNumero);

let edad = Number(miNumero);
console.log(edad);

//Validar si es numero
if(isNaN(edad)){
    console.log("No es un numero");
}else{
    if(edad >= 18){
        console.log("Puede votar");
    }else{
        console.log("No puede votar");
    }
}



if(isNaN(edad)){
    console.log("No es numero");
}else{
    let resultado = (edad >= 18) ? "Votar" : "No votar";
    console.log(resultado);
}
