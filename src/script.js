document.querySelector('.paw').addEventListener('click', function() {
    const contenedorGrid = document.querySelector('.pelicula');
    const flecha = document.querySelector('.paw i'); // Seleccionamos el ícono dentro de la flecha

    // Alternar la clase 'oculto' en el contenedor de la cuadrícula
    contenedorGrid.classList.toggle('oculto');
    
    // Cambiar el símbolo de la flecha (arriba/abajo) según si se muestra u oculta
    if (contenedorGrid.classList.contains('oculto')) {
        flecha.classList.remove('fa-chevron-up');
        flecha.classList.add('fa-chevron-down');
    } else {
        flecha.classList.remove('fa-chevron-down');
        flecha.classList.add('fa-chevron-up');
    }
});
