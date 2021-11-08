//AND (&&)//
let a = 5;
let valMin = 0, valMax = 10;

if(a >= valMin && a <= valMax){
    console.log("Dentro del rango");
}else{
    console.log("Fuera del rango");
}

//OR (||)//
let vacaciones = true, diaDescanso = false;
if(vacaciones || diaDescanso){
    console.log("Padre tiene tiempo");
}else{
    console.log("Esta ocupado");
}