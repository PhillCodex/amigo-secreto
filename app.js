// Detectar la tecla "Enter" en el input
document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});

// Lista donde almacenan los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim();

    let error = document.getElementById('error');

    // Validar que el nombre no esté vacío
    if (nombre === "") {
        error.textContent = "⚠️ Por favor, escribe un nombre antes de presionar Añadir";
    } else if (/^\d+$/.test(nombre)) {
        error.textContent = "⚠️ No se permiten solo números como nombre";
    } else if (/^\d/.test(nombre)) {
        error.textContent = "⚠️ No se permiten nombres que comiencen con un número";
    } else if (amigos.includes(nombre)) {
        error.textContent = "⚠️ Este nombre ya fue añadido";
    } else {
        amigos.push(nombre);
        inputAmigo.value = "";
        actualizarLista();
        error.textContent = ""; // Limpiar error si el nombre es válido
    }

    setTimeout(() => {
        error.textContent = "";
    }, 3000);
}

// Función para actualizar la lista en el HTML
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Función para seleccionar un amigo aleatorio
function sortearAmigo() {
    let error = document.getElementById('error');

    if (amigos.length < 2) {
        error.textContent = "⚠️ Debe haber al menos 2 nombres para sortear";
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSeleccionado = amigos[indiceAleatorio];
        let resultadoLista = document.getElementById("resultado");
        resultadoLista.innerHTML = `<li>El amigo seleccionado es: <strong>🎉${amigoSeleccionado}</strong></li>`;
    }

    setTimeout(() => {
        error.textContent = "";
    }, 3000);
}

// Nueva función para reiniciar la lista
function reiniciarLista() {
    amigos = [];
    actualizarLista();
    document.getElementById("resultado").innerHTML = ""; // Limpiar resultado
}
