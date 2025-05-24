import "./styles.css";
import bgImg from "./assets/images/background.png";

const background = document.createElement("img");
background.src = bgImg;
background.classList.add("background-img");

document.body.appendChild(background);

