//PANTALLA DE CARGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
const redirectBtn = document.getElementById("redirectBtn");
    const loadingScreen = document.getElementById("loadingScreen");

    redirectBtn.addEventListener("click", () => {
    // Ocultar el botón inicial
    redirectBtn.style.display = "none";

    // Mostrar la pantalla de carga
    loadingScreen.style.display = "flex";

    // Redirigir tras unos segundos
    setTimeout(() => {
        window.location.href = "../pages/nav.html";
    }, 3000); // Espera de 3 segundos
    });