// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // Lista vacía

//Función para agregar amigos a lista
function agregarAmigo() {
    let agregarNombre = document.getElementById("amigo").value  // Obtiene el valor del campo de texto

    if (agregarNombre.trim() !== "") { // Verifica que el campo no esté vacío
        amigos.push(agregarNombre); // Añade el nombre a la lista
        document.getElementById("amigo").value = ""; // Limpiar el campo después de agregar
        console.log(amigos); // Muestra los nombres añadidos a la lista
        mostrarLista(); // Muestra la lista en pantalla
        validarAmigos(); 
    } else {
        alert("Por favor, inserte un nombre.");
    }
}
// Función para mostrar la lista de amigos en pantalla
function mostrarLista() {
    let listaHTML = document.getElementById("listaAmigos"); // Obtener el elemento de la lista
    listaHTML.innerHTML = ""; // Limpiar la lista existente
    
    for (let i = 0; i < amigos.length; i++) { // Iterar sobre el arreglo
        let li = document.createElement("li"); // Crear un nuevo elemento <li>
        li.textContent = amigos[i]; // Asignar el nombre al <li>
        listaHTML.append(li); // Agregar el <li> a la lista
        }
}
// Función para sortear un nombre de la lista
function sortearAmigo() {

    // Valida que haya amigos disponibles
    if (amigos.length === 0) {
        document.getElementById("resultado").innerHTML = "No hay amigos en la lista";
        return;
    }
    
    // Genera un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtiene el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado con el elemento sorteado
    document.getElementById("resultado").innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
}







