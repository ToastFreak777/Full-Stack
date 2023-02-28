const isCacheSupported = "caches" in window;
let cacheName = "";
const URL = "https://pokeapi.co/api/v2/pokemon/";
let searchUrl;

const form = document.querySelector(".form");
const searchBtn = document.querySelector("#search-btn");
const pokemonImage = document.querySelector(".picture");
const pokemonCardTitle = document.querySelector(".title");
const pokemonCardTypes = document.querySelector(".types");

searchBtn.addEventListener("click", (e) => {
  form.classList.toggle("hide");
  form.classList.toggle("activate");
  document.querySelector("#search-btn").classList.toggle("hide");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  cacheName = e.target.elements.item(0).value.toLowerCase();
  searchUrl = URL + cacheName;
  e.target.elements.item(0).value = "";

  caches
    .has(cacheName)
    .then((containsCache) => {
      if (!containsCache) return cachePokemonData();
    })
    .then(() => {
      createPokemonCard();
    });
});

function createPokemonCard() {
  getPokemonData().then((data) => {
    // console.log(data);
    createCard(data);
  });
}

function createCard({ name, sprites, types }) {
  console.log(name, sprites, types);
  pokemonImage.src = sprites.other["official-artwork"].front_default;
  pokemonCardTitle.textContent = name;
  pokemonCardTypes.innerHTML = "";
  types.forEach(({ type: { name } }) => {
    pokemonCardTypes.textContent += name + "\t";
  });
}

function cachePokemonData() {
  console.log("Creating cache");
  return caches
    .open(cacheName)
    .then((cache) => cache.add(searchUrl))
    .catch((err) => {
      console.log(err);
    });
}

function getPokemonData() {
  return caches
    .open(cacheName)
    .then((cache) => cache.match(searchUrl))
    .then((res) => res.json());
}
