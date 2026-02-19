import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  const who = ['Mi vecino', 'Mi esposa', 'Mi cuñao', 'Mi mujer', 'Mi suegra'];
  const action = ['tiró', 'pateó', 'deshizo', 'quemó'];
  const what = ['mi ordenador', 'mi móvil', 'mi ropa', 'mis pantalones'];
  const where = ['en el patio', 'en la cama', 'en la mesa', 'en el coche', 'en mi cara'];

  const generadorDeNumerosRandom = (array) =>
    Math.floor(Math.random() * array.length);

  const entregaUnValorDelArray = (array) =>
    array[generadorDeNumerosRandom(array)];

  function generarExcusa() {
    const partesDeLaExcusa = [who, action, what, where];

    const excuse = partesDeLaExcusa.reduce((acc, array) => {
      return acc + entregaUnValorDelArray(array) + " ";
    }, "");

    document.getElementById("excuse").innerText = excuse;
  }

  // Generar una excusa al cargar la página
  generarExcusa();

  // Evento click del botón
  document
    .getElementById("btnExcusa")
    .addEventListener("click", generarExcusa);
};
