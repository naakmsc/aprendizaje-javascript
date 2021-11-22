console.log("Funcionando");

function sumar(){
    const forma = document.getElementById("forma");
    let operandoa = forma["operandoA"];
    let operandob = forma["operandoB"];
    
    let resultado = parseInt(operandoa.value) + parseInt(operandob.value);
    if(isNaN(resultado))
        resultado = "Escriba numeros";
        
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;


    
}