function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      "Capriciossa",
      "Tomato sauce, Mozarella, Tomato, Ham, Basil"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Margarita",
      "Tomato sauce, Mozarella, Basil"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Vegetable",
      "Tomato sauce, Mozarella, Season Vegetables, Basil"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Al Tono",
      "Tomato sauce, Shrimps, Onion, Olives, Basil"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Funghi",
      "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Pomodoro",
      "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Quatro formagio",
      "Tomato sauce, Mozarella, Gorgonzola, Edamer, Parmesan, Basil"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Mexicana",
      "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli"
    )
  );

  return menu;
}

function createMenuItem(name, description) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodName = document.createElement("h2");
  foodName.textContent = name;

  const foodDescription = document.createElement("p");
  foodDescription.textContent = description;

  const foodImage = document.createElement("img");
  foodImage.src = `images/pizzas/${name.toLowerCase()}.png`;
  foodImage.alt = `${name}`;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;
