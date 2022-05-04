let currentPokemon;
let type = 'name'
async function loadPokemon() {
    for (let i = 1; i < 151; i++) {

        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();

        document.getElementById('pokemonMainBox').innerHTML += `
        <div id="pokemonBox" class="pokemon-box">
            <h1>${currentPokemon['name']}</h1>
            <h3>${currentPokemon['types'][0]['type'][type]}<h3>
            <img class="pokemon-box-img" src=${currentPokemon['sprites']['other']['dream_world']['front_default']}>

        </div>
        `
        setRightColor()

    }
}

function setRightColor(i) {

    if (type == 'grass') {
        document.getElementById('pokemonBox' + i).classList.add('pokemon-type-grass')
    } else if (type == 'fire') {
        document.getElementById('pokemonBox' + i).classList.add('pokemon-type-fire')
    }
}





function renderPokemonInfo() {
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
    document.getElementById('pokemonImage').src = currentPokemon['sprites']['front_shiny']

}