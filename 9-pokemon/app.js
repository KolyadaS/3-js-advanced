"use strict";

const request1 = new XMLHttpRequest();
request1.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto");
request1.send();

request1.addEventListener("load", function () {
  const data = JSON.parse(this.responseText);
  console.log("URL: ${data.abilities[0].ability.url}");

  const request2 = new XMLHttpRequest();
  request2.open("GET", data.abilities[0].ability.url);
  request2.send();

  request2.addEventListener("load", function () {
    const data2 = JSON.parse(this.responseText);
    console.log(`DESCRIPTION: ${data2.effect_entries[1].effect}`);
  });
});
