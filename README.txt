Seminario de Actualización - Implementaciones de Sitio Simple
Este repositorio contiene dos ejemplos prácticos de cómo implementar un sitio web interactivo sencillo, mostrando la evolución desde una estructura estática básica hasta una servida mediante Node.js.

Contenido del Proyecto
El proyecto se divide en dos carpetas principales que demuestran diferentes enfoques de desarrollo:

1. Implementación Básica (/implementacion)
Esta versión representa un sitio web tradicional del lado del cliente donde los recursos están separados para una mejor organización:

index.html: Estructura del sitio que incluye una caja de texto y un botón para cambiar el tema.

style.css: Define la apariencia visual, centrando los elementos y añadiendo transiciones suaves para los cambios de color.

servidor.js: (Script de cliente) Contiene la lógica para mostrar una alerta al presionar "Enter" en el input y la lógica de rotación de colores (Blanco, Negro, Celeste) al presionar el botón.

2. Implementación con Servidor Node.js (/implementacion2)
Esta versión integra los estilos y la lógica frontal dentro del HTML y añade un servidor backend básico:

index.html: Contiene tanto la estructura como los estilos CSS y la lógica de JavaScript (interactividad) en un solo archivo.

servidor.js: Un servidor web creado con el módulo http de Node.js que escucha en el puerto 3000 y sirve el archivo index.html automáticamente al acceder a la ruta raíz.

Funcionalidades Principales
Caja de Texto Interactiva: Al escribir un mensaje y presionar la tecla Enter, el sistema muestra el texto ingresado mediante una ventana emergente (alert).

Cambiador de Temas: Un botón que rota cíclicamente entre tres estados visuales:

Fondo blanco con texto negro.

Fondo negro con texto blanco.

Fondo celeste con texto rojo.

Servidor Backend: Implementación de un servidor local capaz de leer archivos del disco y enviarlos al navegador con las cabeceras Content-Type correctas.

Cómo ejecutar la Implementación 2
Para poner en marcha el servidor de la segunda implementación, sigue estos pasos:

Asegúrate de tener Node.js instalado en tu sistema.

Navega hasta la carpeta desde tu terminal:

Bash
cd implementacion2
Ejecuta el servidor:

Bash
node servidor.js
Abre tu navegador e ingresa a: http://localhost:3000.