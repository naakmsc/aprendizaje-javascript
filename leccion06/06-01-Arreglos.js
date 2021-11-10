// let autos = new Array("bmw","Toyota","Mitsubishi");
const autos = ["Bmw","Toyota","Mazda"];
console.log(autos);

console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);

for(let i = 0; i <= autos.length;i++){
    console.log(autos[i]);
}

autos[1] = "Kiwi";
console.log(autos[1]);

autos.push("Hello");
console.log(autos);