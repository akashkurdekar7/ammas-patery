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
    title: "Red velvet",
    type: "fruits",
    description: "Decadent, artisanal, premium indulgence awaits.",
  },
  {
    img: "./assets/red-velvet-Round-scaled-100x100.webp",
    title: "Red velvet",
    type: "fruits",
    description: "Decadent, artisanal, premium indulgence awaits.",
  },
  {
    img: "./assets/red-velvet-Round-scaled-100x100.webp",
    title: "Red velvet",
    type: "fruits",
    description: "Decadent, artisanal, premium indulgence awaits.",
  },
  {
    img: "./assets/red-velvet-Round-scaled-100x100.webp",
    title: "Red velvet",
    type: "fruits",
    description: "Decadent, artisanal, premium indulgence awaits.",
  },
  {
    img: "./assets/red-velvet-Round-scaled-100x100.webp",
    title: "Red velvet",
    type: "fruits",
    description: "Decadent, artisanal, premium indulgence awaits.",
  },
  {
    img: "./assets/red-velvet-Round-scaled-100x100.webp",
    title: "Red velvet",
    type: "fruits",
    description: "Decadent, artisanal, premium indulgence awaits.",
  },
  {
    img: "./assets/red-velvet-Round-scaled-100x100.webp",
    title: "Red velvet",
    type: "fruits",
    description: "Decadent, artisanal, premium indulgence awaits.",
  },
  {
    img: "./assets/red-velvet-Round-scaled-100x100.webp",
    title: "Red velvet",
    type: "fruits",
    description: "Decadent, artisanal, premium indulgence awaits.",
  },
  {
    img: "./assets/red-velvet-Round-scaled-100x100.webp",
    title: "Red velvet",
    type: "fruits",
    description: "Decadent, artisanal, premium indulgence awaits.",
  },
];

const renderCakes = () => {
  const container = document.getElementById("variety-cake");
  const container2 = document.getElementById("variety-cake2");

  cakes.forEach((cake) => {
    const cakecircle = document.createElement("div");
    cakecircle.classList.add("cake-circle");

    const img = document.createElement("img");
    img.classList.add("cake-img");

    const imgCaption = document.createElement("figcaption");
    imgCaption.classList.add("cake-caption");

    img.src = cake.img;
    img.alt = cake.figcation;
    imgCaption.textContent = cake.figcation;

    cakecircle.appendChild(img);
    cakecircle.appendChild(imgCaption);

    container.appendChild(cakecircle);
  });
};

const renderLongCakes = () => {
  const container2 = document.getElementById("variety-cake2");
  cakes.forEach((cake) => {
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
    container2.appendChild(cakeCircle);
  });
};

const renderSquareCakes = () => {
  const container3 = document.getElementById("variety-cake3");
  squareCakes.forEach((cake) => {
    const cakeSquare = document.createElement("div");
    cakeSquare.classList.add("cake-circle");

    const img = document.createElement("img");
    img.classList.add("cake-img");

    const cakeName = document.createElement("h1");
    cakeName.classList.add("cake-name");

    const type = document.createElement("h2");
    type.classList.add("cake-type");

    const description = document.createElement("p");
    description.classList.add("cake-description");

    img.src = cake.img;
    img.alt = cake.figcation;

    const imgCaption = document.createElement("figcaption");
    imgCaption.classList.add("cake-caption");
    imgCaption.textContent = cake.figcation;

    cakeSquare.appendChild(img);
    cakeSquare.appendChild(imgCaption);
    container3.appendChild(cakeSquare);
  });
};

window.onload = () => {
  renderCakes();
  renderLongCakes();
  renderSquareCakes();
};
