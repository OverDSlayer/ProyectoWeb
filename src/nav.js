const configButton = document.getElementById("treebars");
const boxConfig = document.querySelector(".box_config");

const icon_bar = document.querySelector(".fa-bars");
const tree_bars_red = document.querySelector(".tree_bars_red");
let viewBoxConfig = false;

configButton.addEventListener("click", (event) => {
  event.stopPropagation();
  viewBoxConfig = !viewBoxConfig;
  boxConfig.style.display = viewBoxConfig ? "block" : "none";
  icon_bar.style.color = viewBoxConfig ? "white" : "red";
});

document.addEventListener("click", (event) => {
  if (viewBoxConfig && !boxConfig.contains(event.target)) {
    viewBoxConfig = false;
    boxConfig.style.display = "none";
  }
});

const userButton = document.getElementById("arrowUserBar");
const boxUser = document.querySelector(".box_user");
let viewBoxUser = false;

userButton.addEventListener("click", (event) => {
  event.stopPropagation();
  viewBoxUser = !viewBoxUser;
  boxUser.style.display = viewBoxUser ? "block" : "none";
});

document.addEventListener("click", (event) => {
  if (viewBoxUser && !boxUser.contains(event.target)) {
    viewBoxUser = false;
    boxUser.style.display = "none";
  }
});
