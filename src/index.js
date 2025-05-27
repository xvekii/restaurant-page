import "./styles.css";
import marioImg from "./assets/images/mario.png";
const content = document.getElementById("content");
import { createHome } from "./home-tab.js";

const imgContainer = document.querySelector(".img-div-right");
const mainImg = document.createElement("img");
mainImg.src = marioImg;
mainImg.classList.add("background-img");

imgContainer.appendChild(mainImg);

const newHomeContainer = createHome();
content.appendChild(newHomeContainer);

