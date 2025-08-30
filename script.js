//Alternar entre columnas y filas
function toggleLayout() {
  const row = document.getElementById("row-container");
  row.classList.toggle("stacked");
}

//Cambio el título del header
function changeHeaderTitle() {
  document.getElementById("header-title").innerText =
    "HTML & CSS: Curso práctico avanzado";
}

//Cambio el color de títulos y textos
let colorChanged = false;
function changeColors() {
  const titles = document.querySelectorAll(".column h2");
  const texts = document.querySelectorAll(".column p");

  if (!colorChanged) {
    titles.forEach((el) => {
      el.style.color = "darkred";
      el.style.fontFamily = "'Courier New', Courier, monospace";
    });
    texts.forEach((el) => {
      el.style.color = "darkblue";
      el.style.fontFamily = "'Courier New', Courier, monospace";
    });
    colorChanged = true;
  } else {
    titles.forEach((el) => {
      el.style.color = "black";
      el.style.fontFamily = "inherit";
    });
    texts.forEach((el) => {
      el.style.color = "black";
      el.style.fontFamily = "inherit";
    });
    colorChanged = false;
  }
}

//Agrego la imagen al footer
function addImage() {
  const container = document.getElementById("image-container");
  if (!container.querySelector("img")) {
    const img = document.createElement("img");
    img.src =
      "https://img.asmedia.epimg.net/resizer/v2/D5YILQKFI5GDPMC53FYUF4GXMA.jpg?auth=75cb4a71a4d58f17d5d5a26a7d3ac9fee50302f6fb00ab533521261c62daa758&width=1200&height=1200&focal=1198%2C828"; // ejemplo externo
    img.alt = "Imagen agregada";
    container.appendChild(img);
  }
}
