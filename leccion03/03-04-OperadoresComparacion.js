let a = 3, b = 2, c = "3";

let z = a == b;
console.log(z);

z = a == c; //Verifica si es igual y convierte a numero No estricto
console.log(z);

z = a === c; //Verifica si es igual y tambien en tipo Estricto
console.log(z);

//Comparacion invertido o diferencia

z = 3 != 3;
console.log(z);

z = 3 != 4;
console.log(z);

z = a !== c; //Estricto con el tipo de variables
console.log(z);

z = a != c; //Estricto con el tipo de variables
console.log(z);

//Comparacion relacionales

z = a < b;
console.log(z);

b = 3;
z = a <= b;
console.log(z);

z = a > b;
console.log(z);

z = a >= b;
console.log(z);