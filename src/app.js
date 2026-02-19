import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


  const who = ['Mami', 'Bebé', 'Mi amol', 'Mi gata'];
  const action = ['yo quiero', 'yo puedo', 'yo vengo a', 'voy a'];
  const what = ['encendelte', 'amalte', 'bailar', 'jugal'];
  const how = ['suave', 'lento', 'rápido', 'fuelte'];
  const when = ['hasta que salga el sol', 'toda la noche', 'hasta el amanecel', 'todo el día'];
  const sound = ['yeah yeah', 'ohh ohh', 'bum bum', 'ehh ehh']

  //los comentarios son para mi, para ordenar el código y tener claro qué hace cada función.
  //Uso los nombres de las funciones en español para poder entender mejor que hacen ahora que estoy empezando, luego ya me pasaré al inglés.
  //función flecha para generar un número random entre 0 y la cantidad de elementos que tenga el array
  const generadorDeNumerosRandom = (array) =>
    Math.floor(Math.random() * array.length);

  //función flecha que entrega una parte del array según la posición elegida por el numero random que sale
  const entregaUnValorDelArray = (array) =>
    array[generadorDeNumerosRandom(array)];

  //función con un array que contiene todos los arrays con las partes de las frases
  function generarExcusa() {
    const partesDeLaExcusa = [who, action, what, how, when, sound];

    //función flecha dentro de la función que acumula cada parte de cada array elegido aleatoriamente y los concatena formando una frase
    const excusa = partesDeLaExcusa.reduce((acc, array) => {
      return acc + entregaUnValorDelArray(array) + " ";
    }, "");

    //muestra el resultado en pantalla dentro de un parrafo que hay en el HTML con el ID excuse
    document.querySelector("#excusa").innerText = excusa;
  }

  // Genera una excusa al cargar la página
  generarExcusa();

  // Botón que genera una nueva excusa al pulsarlo
  document.querySelector("#btnExcusa")
  .addEventListener("click", generarExcusa);
