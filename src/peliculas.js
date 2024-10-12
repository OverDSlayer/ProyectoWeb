const iPlay = document.querySelectorAll(".play");

iPlay.forEach(element => {
    element.addEventListener('click', ()=>{
        alert('Viendo peli...')
    })
})


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


const carousel = document.querySelector(".carousel");
const imageContainer = document.querySelector(".image-container");
const images = document.querySelectorAll(".image-container img");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;
const imageWidth = images[0].clientWidth;

function slide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  imageContainer.style.transform = `translateX(-${
    currentIndex * imageWidth
  }px)`;
}

prevButton.addEventListener("click", () => slide(-1));
nextButton.addEventListener("click", () => slide(1));

// Auto deslizar (ajusta el intervalo según tus preferencias)
setInterval(() => slide(1), 3000);