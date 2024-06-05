DESCRIPCION DEL PROYECTO
1. Cree los archivos index, script y style

2. Elegi una API de emojis: https://emojihub.yurace.pro/api/all

3. En el script utilice primero el evento DOMContentLoaded para asegurarme de que el DOM este completamente cargado antes de interactuar con el.

4. En el index cree un div con la clase container, otro div con el id y la clase emoji-container para poder manipularlo en el script y en el style.

5. Defino la constante emoji-container y asigno getElementById('emoji-container') para buscar un elemento en el DOM con el id emoji-container y despues poder manipularlo. Este contenedor sera donde se añadiran los emojis.

6. Defino una funcion flecha asincrona llamada procesarFetch que se encargara de obtener los datos de la API de emojis.

7. Dentro de procesarFetch: utilice un bloque try-catch para manejar errores durante la solicitud de red; Se realiza una solicitud HTTP fetch a la API de emojis y se espera su resolucion; Se verifica si la respuesta no es correcta, si es asi se lanza un error; Se convierte la respuesta de la API a formato JSON y se almacena en la variable info; Se llama a la funcion mostrarEmojis pasando la información de los emojis obtenidos de la API.

8. Defino una funcion mostrarEmojis que toma un array de emojis y los muestra en la pagina; emojis.forEach(emoji => { }) : Se itera sobre cada emoji en el array emojis; Se crea un nuevo elemento div para cada emoji; Se añade la clase emoji al nuevo elemento div; Se establece el contenido HTML del div con el codigo HTML del emoji; Se añade el nuevo elemento div al contenedor de emojis (emojiContainer).

9. Se llama a la funcion procesarFetch para obtener y mostrar los emojis cuando el DOM este completamente cargado.


