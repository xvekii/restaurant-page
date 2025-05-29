import "./styles.css";
import marioImg from "./assets/images/mario.png";
import { createHome } from "./home-tab.js";
import { createMenu } from "./menu-tab.js";
import { createContact } from "./contact-tab.js";

const content = document.getElementById("content");
const menuBtn = document.querySelector(".menu-btn");
const homeBtn = document.querySelector(".home-btn");
const contactBtn = document.querySelector(".contact-btn");

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
  const newMenuContainer = createMenu();
  content.appendChild(newMenuContainer);
});

contactBtn.addEventListener("click", () => {
  clearContent();
  const newContactContainer = createContact();
  content.appendChild(newContactContainer);
});


renderInitialHomeTab();