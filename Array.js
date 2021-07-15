const arreglo = ['Enero', 'Febrero', 'Marzo', 'Abril'];
    // console.table(arreglo);

arreglo.forEach(function(arreglo) {
    // console.log(arreglo)
});

arreglo.shift()
let nuevoArreglo = [...arreglo, 'Mayo'];

    console.table(nuevoArreglo);

