const carrusel = document.getElementById("carrusel");
const visibles = 5; // imágenes visibles
let indice = visibles;

// Guardamos los originales antes de clonar
const originales = Array.from(carrusel.children);
const figurasOriginales = originales.length;

// 👉 Clonar al inicio y al final
for (let i = 0; i < visibles; i++) {
  carrusel.appendChild(originales[i].cloneNode(true)); // clones al final
  carrusel.insertBefore(originales[figurasOriginales - 1 - i].cloneNode(true), carrusel.firstChild); // clones al inicio
}

let figuras = carrusel.children.length;

// Ajustar posición inicial
carrusel.style.transform = `translateX(${-indice * (100 / visibles)}%)`;

function mover(direccion) {
  indice += direccion;
  carrusel.style.transition = "transform 0.5s ease-in-out";
  carrusel.style.transform = `translateX(${-indice * (100 / visibles)}%)`;

  carrusel.addEventListener(
    "transitionend",
    () => {
      if (indice >= figuras - visibles) {
        indice = visibles;
        carrusel.style.transition = "none";
        carrusel.style.transform = `translateX(${-indice * (100 / visibles)}%)`;
      }
      if (indice < visibles) {
        indice = figuras - visibles * 2;
        carrusel.style.transition = "none";
        carrusel.style.transform = `translateX(${-indice * (100 / visibles)}%)`;
      }
    },
    { once: true }
  );
}

const btnSi = document.getElementById("si");
const btnNo = document.getElementById("no");

// Acción al hacer clic en "Sí"
btnSi.addEventListener("click", () => {
  alert("Gracias por tu buena decisión 🤗");
});

// Cuando el mouse pasa sobre "No", se mueve a un lugar aleatorio
btnNo.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * window.innerWidth - 100);
  const y = Math.floor(Math.random() * window.innerHeight - 100);
  btnNo.style.left = `${x}px`;
  btnNo.style.top = `${y}px`;
});

const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

