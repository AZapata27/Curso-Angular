/*
    ===== Código de TypeScript =====
*/


import {Producto, calculaISV} from "./4-desestructuracion-en-funciones";

const carritocompras: Producto[] =[
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 150
    }

];

const [total, isv] = calculaISV(carritocompras);

console.log('Total: ', total);
console.log('ISV: ', isv);