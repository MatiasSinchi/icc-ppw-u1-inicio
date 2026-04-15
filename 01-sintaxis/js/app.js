'use strict';
const nombre = "Matias";
const apellido = "Sinchi";
const edad = 24;
const carrera = "Computacion";
let ciclo = 5;
const activo = true;
const materias = ['Web', 'IA', 'Base de Datos'];

//console.log(nombre);

const direction = {
    ciudad: "Cuenca",
    provincia: "Azuay"
}

//imprimir en forma de tabla 
// console.table({nombre,apellido,ciclo,activo,direction});

//const notas = {1,2,3,4,5};
//const calcularPromedio = (notas) => /elementos;

const getSaludo = (nombre, hora) => {
    if (hora < 12) 
        return `buenos dias, ${nombre}`
    if (hora > 12) 
        return `buenas tardes, ${nombre}`
    return `buenas noche, ${nombre}`
}
const getSaludo2 = (nombre, hora) => {
    return (hora >= 6 && hora < 12) 
        ? `Buenos días, ${nombre}` 
        : (hora >= 12 && hora < 20) 
            ? `Buenas tardes, ${nombre}` 
            : `Buenas noches, ${nombre}`;
}
console.log(getSaludo2('matias',11));

document.getElementById("nombre").textContent = `${nombre} ${apellido}`;
document.getElementById("edad").textContent = `Edad: ${edad}`;
document.getElementById("carrera").textContent = `Carrera: ${carrera}`;
