// Seleccionamos ambos botones
const btnListaAgregado = document.getElementById("btnListaAgregado");
const btnListaAgregar = document.getElementById("btnListaAgregar");

// Agregamos el evento click al primer botón
btnListaAgregado.addEventListener("click", function() {
    btnListaAgregado.style.display = "none";  // Oculta el botón "Lista Agregada"
    btnListaAgregar.style.display = "block";  // Muestra el botón "Agregar a Lista"
});

// Agregamos el evento click al segundo botón
btnListaAgregar.addEventListener("click", function() {
    btnListaAgregar.style.display = "none";  // Oculta el botón "Agregar a Lista"
    btnListaAgregado.style.display = "block";  // Muestra el botón "Lista Agregada"
});

document.getElementById('ventanaEpisodios').style.display = 'none';
document.getElementById('ventanaRelacionados').style.display = 'none';
document.getElementById('ventanaReparto').style.display = 'none';

// Función para mostrar y ocultar ventanas
// Función para mostrar y ocultar ventanas
// Función para mostrar y ocultar ventanas
// Función para mostrar la ventana seleccionada
function mostrarVentana(id) {
    const ventanas = document.querySelectorAll('.capitulo.ventana');
    ventanas.forEach(ventana => {
        ventana.style.display = 'none'; // Ocultar todas las ventanas
    });

    const ventanaSeleccionada = document.getElementById(id);
    if (ventanaSeleccionada) {
        ventanaSeleccionada.style.display = 'block'; // Mostrar la ventana seleccionada
    }
}

// Mostrar "Episodios" por defecto
document.getElementById('ventanaEpisodios').style.display = 'block';

// Datos dinámicos
const episodiosData = [
    { titulo: "Episodio 1", descripcion: "Descripción del episodio 1" },
    { titulo: "Episodio 2", descripcion: "Descripción del episodio 2" },
    { titulo: "Episodio 3", descripcion: "Descripción del episodio 3" },
    { titulo: "Episodio 4", descripcion: "Descripción del episodio 4" }
];
const relacionadosData = [
    { titulo: "Película A", descripcion: "Sinopsis de la película A" },
    { titulo: "Película B", descripcion: "Sinopsis de la película B" },
    { titulo: "Película C", descripcion: "Sinopsis de la película C" },
    { titulo: "Película D", descripcion: "Sinopsis de la película D" },
    { titulo: "Película E", descripcion: "Sinopsis de la película E" },
];
const repartoData = [
    { nombre: "Actor 1", rol: "Personaje 1" },
    { nombre: "Actor 2", rol: "Personaje 2" }
];

// Función para cargar contenido dinámico
function cargarContenido() {
    const contenidoEpisodios = document.getElementById("contenidoEpisodios");
    const contenidoRelacionados = document.getElementById("contenidoRelacionados");
    const contenidoReparto = document.getElementById("contenidoReparto");

    // Agregar episodios
    episodiosData.forEach((episodio) => {
        const div = document.createElement("div");
        div.classList.add("item");
        div.innerHTML = `<h3>${episodio.titulo}</h3><p>${episodio.descripcion}</p>`;
        contenidoEpisodios.appendChild(div);
    });

    // Agregar relacionados
    relacionadosData.forEach((relacionado) => {
        const div = document.createElement("div");
        div.classList.add("item");
        div.innerHTML = `<h3>${relacionado.titulo}</h3><p>${relacionado.descripcion}</p>`;
        contenidoRelacionados.appendChild(div);
    });

    // Agregar reparto
    repartoData.forEach((reparto) => {
        const div = document.createElement("div");
        div.classList.add("item");
        div.innerHTML = `<h3>${reparto.nombre}</h3><p>${reparto.rol}</p>`;
        contenidoReparto.appendChild(div);
    });
}

// Cargar el contenido al cargar la página
window.onload = cargarContenido;

