const express = require("express");
const router = express.Router();
const axios = require("axios");

var pokePics = [];

function fetchPokeImages(pokemon) {
  const url = pokemon.url;
  axios
    .get(url)
    .then((response) => response.data)
    .then(function (pokeData) {
      let image =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
        pokeData.id +
        ".png";
      pokePics.push({
        name: pokemon.name.replace(
          pokemon.name[0],
          pokemon.name[0].toUpperCase()
        ),
        pic: image,
      });
    });
}

function fetchPokemon(url) {
  axios
    .get(url)
    .then((response) => response.data)
    .then(function (allpokemon) {
      allpokemon.results.forEach((pokemon) => {
        fetchPokeImages(pokemon);
      });
    });
}

const url = "http://pokeapi.co/api/v2/pokemon/?limit=151";
fetchPokemon(url);

router.post("/", (req, res) => {
  const count = req.body.count;

  if (pokePics === [])
    throw new Error(
      "Trouble retrieving images from API; please try again later."
    );
  try {
    if (count + 25 < pokePics.length) {
      return res.json({
        images: pokePics.slice(count, count + 25),
        next: true,
      });
    }

    return res.json({
      images: pokePics.slice(count, pokePics.length),
      next: false,
    });
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = router;
