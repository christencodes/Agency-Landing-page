`use strict`;

const hamburger = document.querySelector(".hamburger-container");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", (element) => {
  if (screen.width <= 768) menu.classList.toggle("hidden");
});
