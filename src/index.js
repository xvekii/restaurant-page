import "./styles.css";
import marioImg from "./assets/images/mario.png";

const imgContainer = document.querySelector(".img-div-right");
const mainImg = document.createElement("img");
mainImg.src = marioImg;
mainImg.classList.add("background-img");

imgContainer.appendChild(mainImg);

