//Llamadas asincronas con uso settimeout

function miFuncionCallback(){
    console.log("mi funcion callback");
}

setTimeout(miFuncionCallback,5000);

setTimeout(function(){console.log("hello")},2000);

setTimeout(function(){console.log("javascript")},1000);