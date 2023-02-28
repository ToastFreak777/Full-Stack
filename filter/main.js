const app = document.querySelector("#app");
const slider = document.querySelector("#slider");
const slider_value = document.querySelector(".filter");

const maxCards = slider.max;

const createCards = (filter) => {
  for (let i = 0; i <= maxCards - filter; i++) {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = i;
    app.appendChild(card);
  }
};

createCards(0);
slider.addEventListener("input", (e) => {
  slider_value.textContent = e.target.value;

  app.innerHTML = "";
  createCards(maxCards - Number(e.target.value));
});
