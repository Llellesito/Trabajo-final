//Boton para refrescar la pagina
function refrescarPagina() {
    location.reload();
}

//Pedir datos: Nombre y Edad
function pedirDatos() {
      const nombre = prompt("Por favor, ingresa tu nombre:");
      if (nombre === null) {
        document.getElementById("mensaje").innerText = "No se ingresó ningún nombre.";
        return;
      }

      let edad = prompt("Por favor, ingresa tu edad:");
      if (edad === null) {
        document.getElementById("mensaje").innerText = "No se ingresó ninguna edad.";
        return;
      }

      edad = parseInt(edad);
      if (isNaN(edad)) {
        document.getElementById("mensaje").innerText = "La edad ingresada no es válida.";
        return;
      }

      let mensaje = `Hola ${nombre}. `;

      if (edad >= 18) {
        mensaje += "Eres mayor de edad.";
      } else {
        mensaje += "Eres menor de edad.";
      }

      document.getElementById("mensaje").innerText = mensaje;
    }

//Juego de adivinar numeros
let secreto = null;
let intentos = 0;
let minGlobal, maxGlobal;
let ganado = false;

function jugar(min, max) {
    const input = document.getElementById('entrada');
    const mensaje = document.getElementById('mensaje');

    // Si el rango cambió o el juego no empezó, inicializamos
    if (secreto === null || min !== minGlobal || max !== maxGlobal) {
        minGlobal = min;
        maxGlobal = max;
        secreto = Math.floor(Math.random() * (max - min + 1)) + min;
        intentos = 0;
        ganado = false;

        input.min = min;
        input.max = max;
        input.value = '';
        mensaje.innerText = `Adivina un número entre ${min} y ${max}`;
        return;  // No evaluamos en esta llamada inicial
    }

    if (ganado) {
        mensaje.innerText = `Ya ganaste! Reinicia el juego para jugar otra vez.`;
        return;
    }

    const entrada = parseInt(input.value);
    if (isNaN(entrada) || entrada < min || entrada > max) {
        mensaje.innerText = `Por favor ingresa un número válido entre ${min} y ${max}`;
        return;
    }

    intentos++;

    if (entrada === secreto) {
        mensaje.innerText = `¡Correcto! Lo lograste en ${intentos} intentos.`;
        ganado = true;
    } else if (entrada < secreto) {
        mensaje.innerText = "Demasiado bajo, intenta otra vez.";
    } else {
        mensaje.innerText = "Demasiado alto, intenta otra vez.";
    }
}


//Validador de Formulario

document.getElementById('form-contacto').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const email = document.getElementById('email').value.trim();

    // Eliminar espacios del teléfono para validar
    let telefono = document.getElementById('telefono').value.trim();
    const telefonoSinEspacios = telefono.replace(/\s+/g, '');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonoRegex = /^\d{9}$/;

    if (!nombre) {
        alert('Por favor, rellena el campo Nombre.');
        return;
    }

    if (!apellidos) {
        alert('Por favor, rellena el campo Apellidos.');
        return;
    }

    if (!email) {
        alert('Por favor, rellena el campo Email.');
        return;
    } else if (!emailRegex.test(email)) {
        alert('Por favor, introduce un email válido.');
        return;
    }

    if (!telefono) {
        alert('Por favor, rellena el campo Teléfono.');
        return;
    } else if (!telefonoRegex.test(telefonoSinEspacios)) {
        alert('El teléfono debe contener exactamente 9 números (puede incluir espacios).');
        return;
    }

    // Si todo está bien, enviar el formulario
    this.submit();
});


//Cambiar 

//Restablecer tema por defecto
function temaPorDefecto() {
    const fondo = 'linear-gradient(to right, red, blue))';
    document.documentElement.style.background = fondo;
    document.body.style.background = '#6e6e6eb4';

    // Guardar preferencia
    localStorage.setItem('temaFondo', fondo);
    localStorage.setItem('temaBodyBg', '#6e6e6eb4');
}

// Cambiar Tema fijo
function cambiarFondoHtml() {
    const fondo = 'linear-gradient(to right, rgb(119, 119, 119), rgb(68, 68, 68))';
    document.documentElement.style.background = fondo;
    document.body.style.background = 'none';

    // Guardar preferencia
    localStorage.setItem('temaFondo', fondo);
    localStorage.setItem('temaBodyBg', 'none');
}

// Tema aleatorio
function cambiarFondoHtmlAleatorio() {
    const direcciones = [
        'to right',
        'to left',
        'to bottom',
        'to top',
        'to bottom right',
        'to bottom left',
        'to top right',
        'to top left'
    ];

    function colorAleatorio() {
        return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    }

    const direccion = direcciones[Math.floor(Math.random() * direcciones.length)];
    const color1 = colorAleatorio();
    const color2 = colorAleatorio();

    const fondo = `linear-gradient(${direccion}, ${color1}, ${color2})`;

    document.documentElement.style.background = fondo;
    document.body.style.background = '#6e6e6eb4'; // si quieres ese color de fondo en el body

    // Guardar preferencia
    localStorage.setItem('temaFondo', fondo);
    localStorage.setItem('temaBodyBg', '#6e6e6eb4');
}

// Al cargar la página, aplicar fondo guardado si existe
window.addEventListener('load', () => {
    const fondoGuardado = localStorage.getItem('temaFondo');
    const bodyBgGuardado = localStorage.getItem('temaBodyBg');
    if (fondoGuardado) {
        document.documentElement.style.background = fondoGuardado;
    }
    if (bodyBgGuardado) {
        document.body.style.background = bodyBgGuardado;
    } else {
        document.body.style.background = 'initial'; // para evitar heredar un fondo raro si no hay guardado
    }
});