const setupDropdown = (triggerId, dropdownId) => {
  const trigger = document.getElementById(triggerId);
  const dropdown = document.getElementById(dropdownId);

  trigger.addEventListener("mouseover", () => {
    dropdown.style.display = "block";
    dropdown.style.opacity = "1";
  });

  dropdown.addEventListener("mouseleave", () => {
    dropdown.style.display = "none";
  });

  dropdown.addEventListener("mouseover", () => {
    dropdown.style.display = "block";
    dropdown.style.opacity = "1";
  });

  document.addEventListener("click", (event) => {
    if (!trigger.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.style.display = "none";
    }
  });
};
setupDropdown("cake", "cakedp");
setupDropdown("snacks", "snackdp");
setupDropdown("dessert", "dessertdp");
setupDropdown("about", "aboutdp");

const cakes = [
  {
    img: "./assets/red-velvet-Round-scaled-100x100.webp",
    figcation: "Red velvet",
  },
  {
    img: "./assets/red-velvet-Round-scaled-100x100.webp",
    figcation: "Red velvet",
  },
  {
    img: "./assets/red-velvet-Round-scaled-100x100.webp",
    figcation: "Red velvet",
  },
  {
    img: "./assets/red-velvet-Round-scaled-100x100.webp",
    figcation: "Red velvet",
  },
  {
    img: "./assets/red-velvet-Round-scaled-100x100.webp",
    figcation: "Red velvet",
  },
  {
    img: "./assets/red-velvet-Round-scaled-100x100.webp",
    figcation: "Red velvet",
  },
  {
    img: "./assets/red-velvet-Round-scaled-100x100.webp",
    figcation: "Red velvet",
  },
  {
    img: "./assets/red-velvet-Round-scaled-100x100.webp",
    figcation: "Red velvet",
  },
  {
    img: "./assets/red-velvet-Round-scaled-100x100.webp",
    figcation: "Red velvet",
  },
];

const squareCakes = [
  {
    img: "./assets/red-velvet-Round-scaled-100x100.webp",
    name: "Red Velvet",
    type: "Fruits",
    description: "Decadent, artisanal, premium indulgence awaits.",
  },
  {
    img: "./assets/exotic-fruits.webp", // Replace with actual image path
    name: "Exotic Fruits",
    type: "Fruits",
    description: "Whimsical 1st Birthday Cake.",
  },
  {
    img: "./assets/mousse-cheese.webp", // Replace with actual image path
    name: "Mousse & Cheese",
    type: "Cheese",
    description: "Whipped indulgence for gourmet palates.",
  },
  {
    img: "./assets/premium-cake.webp", // Replace with actual image path
    name: "Premium Cakes",
    type: "Sponge",
    description: "Decadent, artisanal, premium indulgence awaits.",
  },
  {
    img: "./assets/regular-cake.webp", // Replace with actual image path
    name: "Regular Cakes",
    type: "Chocolate",
    description: "Delicious classic cakes for everyone.",
  },
  {
    img: "./assets/something-special.webp", // Replace with actual image path
    name: "Something Special",
    type: "Rainbow",
    description: "Unleash extraordinary experiences with innovation.",
  },
  {
    img: "./assets/puff.webp", // Replace with actual image path
    name: "Puff",
    type: "Veg & Non Veg",
    description: "Plush Comfort in Every Puff.",
  },
  {
    img: "./assets/burger.webp", // Replace with actual image path
    name: "Burger",
    type: "Burger",
    description: "Ultimate Burger's, Efficiency Redefined Bliss.",
  },
  {
    img: "./assets/fudge-brownie.webp", // Replace with actual image path
    name: "Fudge Brownie",
    type: "Sponge",
    description: "Satisfy cravings with delectable Fudge Brownie.",
  },
];

const renderCakes = (cakesArray, containerId) => {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // Clear previous content

  cakesArray.forEach((cake) => {
    const cakeCircle = document.createElement("div");
    cakeCircle.classList.add("cake-circle");

    const img = document.createElement("img");
    img.classList.add("cake-img");
    img.src = cake.img;
    img.alt = cake.figcation;

    const imgCaption = document.createElement("figcaption");
    imgCaption.classList.add("cake-caption");
    imgCaption.textContent = cake.figcation;

    cakeCircle.appendChild(img);
    cakeCircle.appendChild(imgCaption);
    container.appendChild(cakeCircle);
  });
};

// Render all cake types
const renderLongCakes = () => renderCakes(cakes, "variety-cake2");
const renderCakes2 = () => renderCakes(cakes, "variety-cake4");
const renderSquareCakes = () => {
  const container3 = document.getElementById("variety-cake3");
  container3.innerHTML = ""; // Clear the container before rendering

  squareCakes.forEach((cake) => {
    const cakeSquare = document.createElement("div");
    cakeSquare.classList.add("squareCake");

    const img = document.createElement("img");
    img.classList.add("square-img"); // Optional: add a class for styling
    img.src = cake.img;
    img.alt = cake.name;

    const cakeDetails = document.createElement("div");
    const cakeName = document.createElement("h1");
    cakeName.classList.add("cake-name");
    cakeName.textContent = cake.name;

    const type = document.createElement("h3"); // Change to h3 as per your HTML
    type.classList.add("cake-type");
    type.textContent = cake.type;

    const description = document.createElement("p");
    description.classList.add("cake-description");
    description.textContent = cake.description;

    cakeDetails.appendChild(cakeName);
    cakeDetails.appendChild(type);
    cakeDetails.appendChild(description);

    cakeSquare.appendChild(img);
    cakeSquare.appendChild(cakeDetails);
    container3.appendChild(cakeSquare);
  });
};

const lastCake = [
  {
    img: "./assets/last-cake.webp", // Replace with actual image path
    name: "Special Cake",
    type: "Exclusive",
    description: "A limited edition cake for special occasions.",
  },
  {
    img: "./assets/last-cake.webp", // Replace with actual image path
    name: "Special Cake",
    type: "Exclusive",
    description: "A limited edition cake for special occasions.",
  },
  {
    img: "./assets/last-cake.webp", // Replace with actual image path
    name: "Special Cake",
    type: "Exclusive",
    description: "A limited edition cake for special occasions.",
  },
  {
    img: "./assets/last-cake.webp", // Replace with actual image path
    name: "Special Cake",
    type: "Exclusive",
    description: "A limited edition cake for special occasions.",
  },
  {
    img: "./assets/last-cake.webp", // Replace with actual image path
    name: "Special Cake",
    type: "Exclusive",
    description: "A limited edition cake for special occasions.",
  },
  {
    img: "./assets/last-cake.webp", // Replace with actual image path
    name: "Special Cake",
    type: "Exclusive",
    description: "A limited edition cake for special occasions.",
  },
];
const renderLastCake = () => {
  const container = document.getElementById("variety-cake5");
  container.innerHTML = ""; // Clear the container before rendering

  lastCake.forEach((cake) => {
    const cakeSquare = document.createElement("div");
    cakeSquare.classList.add("squareCake");

    const img = document.createElement("img");
    img.classList.add("square-img"); // Optional: add a class for styling
    img.src = cake.img;
    img.alt = cake.name;

    const cakeDetails = document.createElement("div");
    const cakeName = document.createElement("h1");
    cakeName.classList.add("cake-name");
    cakeName.textContent = cake.name;

    const type = document.createElement("h3");
    type.classList.add("cake-type");
    type.textContent = cake.type;

    const description = document.createElement("p");
    description.classList.add("cake-description");
    description.textContent = cake.description;

    cakeDetails.appendChild(cakeName);
    cakeDetails.appendChild(type);
    cakeDetails.appendChild(description);

    cakeSquare.appendChild(img);
    cakeSquare.appendChild(cakeDetails);
    container.appendChild(cakeSquare);
  });
};

window.onload = () => {
  renderCakes(cakes, "variety-cake"); // Regular cakes
  renderLongCakes(); // Long cakes
  renderSquareCakes(); // Square cakes
  renderCakes2(); // Another variation of cakes
  renderLastCake();
};
