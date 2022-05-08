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
            <h1>${allPokemons[i-1]['name']}</h1>
            <h3>${allPokemons[i-1]['types'][0]['type']['name']}<h3>
            <img class="pokemon-big-view-img" src=${allPokemons[i-1]['sprites']['other']['dream_world']['front_default']}>
        </div>
        `
}

function renderPokemonBigViewInfoHTML(i) {
    return `
        <div>
            <h1>About</h1>
            <p>Height: ${allPokemons[i-1]['height']}<p>
            <p>Weight: ${allPokemons[i-1]['weight']}<p>
            <p>Abilitie: ${allPokemons[i-1]['abilities'][0]['ability']['name']}<p>
            <h1>Base Stats</h1>
            <p>HP: ${allPokemons[i-1]['height']}<p>
            <p>Attack: ${allPokemons[i-1]['height']}<p>
            <p>Defense: ${allPokemons[i-1]['height']}<p>
            <p>Special-Attack: ${allPokemons[i-1]['height']}<p>
            <p>Special-Defense: ${allPokemons[i-1]['height']}<p>
            <p>Speed: ${allPokemons[i-1]['height']}<p>

        </div>
        `
}