//Promesa, await, async y setTimeout

async function funcionPromesaAsyncAwaitSetTimeout(){
    let miPromesa = new Promise(resolved => {
        setTimeout(()=>resolved("Promesa con await y settimeout"),3000);
    });
    console.log(await miPromesa);
    console.log("fin de la promesa");
}

funcionPromesaAsyncAwaitSetTimeout();