let autos = ["Mazda","Toyota","Bmw"];
autos.push("Tesla");
console.log(autos);

autos[autos.length] = "Volvo";
console.log(autos);

autos[6] = "Caiman";
console.log(autos);

console.log(typeof autos);

//Validar un arreglo
console.log(Array.isArray(autos));

console.log(autos instanceof Array);