function getPokemonData(name) {
  const url = "https://pokeapi.co/api/v2/pokemon"
  return fetch(`${url}/${name}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Is error ${res.status}`).message;
      }
      return res.json();
    })
    .then(({ abilities }) => {
      console.log(abilities[0].ability.url);
      return fetch(`${abilities[0].ability.url}`);
    })
    .then((res) => res.json())
    .then(({ effect_entries }) => {
      return effect_entries[0].effect;
    })
    .catch((error) => console.log(error));
}

function consoleData(data) {
  console.log(data);
}

function alertData(data) {
  alert(data);
}

getPokemonData("ditto").then(consoleData).catch(console.error);
getPokemonData("pikachu").then(alertData).catch(console.error);
