/* Pasos para consumir esta api

- se crea la variable con la api key
-se agrega el fetch para utilizar la key
-se agrega un addEventListener al boton de busqueda, y el evento 'click', que indique que cuando se haga click haga tal cosa
- se pone el valor del ID, y '.value' para indicar que es el valor que se encuentra en ese boton
-se crea un if, que indique si buscamos una ciudad, se ejecute la funcion fetchDatos Clima
-la function fetchDatosClima  se crea aparte, para que cuando se pida ejecutarla, este lista
-
-el fetch se añade adentro de la funcion
    -cuando se haga la solicitud, se pedira a la urlBase, que busque la ciudad deseada, mediante la api id
-en la respuesta del fetch, se llama a la funcion mostrarDatosClima
-la funcion mostrarDatosClima se crea afuera para poder mostrar los datos en pantalla
-adentro creamos una constante que contenga el elemento del html datos clima
-se llama con innerHTML, haciendo referencia a q esta vacio el elemento
-luego se crea la constante de los elementos a usar (ciudadNombre, temperatura, descripcion)
-se crea la variable que contenga, el elemento a crear
y luego se le añade el elemento creado y su contenido hijo
- el elemento img, se agrega el enlace de donde saca el recurso de imagnes
- sea arma el child apendice dentro del elemento padre, para unir y mostrar todo dentro del contenedor padre
*/

let urlBase = "https://api.openweathermap.org/data/2.5/weather";
let api_key = "50cc6e86fc539cd6a7153efa0bfd132e";

let difKelvin = 273.15;

/* let ciudad = 'roma' */

document.getElementById("botonBusqueda").addEventListener("click", () => {
  const ciudad = document.getElementById("ciudadEntrada").value;
  if (ciudad) {
    fetchDatosClima(ciudad);
  }
});

function fetchDatosClima(ciudad) {
  //&lang=sp,es
  fetch(`${urlBase}?q=${ciudad},{country code}&appid=${api_key}&lang=sp,es`)
    .then((data) => data.json())
    .then((data) => mostrarDatosClima(data));
}

function mostrarDatosClima(data) {
  const divDatosClima = document.getElementById("datosClima");
  divDatosClima.innerHTML = "";

  const ciudadNombre = data.name;
  const paisNombre = data.sys.country;
  const temperatura = data.main.temp;
  const humedad = data.main.humidity;
  const descripcion = data.weather[0].description;
  const icono = data.weather[0].icon;

  const ciudadTitulo = document.createElement("h2");
  ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`;

  const temperaturaInfo = document.createElement("p");
  temperaturaInfo.textContent = `la temperatura es :${Math.floor(
    temperatura - difKelvin
  )}°C`;

  const humedadInfo = document.createElement("p");
  humedadInfo.textContent = `la humedad es :${humedad}%`;

  const iconoInfo = document.createElement("img");
  iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`;

  const descripcionInfo = document.createElement("p");
  descripcion.textContent = `la descripcion meteorologica es: ${descripcion}`;

  divDatosClima.appendChild(ciudadTitulo);
  divDatosClima.appendChild(temperaturaInfo);
  divDatosClima.appendChild(humedadInfo);
  divDatosClima.appendChild(iconoInfo);
  divDatosClima.appendChild(descripcionInfo);
}
