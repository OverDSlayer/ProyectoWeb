document.querySelector('.paw').addEventListener('click', function () {
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
  imageContainer.style.transform = `translateX(-${currentIndex * imageWidth
    }px)`;
}

prevButton.addEventListener("click", () => slide(-1));
nextButton.addEventListener("click", () => slide(1));

// Auto deslizar (ajusta el intervalo según tus preferencias)
setInterval(() => slide(1), 3000);

// Obtener las peliculas del back-end
async function obtenerPeliculas(){
  const data = await fetch('http://localhost:3000/peliculas');
  const result = await data.json();
  result.map((dato) => {
    crearPelis(dato.id,dato.urlImg);
  });
}

async function obtenerCuatroPeliculas(){
  const data = await fetch('http://localhost:3000/for-peliculas');
  const result = await data.json();
  result.map((dato) => {
    crearCuatroPelis(dato.id,dato.urlImg);
  });
}

function crearCuatroPelis(id, img){
  const $recomendado = document.querySelector('.recomendado');
  const $peli_oculto = document.querySelector('.grid-container');

  const $grid_item = document.createElement('div');
  $grid_item.classList.add('grid-item');
  const $img = document.createElement('img');
  $img.setAttribute('src', img);
  const $play = document.createElement('div');
  $play.classList.add('play');
  const $i = document.createElement('i');
  $i.setAttribute('class', 'fa-solid fa-circle-play')
  const $span = document.createElement('span');
  $span.textContent = 'PLAY';
  $play.append($i);
  $play.append($span);
  $grid_item.append($img);
  $grid_item.append($play);
  $peli_oculto.append($grid_item);

  $play.addEventListener('click', ()=>{
    localStorage.setItem('id', id);
    // location.href = '' // pagina para ver peliculas
  })
}



function crearPelis(id, img){
  const $recomendado = document.querySelector('.recomendado');
  const $peli_oculto = document.querySelector('.pelicula');

  const $grid_item = document.createElement('div');
  $grid_item.classList.add('grid-item');
  const $img = document.createElement('img');
  $img.setAttribute('src', img);
  const $play = document.createElement('div');
  $play.classList.add('play');
  const $i = document.createElement('i');
  $i.setAttribute('class', 'fa-solid fa-circle-play')
  const $span = document.createElement('span');
  $span.textContent = 'PLAY';
  $play.append($i);
  $play.append($span);
  $grid_item.append($img);
  $grid_item.append($play);
  $peli_oculto.append($grid_item);

  $play.addEventListener('click', ()=>{
    localStorage.setItem('id', id);
    // location.href = '' // pagina para ver peliculas
  })
}

obtenerPeliculas();
obtenerCuatroPeliculas();