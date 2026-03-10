const http = require('http');
const fs = require('fs');
const path = require('path');

// Definimos el puerto solicitado
const PUERTO = 3000;

// Creamos el servidor HTTP
const servidor = http.createServer((peticion, respuesta) => {
    
    // Obtenemos la ruta absoluta de nuestro archivo index.html
    const rutaArchivo = path.join(__dirname, 'index.html');

    // Leemos el archivo HTML desde el disco
    fs.readFile(rutaArchivo, (error, contenido) => {
        if (error) {
            // Si hay un error (por ejemplo, el archivo no existe), devolvemos un error 500
            respuesta.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
            respuesta.end('Error interno del servidor: No se pudo leer el archivo index.html');
            console.error('Error leyendo el archivo:', error);
            return;
        }

        // Si todo sale bien, respondemos con el código 200 (OK) y el contenido del HTML
        respuesta.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        respuesta.end(contenido);
    });
});

// Ponemos el servidor a escuchar en el puerto 3000
servidor.listen(PUERTO, () => {
    console.log(`✅ Servidor ejecutándose correctamente.`);
    console.log(`🌐 Abre tu navegador e ingresa a: http://localhost:${PUERTO}`);
});
