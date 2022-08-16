function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const chefImage = document.createElement("img");
  chefImage.src = "images/chef.png";
  chefImage.alt = "Chef";

  home.appendChild(createParagraph("Najbolja pizza iz drvene peći u gradu Mostaru."));
  home.appendChild(createParagraph("Pravljeno sa strašću od 2001."));
  home.appendChild(chefImage);
  home.appendChild(createParagraph("Posjetite nas i uvjerite se u kvalitetu okusa."));

  return home;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;
