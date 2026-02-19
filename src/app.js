import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {};


const who = ['Mi vecino', 'Mi esposa', 'Mi cuñao', 'Mi mujer', 'Mi suegra'];
const action = ['tiró', 'pateó', 'deshizo', 'quemó'];
const what = ['mi ordenador', 'mi móvil', 'mi ropa', 'mis pantalones'];
const where = ['en el patio', 'en la cama', 'en la mesa', 'en el coche', 'en mi cara'];

const generadorDeNumerosRandom = (arraysConFrases) => Math.floor(Math.random()*arraysConFrases.length)

const entregaUnValorDelArray = (arraysConFrases) => arraysConFrases[generadorDeNumerosRandom(arraysConFrases)]

const sustantivos = [who,action,what,where];

const excuse = sustantivos.reduce((acc, array)=>{
    return acc + entregaUnValorDelArray(array) + " "
}, " ");

console.log(excuse);

