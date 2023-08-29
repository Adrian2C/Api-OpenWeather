# Api-OpenWeather
Consumo de API para aplicacion del clima

En la siguiente APP se consumio la API de la aplicacion del clima Current Weather.

Se realizó el siguiente procedimiento
<ul>
<li>- se crea la variable con la api key</li>
<li>-se agrega el fetch para utilizar la key</li>
<li>-se agrega un addEventListener al boton de busqueda, y el evento 'click', que indique que cuando se haga click haga tal cosa</li>
<li>- se pone el valor del ID, y '.value' para indicar que es el valor que se encuentra en ese boton</li>
<li>-se crea un if, que indique si buscamos una ciudad, se ejecute la funcion fetchDatos Clima</li>
<li>-la function fetchDatosClima  se crea aparte, para que cuando se pida ejecutarla, este lista</li>
<li>-el fetch se añade adentro de la funcion</li>
<li>-cuando se haga la solicitud, se pedira a la urlBase, que busque la ciudad deseada, mediante la api id</li>
<li>-en la respuesta del fetch, se llama a la funcion mostrarDatosClima</li>
<li>-la funcion mostrarDatosClima se crea afuera para poder mostrar los datos en pantalla</li>
<li>-adentro creamos una constante que contenga el elemento del html datos clima</li>
<li>-se llama con innerHTML, haciendo referencia a q esta vacio el elemento</li>
<li>-luego se crea la constante de los elementos a usar (ciudadNombre, temperatura, descripcion)</li>
<li>-se crea la variable que contenga, el elemento a crear y luego se le añade el elemento creado y su contenido hijo</li>
<li>- el elemento img, se agrega el enlace de donde saca el recurso de imagnes</li>
<li>- sea arma el child apendice dentro del elemento padre, para unir y mostrar todo dentro del contenedor padre</li>
</ul>
