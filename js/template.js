function renderPokemonHTML(i) {
    return `
        <div id="pokemonBox${i}" class="pokemon-box">
            <h1>${currentPokemon['name']}</h1>
            <h3>${currentPokemon['types'][0]['type']['name']}<h3>
            <img class="pokemon-box-img" src=${currentPokemon['sprites']['other']['dream_world']['front_default']}>
        </div>
        `
}