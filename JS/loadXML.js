document.addEventListener('DOMContentLoaded', function() {
    // Obtener la referencia a la sección donde se cargarán las noticias
    var seccionNoticias = document.getElementById('top');

    // Crear un objeto XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Especificar la URL del archivo XML
    var url = 'xml/noticias.xml';

    // Configurar la solicitud
    xhr.open('GET', url, true);

    // Manejar el evento onload (cuando la solicitud se completa)
    xhr.onload = function() {
        // Verificar si la solicitud se realizó correctamente (código de estado 200)
        if (xhr.status === 200) {
            // Obtener la respuesta XML como un documento XML
            var xmlDoc = xhr.responseXML;

            // Obtener todas las noticias del documento XML
            var noticias = xmlDoc.getElementsByTagName('noticia');

            // Crear un fragmento de documento para construir el contenido
            var fragmento = document.createDocumentFragment();

            // Recorrer cada noticia y agregarla al fragmento
            for (var i = 0; i < noticias.length; i++) {
                // Crear elementos HTML para mostrar la información de la noticia
                var titulo = document.createElement('h1');
                titulo.textContent = noticias[i].getElementsByTagName('titulo')[0].textContent;

                var fecha = document.createElement('p');
                fecha.textContent = 'Fecha: ' + noticias[i].getElementsByTagName('fecha')[0].textContent;

                var contenido = document.createElement('p');
                contenido.textContent = noticias[i].getElementsByTagName('contenido')[0].textContent;

                // Agregar los elementos al fragmento
                fragmento.appendChild(titulo);
                fragmento.appendChild(fecha);
                fragmento.appendChild(contenido);
            }

            // Limpiar el contenido existente de la sección de noticias
            seccionNoticias.innerHTML = '';

            // Agregar el fragmento con las noticias al DOM
            seccionNoticias.appendChild(fragmento);
        } else {
            // Manejar errores de solicitud
            console.error('Error al cargar el archivo XML');
        }
    };

    // Manejar errores de red o de solicitud
    xhr.onerror = function() {
        console.error('Error de red al intentar cargar el archivo XML');
    };

    // Enviar la solicitud
    xhr.send();
});
