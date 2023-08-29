# Api-OpenWeather
Consumo de API para aplicacion del clima

En la siguiente APP se consumio la API de la aplicacion del clima Current Weather.

Se realizó el siguiente procedimiento

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
