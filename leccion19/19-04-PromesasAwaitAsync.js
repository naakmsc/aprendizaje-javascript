async function funcionConPromesaAwit(){
    let miPromesa = new Promise(resolved => {
        resolved("promesacon await");
    });

    console.log(await miPromesa);
};

funcionConPromesaAwit();