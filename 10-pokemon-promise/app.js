"use strict";

function getData(url, errorMessage) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status}: ${errorMessage}`);
    }
    return response.json();
  });
}

getData("https://pokeapi.co/api/v2/pokemon/ditto", "Cannot get pokemon info")
  .then((data) => {
    return getData(
      `${data.abilities[0].ability.url}`,
      "Cannot get pokemon description"
    );
  })
  .then((data) => console.log(data.effect_entries[1].effect))
  .catch((error) => console.log(error));
