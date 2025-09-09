// Define el objeto grupo con una lista de 10 nombres
const grupo = {
  nombres: [
    "Juan Pérez",
    "María García",
    "Carlos López",
    "Ana Martínez",
    "Luis Rodríguez",
    "Sofia Hernández",
    "Miguel González",
    "Laura Díaz",
    "David Sánchez",
    "Elena Morales"
  ]
};

// Crea la función imprimirNombres
function imprimirNombres() {
  // Recorre la lista de nombres y los muestra en la consola uno a uno
  grupo.nombres.forEach(nombre => {
    console.log(nombre);
  });

  // También muestra los nombres en la página web
  const lista = document.createElement('ul');
  grupo.nombres.forEach(nombre => {
    const item = document.createElement('li');
    item.textContent = nombre;
    lista.appendChild(item);
  });
  document.body.appendChild(lista);
}

// Llama a la función para mostrar todos los nombres
imprimirNombres();
