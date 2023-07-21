function getPokemonData() {
  const request = new XMLHttpRequest();
  request.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto");
  
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
      console.log(effect) ;
    });
  });
}

getPokemonData();
