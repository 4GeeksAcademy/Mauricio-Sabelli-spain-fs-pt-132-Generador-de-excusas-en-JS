import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  const who = ['Mami', 'Bebé', 'Mi amol', 'Mi gata'];
  const action = ['yo quiero', 'yo puedo', 'yo vengo', 'voy a'];
  const what = ['encendelte', 'amalte', 'bailar', 'jugal'];
  const where = ['suave', 'lento', 'rapido', 'fuelte'];
  const when = ['hasta que salga el sol', 'toda la noche', 'hasta el amanecel', 'todo el día'];
  const sound = ['yeah yeah', 'ohh ohh', 'bum bum', 'ehh ehh']

  const generadorDeNumerosRandom = (array) =>
    Math.floor(Math.random() * array.length);

  const entregaUnValorDelArray = (array) =>
    array[generadorDeNumerosRandom(array)];

  function generarExcusa() {
    const partesDeLaExcusa = [who, action, what, where, when, sound];

    const excuse = partesDeLaExcusa.reduce((acc, array) => {
      return acc + entregaUnValorDelArray(array) + " ";
    }, "");

    document.querySelector("#excuse").innerText = excuse;
  }

  // Generar una excusa al cargar la página
  generarExcusa();

  // Evento click del botón
  document.querySelector("#btnExcusa")
  .addEventListener("click", generarExcusa);

};
