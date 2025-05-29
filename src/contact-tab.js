const contactTitle = "It's-A-me!";
const contactTxt = "Contact:";
const emailTxt = "mario@nin10do.com";
const openInfo = "We're open every day, except major holidays."
const phoneTxt = "1 (555) 555-5555"

export function addContact() {
  // It's-A-Me!
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("home-container");
  const contactHeading = document.createElement("h5");
  contactHeading.textContent = contactTitle;
  contactHeading.classList.add("home-greeting-title");
  
  contactContainer.appendChild(contactHeading);
  
  // Contact
  const contactPara = document.createElement("p");
  contactPara.classList.add("open-p", "bold-font");
  contactPara.textContent = contactTxt;
  contactContainer.appendChild(contactPara);

  const emailTxtPara = document.createElement("p");
  emailTxtPara.classList.add("regular-font");
  emailTxtPara.textContent = emailTxt;
  contactContainer.appendChild(emailTxtPara);

  const phoneTxtPara = document.createElement("p");
  phoneTxtPara.classList.add("regular-font");
  phoneTxtPara.textContent = phoneTxt;
  contactContainer.appendChild(phoneTxtPara);

  // Open info
  const openPara = document.createElement("p");
  openPara.classList.add("open-p", "bold-font", "text-align-center");
  openPara.textContent = openInfo;
  contactContainer.appendChild(openPara);

  return contactContainer;
}