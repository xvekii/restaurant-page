const meals = [
  { 
    meal: "Bowser's Flame-Grilled Koopa Burger", 
    desc: "🔥 Extra spicy with jalapeños and fire sauce — “So hot, it breathes fire!”" 
  },
  { 
    meal: "Yoshi's Eggcellent Breakfast Wrap", 
    desc: "🥚 Scrambled eggs, sausage, and green peppers in a spotted tortilla."
  },
  { 
    meal: "Luigi's Spaghetti Mansion", 
    desc: "🍝 Classic spaghetti with a 'haunted' garlic cream sauce and green pesto — served with a flashlight breadstick."
  },
  { 
    meal: "Thwomp Stomp Pancakes", 
    desc: "🥞 Triple-stack pancakes that 'drop heavy' with syrup and crushed berries."
  },
  { 
    meal: "Shy Guy Sliders", 
    desc: "🍔 Mini burgers wearing red pepper 'masks' and secret spicy aioli."
  },
];

const sides = [
  { 
    meal: "1-Up Mushroom Fries", 
    desc: "🍄 Truffle parmesan fries with a green mushroom-shaped dip cup — they *might* bring you back to life."
  },
  { 
    meal: "Toadstool Tater Tots", 
    desc: "🧀 Tater tots topped with melted cheddar and Toad's secret spice blend."
  },
];

const drinks = [
  { 
    meal: "Princess Peach Fizz", 
    desc: "🍑 Sparkling peach soda with a pink sugar rim — “Regal and refreshing!”"
  },
  { 
    meal: "Wario's Garlic Shake", 
    desc: "🧄 Vanilla milkshake with a (surprisingly good?) hint of roasted garlic — only for the bold."
  },
  { 
    meal: "Fire Flower Float", 
    desc: "🔥 Orange soda + vanilla ice cream + popping candy = explosive sweetness."
  },
];


const menuHeading = "Menu";
const mainTxt = "Super Mains";

export function createMenu() {
  // Menu
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("home-container", "menu-container");
  const menuTitle = document.createElement("h5");
  menuTitle.textContent = menuHeading;
  menuTitle.classList.add("home-greeting-title");
  
  menuContainer.appendChild(menuTitle);

  // Main
  const mainPara = document.createElement("p");
  mainPara.classList.add("open-p", "bold-font", "menu-section-titles");
  mainPara.textContent = mainTxt;
  menuContainer.appendChild(mainPara);

  // Meals
  meals.forEach(({meal, desc}) => {
    const mealPara = document.createElement("p");
    mealPara.classList.add("bold-font", "menu-p-margin", "text-align-left");
    const descPara = document.createElement("p");

    mealPara.textContent = `${meal}`;
    descPara.textContent = `${desc}`;

    menuContainer.appendChild(mealPara);
    menuContainer.appendChild(descPara);
  });

  // Sides
  const sidesTxt = "Level-Up Sides";
  const sidesPara = document.createElement("p");
  sidesPara.classList.add("open-p", "bold-font", "menu-section-titles");
  sidesPara.textContent = sidesTxt;
  menuContainer.appendChild(sidesPara);

  sides.forEach(({meal, desc}) => {
    const mealPara = document.createElement("p");
    mealPara.classList.add("bold-font", "menu-p-margin", "text-align-left");
    const descPara = document.createElement("p");

    mealPara.textContent = `${meal}`;
    descPara.textContent = `${desc}`;

    menuContainer.appendChild(mealPara);
    menuContainer.appendChild(descPara);
  });

  // Drinks
  const drinksTxt = "Power-Up Drinks";
  const drinksPara = document.createElement("p");
  drinksPara.classList.add("open-p", "bold-font", "menu-section-titles");
  drinksPara.textContent = drinksTxt;
  menuContainer.appendChild(drinksPara);

  drinks.forEach(({meal, desc}) => {
    const mealPara = document.createElement("p");
    mealPara.classList.add("bold-font", "menu-p-margin", "text-align-left");
    const descPara = document.createElement("p");

    mealPara.textContent = `${meal}`;
    descPara.textContent = `${desc}`;

    menuContainer.appendChild(mealPara);
    menuContainer.appendChild(descPara);
  });

  return menuContainer;
}