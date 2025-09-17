/* Imprimir lista de nombres
Crea un programa en javascript que cumpla
con lo siguiente:

1. Define una lista de objetos llamado grupo.
    Este objeto debe tener una lista de 10 nombres
    separado por nombre y apellido.
2. Crea una función llamada imprimirNombres.
    Esta función debe recorrer la lista de nombres 
    y mostrarlos en la consola uno a uno.
3. Llama a la función imprimirNombres para mostrar 
    todos los nombres.*/

let grupo = [
    { nombre: "Fernanda", apellido: "Ortega" },
    { nombre: "Mario", apellido: "Felix" },
    { nombre: "Eduardo", apellido: "Lizarraga" },
    { nombre: "Maria", apellido: "Mendoza" },
    { nombre: "Luis", apellido: "Ocampos" },
    { nombre: "Luisa", apellido: "Fernanda" },
    { nombre: "Alberto", apellido: "Sanchez" },
    { nombre: "Sergio", apellido: "Reyes" },
    { nombre: "Marcos", apellido: "Gomez" },
    { nombre: "Jesus", apellido: "Gutierrez" }];

function listaNombres(){
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    for(let i = 0; i < grupo.length; i++){
        let li = document.createElement("li");
        li.textContent = grupo[i].nombre + " " + grupo[i].apellido;
        lista.appendChild(li);
    }
}