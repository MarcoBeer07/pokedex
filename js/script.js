let currentPokemon;
async function loadPokemon() {
    for (let i = 1; i < 151; i++) {

        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        renderPokemonBox(i);
    }
}

function renderPokemonBox(i) {
    let pokemonMainBox = document.getElementById('pokemonMainBox')
    let type = currentPokemon['types'][0]['type']['name'];

    pokemonMainBox.innerHTML += renderPokemonHTML(i);

    if (type == 'grass') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#99C262'
    } else if (type == 'fire') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#FF3030'
    } else if (type == 'water') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#1C86EE'
    } else if (type == 'poison') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#8a2be2'
    } else if (type == 'bug') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#54FF9F'
    } else if (type == 'normal') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#D2691E'
    } else if (type == 'electric') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#B3EE3A'
    } else if (type == 'fairy') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#C1CDCD'
    } else if (type == 'ground') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#8B7E66'
    }
}

function pokemonBigView() {

}

async function renderPokemoBigView(i) {

    document.getElementById('pokemonBigViewBox').classList.remove('d-none')
    let bigViewImage = document.getElementById('pokemonBigView');
    let bigViewInfo = document.getElementById('pokemonBigViewInfo');

    bigViewImage.innerHTML = '';
    bigViewInfo.innerHTML = '';


    bigViewImage.innerHTML += renderPokemonBigViewHTML(i);
    bigViewInfo.innerHTML += renderPokemonBigViewInfoHTML(i);

}

function hideBigView() {
    document.getElementById('pokemonBigViewBox').classList.add('d-none')

}