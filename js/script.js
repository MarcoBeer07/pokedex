let currentPokemon;
let allPokemons = [];

function init() {
    loadPokemon();

}

async function loadPokemon() {
    for (let i = 1; i < 10; i++) {

        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        allPokemons.push(currentPokemon);
        renderPokemonBox(i);
    }
}


function renderPokemonBox(i) {
    let pokemonMainBox = document.getElementById('pokemonMainBox')
    pokemonMainBox.innerHTML += renderPokemonHTML(i);
    setRightColorNormalView(i)
}


function renderPokemoBigView(i) {
    document.getElementById('pokemonBigViewBox').classList.remove('d-none')
    let bigViewImage = document.getElementById('pokemonBigView');
    let bigViewInfo = document.getElementById('pokemonBigViewInfo');

    bigViewImage.innerHTML = '';
    bigViewInfo.innerHTML = '';

    setRightColorBigView(i)

    bigViewImage.innerHTML += renderPokemonBigViewHTML(i);
    bigViewInfo.innerHTML += renderPokemonBigViewInfoHTML(i);
}

function hideBigView() {
    document.getElementById('pokemonBigViewBox').classList.add('d-none')
}



function setRightColorBigView(i) {
    let type = allPokemons[i - 1]['types'][0]['type']['name'];

    if (type == 'grass') {
        document.getElementById("pokemonBigView").style.backgroundColor = '#99C262'
    } else if (type == 'fire') {
        document.getElementById("pokemonBigView").style.backgroundColor = '#FF3030'
    } else if (type == 'water') {
        document.getElementById("pokemonBigView").style.backgroundColor = '#1C86EE'
    } else if (type == 'poison') {
        document.getElementById("pokemonBigView").style.backgroundColor = '#8a2be2'
    } else if (type == 'bug') {
        document.getElementById("pokemonBigView").style.backgroundColor = '#54FF9F'
    } else if (type == 'normal') {
        document.getElementById("pokemonBigView").style.backgroundColor = '#D2691E'
    } else if (type == 'electric') {
        document.getElementById("pokemonBigView").style.backgroundColor = '#B3EE3A'
    } else if (type == 'fairy') {
        document.getElementById("pokemonBigView").style.backgroundColor = '#C1CDCD'
    } else if (type == 'ground') {
        document.getElementById("pokemonBigView").style.backgroundColor = '#8B7E66'
    }
}

function setRightColorNormalView(i) {
    let type = currentPokemon['types'][0]['type']['name'];

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

async function searchPokemon(i) {


    let searchPokemon = document.getElementById('searchPokemon').value;
    searchPokemon = searchPokemon.toLowerCase();

    let url = `https://pokeapi.co/api/v2/pokemon/${searchPokemon}`;
    let response1 = await fetch(url);
    searchPokemon = await response1.json();

    let name = searchPokemon;
    name.toLowerCase;

    let pokemonMainBox = document.getElementById('pokemonMainBox')


    if (searchPokemon['name']) {
        console.log('++')
        pokemonMainBox.innerHTML = '';
        pokemonMainBox.innerHTML += renderPokemonHTML(searchPokemon);
    }

}