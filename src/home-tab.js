const welcomeHeading = "Welcome!";

export function createHome() {
  const homeContainer = document.createElement("div");
  const greeting = document.createElement("h5");
  greeting.textContent = welcomeHeading;
  greeting.classList.add("home-greeting-title");
  
  homeContainer.appendChild(greeting);

  return homeContainer;
}