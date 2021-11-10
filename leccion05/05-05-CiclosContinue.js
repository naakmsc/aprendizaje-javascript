for(let contador = 0; contador <= 10; contador++){
    if(contador % 2 !== 0){
        continue; //Ir al siguiente iteracion del For
    }
    console.log(contador);
}
console.log("Fin del ciclo");