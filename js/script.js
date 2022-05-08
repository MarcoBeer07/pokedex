let currentPokemon;
let allPokemons = [];

function init() {
    loadPokemon();
    showSearchBar();

}

async function loadPokemon() {
    for (let i = 1; i < 151; i++) {

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


function showSearchBar(j) {
    document.getElementById('searchBar').innerHTML = `
        <button onclick="searchPokemon(${j})"><b>Search Pokemon</b></button>
        <input type="text" id="searchPokemon" onkeydown="searchPokemon(${j})">
        `
}

function searchPokemon(i) {
    let pokemonMainBox = document.getElementById('pokemonMainBox')
    let searchPokemon = document.getElementById('searchPokemon').value;
    searchPokemon = searchPokemon.toLowerCase();

    pokemonMainBox.innerHTML = '';

    for (let j = 0; j < allPokemons.length; j++) {
        let allPokemon = allPokemons[j]['name'];

        if (allPokemon.toLowerCase().includes(searchPokemon)) {
            pokemonMainBox.innerHTML = renderSearchedPokemonHTML(i, j);
            setRightColorSearchView(j)
        } else {
            console.log('hi')
        }
    }
}