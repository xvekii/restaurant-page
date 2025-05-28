const welcomeHeading = "Welcome!";
const openTxt = "Open:";
const hours = [
    { day: "Sun", time: "8am \u2013 8pm" },
    { day: "Mon", time: "6am \u2013 6pm" },
    { day: "Tue", time: "6am \u2013 6pm" },
    { day: "Wed", time: "6am \u2013 6pm" },
    { day: "Thu", time: "6am \u2013 10pm" },
    { day: "Fri", time: "6am \u2013 10pm" },
    { day: "Sat", time: "8am \u2013 10pm" },
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