const welcomeHeading = "Welcome!";
const openTxt = "Open:";
const hours = [
    { day: "Sun", time: "8 a.m. \u2013 8 p.m." },
    { day: "Mon", time: "6 a.m. \u2013 6 p.m." },
    { day: "Tue", time: "6 a.m. \u2013 6 p.m." },
    { day: "Wed", time: "6 a.m. \u2013 6 p.m." },
    { day: "Thu", time: "6 a.m. \u2013 10 p.m." },
    { day: "Fri", time: "6 a.m. \u2013 10 p.m." },
    { day: "Sat", time: "8 a.m. \u2013 10 p.m." },
  ];
const locationBoldTxt = "Location:";
const locationTxt = "4600 150th Ave NE, Redmond, WA";


export function createHome() {
  // Welcome
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");
  const greeting = document.createElement("h5");
  greeting.textContent = welcomeHeading;
  greeting.classList.add("home-greeting-title");
  
  homeContainer.appendChild(greeting);
  
  // Open
  const openPara = document.createElement("p");
  openPara.classList.add("open-p", "bold-font");
  openPara.textContent = openTxt;
  homeContainer.appendChild(openPara);


  // Working hours
  hours.forEach(({ day, time }) => {
    let row = document.createElement("p");
    
    let daySpan = document.createElement("span");
    daySpan.classList.add("day-span");
    daySpan.textContent = `${day}: `;

    let timeSpan = document.createElement("span");
    timeSpan.classList.add("regular-font");
    timeSpan.textContent = `${time}`;

    row.appendChild(daySpan);
    row.appendChild(timeSpan);

    homeContainer.appendChild(row);
  });

  // Location
  const locationPara = document.createElement("p");
  locationPara.classList.add("open-p", "bold-font");
  locationPara.textContent = locationBoldTxt;
  homeContainer.appendChild(locationPara);

  const locationTxtPara = document.createElement("p");
  locationTxtPara.classList.add("regular-font");
  locationTxtPara.textContent = locationTxt;
  homeContainer.appendChild(locationTxtPara);

  return homeContainer;
}