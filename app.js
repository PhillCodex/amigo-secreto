// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// funcion adicional //
// Detectar la tecla "Enter" en el input
document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        agregarAmigo(); // Llamar a la función al presionar Enter
    }
});
//almacena datos
// Lista donde almacenan los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim(); // Quitamos espacios

    // añade un error en caso de no poner un nombre
    if (nombre === "") {
        let error = document.getElementById('error');
        error.textContent = "⚠️ Por favor, Escribir un Nombres antes de presionar Añadir";
    // despues de 3 segundos el mensaje del error se borrar.
    setTimeout(() => {
        error.textContent = "";
    }, 3000);  
    return;  
    }

    // Agregar el nombre a la lista
    amigos.push(nombre);

    // Limpiar el input
    inputAmigo.value = "";

    // Actualizar la lista en el HTML
    actualizarLista();
    
}

// Función para actualizar la lista en el HTML
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista

    amigos.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}
// Función para selecionar un amigo aleatorio
function sortearAmigo() {
    let error = document.getElementById('error'); // Reutilizamos el mismo ID

    if (amigos.length === 0) {
        error.textContent = "⚠️ Aún no escribiste ningún nombre";

        // Borrar el mensaje después de 3 segundos
        setTimeout(() => {
            error.textContent = "";
        }, 3000);
    } else {
        if (amigos.length === 1) {
            error.textContent = "⚠️ Debe haber al menos 2 nombres para sortear";

            // Borrar el mensaje después de 3 segundos
            setTimeout(() => {
                error.textContent = "";
            }, 3000);
        } else {
            // Si hay 2 o más nombres, hacer el sorteo
            let indiceAleatorio = Math.floor(Math.random() * amigos.length);
            let amigoSeleccionado = amigos[indiceAleatorio];

            // Mostrar el resultado
            let resultadoLista = document.getElementById("resultado");
            resultadoLista.innerHTML = `<li>El amigo seleccionado es: <strong>🎉${amigoSeleccionado}</strong></li>`;
        }
    }
}