//tipo de dato string 
var nombre = "Julio";
console.log(typeof nombre);

nombre = 10;
console.log(typeof nombre);

//tipo de dato numerico
var numero = 1000;
console.log(typeof numero);

//tipo de dato object
var objeto = {
    nombre: "Julio",
    apellido: "Lopez",
    telefono: "9530000000"
}
console.log(typeof objeto);

//tipo de dato boleano (true, false)
var bandera = true;
console.log(typeof bandera);

//tipo de dato funcion
function miFuncion(){
    console.log(typeof miFuncion);
}

//tipo de dato symbol
var simbolo = Symbol("Mi simbolo");
console.log(typeof simbolo);

//tipo clase es una funcion
class persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof persona);

//tipo de dato undefined
var x;
console.log(typeof x);
var z = undefined;
console.log(z);

//tipo null = ausencia de valor
var y = null;
console.log(typeof y);

//arreglos
var autos = ['BMW','AUDI','Mustang'];
console.log(typeof autos);

//cadena vacia
var z = '';
console.log(typeof z);
