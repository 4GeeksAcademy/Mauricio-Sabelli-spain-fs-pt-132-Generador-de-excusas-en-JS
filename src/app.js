import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

const randomNumberGenerator = (arraysDelGenerador) => Math.floor(Math.random() * arraysDelGenerador.length)
const randomPhraseFromArrays = (arraysDelGenerador) => arraysDelGenerador[randomNumberGenerator(arraysDelGenerador)]

const who = ['Mi vecino', 'Mi esposa', 'Mi cuñao', 'Mi mujer', 'Mi suegra'];
const action = ['tiró', 'pateó', 'deshizo', 'quemó'];
const what = ['mi ordenador', 'mi móvil', 'mi ropa', 'mis pantalones'];
const where = ['en el patio', 'en la cama', 'en la mesa', 'en el coche', 'en mi cara'];

who.forEach((el, i)=> who[i])

};
