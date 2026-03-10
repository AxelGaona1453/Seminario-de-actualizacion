        // --- 1. Lógica de la caja de texto ---
        const inputTexto = document.getElementById('cajaTexto');
        
        inputTexto.addEventListener('keydown', function(evento) {
            // Verificamos si la tecla presionada es "Enter"
            if (evento.key === 'Enter') {
                alert(inputTexto.value); // Mostramos el texto en la ventana emergente
            }
        });

        // --- 2. Lógica del botón de colores ---
        const botonColor = document.getElementById('botonColor');
        
        // Usamos un contador para rastrear el estado actual (0, 1 o 2)
        let estadoActual = 0; 

        botonColor.addEventListener('click', function() {
            // Incrementamos el estado. El operador módulo (%) asegura que vuelva a 0 después del 2.
            estadoActual = (estadoActual + 1) % 3;

            // Aplicamos los colores dependiendo del estado
            if (estadoActual === 0) {
                // Estado 0: Fondo blanco, texto negro
                document.body.style.backgroundColor = 'white';
                document.body.style.color = 'black';
            } else if (estadoActual === 1) {
                // Estado 1: Fondo negro, texto blanco
                document.body.style.backgroundColor = 'black';
                document.body.style.color = 'white';
            } else if (estadoActual === 2) {
                // Estado 2: Fondo celeste, texto rojo
                document.body.style.backgroundColor = 'lightblue';
                document.body.style.color = 'red';
            }
        });
