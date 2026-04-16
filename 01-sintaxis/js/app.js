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

const estudiantes = [
  { nombre: 'Ana', nota: 85, activo: true },
  { nombre: 'Luis', nota: 42, activo: true },
  { nombre: 'Maria', nota: 93, activo: false },
  { nombre: 'Carlos', nota: 67, activo: true },
  { nombre: 'Sofia', nota: 78, activo: true }
];

const aprobados = estudiantes.filter(e => e.nota >= 70);
const nombres = estudiantes.map(e => e.nombre);
const promedio = estudiantes.reduce((acc, e) => acc + e.nota, 0) / estudiantes.length;
const mejor = estudiantes.reduce((max, e) => e.nota > max.nota ? e : max);
const todosActivos = estudiantes.every(e => e.activo);
const algunoMayor90 = estudiantes.some(e => e.nota > 90);

document.getElementById('aprobados').textContent = aprobados.map(e => e.nombre).join(', ');
document.getElementById('nombres').textContent = nombres.join(', ');
document.getElementById('promedio').textContent = promedio.toFixed(2);
document.getElementById('mejor').textContent = `${mejor.nombre} (${mejor.nota})`;
document.getElementById('activos').textContent = todosActivos;
document.getElementById('mayor90').textContent = algunoMayor90;