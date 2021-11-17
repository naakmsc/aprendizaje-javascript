let miFuncion = function(){
    console.log("Saludos miFuncion");
}

// let miFuncionFlecha = () => {
//     console.log("Saludos Funcion Flecha");
// }

// const miFuncionFlecha = () => console.log("mi Funcion Flecha");

// miFuncionFlecha();


// const saludar = () => {
//     return "Saludos";
// }
// console.log(saludar());

const saludar = () => "saludar";
console.log(saludar());

const regresaObjeto = () =>({nombre:"juan",apellido:"Lara"});
console.log(regresaObjeto());

// const saludoParametro = (sms) => console.log(sms);
const saludoParametro = sms => console.log(sms);
saludoParametro("hello");

const saludoParametro2 = function(sms){
    console.log(sms);
}
saludoParametro2("hello");

const funcionconparamentros = (val1,val2) => val1 + val2;
console.log(funcionconparamentros(5,2));