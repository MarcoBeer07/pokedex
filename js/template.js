function renderPokemonHTML(i) {
    return `
        <div onclick="renderPokemoBigView(${i})" id="pokemonBox${i}" class="pokemon-box">
            <h1>${currentPokemon['name']}</h1>
            <h3>${currentPokemon['types'][0]['type']['name']}<h3>
            <img class="pokemon-box-img" src=${currentPokemon['sprites']['other']['dream_world']['front_default']}>
        </div>
        `
}

function renderPokemonBigViewHTML(i) {
    return `
        <div>
            <h1>${currentPokemon['name']}</h1>
            <h3>${currentPokemon['types'][0]['type']['name']}<h3>
            <img class="pokemon-big-view-img" src=${currentPokemon['sprites']['other']['dream_world']['front_default']}>
        </div>
        `
}

function renderPokemonBigViewInfoHTML(i) {
    return `
        <div>
            <h1>About</h1>
            <h3>${currentPokemon['types'][0]['type']['name']}<h3>
            <h1>Base Stats</h1>
        </div>
        `
}