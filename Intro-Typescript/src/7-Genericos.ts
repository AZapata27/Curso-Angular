/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T> (argumento: T){
    return argumento;
}

let soyString = queTipoSoy('Hola mundo');
let soyNumero = queTipoSoy(180);
let soyArreglo= queTipoSoy([10,120,1041]);