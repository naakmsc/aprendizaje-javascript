let resultado = sumarTodo(5,4,13,10,9,5,15,24,14);
console.log(resultado);

function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length;i++){
        suma += arguments[i];
    }
    return suma;
}