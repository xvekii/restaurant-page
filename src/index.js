import "./styles.css";
import marioImg from "./assets/images/mario.png";
const content = document.getElementById("content");
import { createHome } from "./home-tab.js";
import { addMeals } from "./menu-tab.js";
const menuBtn = document.querySelector(".menu-btn");
const homeBtn = document.querySelector(".home-btn");

const imgContainer = document.querySelector(".img-div-right");
const mainImg = document.createElement("img");
mainImg.src = marioImg;
mainImg.classList.add("background-img");

imgContainer.appendChild(mainImg);

function renderInitialHomeTab() {
  const newHomeContainer = createHome();
  content.appendChild(newHomeContainer);
}

function clearContent() {
  content.replaceChildren();
}

homeBtn.addEventListener("click", () => {
  clearContent();
  const newHomeContainer = createHome();
  content.appendChild(newHomeContainer);
});

menuBtn.addEventListener("click", () => {
  clearContent();
  const newMenuContainer = addMeals();
  content.appendChild(newMenuContainer);
});

renderInitialHomeTab();