 const POKEMON_URL_INFO =  "https://pokeapi.co/api/v2/pokemon"

function getPokemonData(callback, pokemonName) {
  const request = new XMLHttpRequest();
  request.open("GET", `${POKEMON_URL_INFO}/${pokemonName}`);
  
  request.send();  
   
   request.addEventListener("load", function (e) {
    const { abilities } = JSON.parse(request.responseText);
    const newUrl = abilities[0].ability.url;
      
    const request1 = new XMLHttpRequest();
    request1.open("GET", newUrl);
    request1.send();
  
    request1.addEventListener("load", function (e) {
      const { effect_entries } = JSON.parse(request1.responseText);
   
      const { effect } = effect_entries[1];
      if(typeof callback == "function"){
        callback(effect);
      }
    });
  });
}

function consoleData(data) {
  console.log(data);
}

function alertData(data) {
	alert(data);
}

getPokemonData(consoleData, 'ditto', );
getPokemonData(alertData, 'pikachu', );


