let currentPokemon;
let allPokemons = [];

/**
 * Function for onload of the body 
 */
function init() {
    loadPokemon();
    showSearchBar();
}
/**
 * Function to load the pokemon-data from the api to the app
 * @param {array} currentPokemon - variable that contains the data of the pokemons
 */
async function loadPokemon() {
    for (let i = 1; i < 151; i++) {

        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        allPokemons.push(currentPokemon);
        renderPokemonBox(i);
    }
}

/**
 * Function to render the pokemon-data to to an html container
 */
function renderPokemonBox(i) {
    let pokemonMainBox = document.getElementById('pokemonMainBox')
    pokemonMainBox.innerHTML += renderPokemonHTML(i);
    setRightColorNormalView(i)
}
/**
 * Function to render the pokemon-data to show it onclick in an container with more informations
 */
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
/**
 * Function to close the big-view onclick outside of the container
 */
function hideBigView() {
    document.getElementById('pokemonBigViewBox').classList.add('d-none')
}

/**
 * Function to render the searchbar
 */
function showSearchBar(j) {
    document.getElementById('searchBar').innerHTML = `
        <button onclick="searchPokemon(${j})"><b>Search Pokemon</b></button>
        <input type="text" id="searchPokemon" onkeydown="searchPokemon(${j})">
        `
}
/**
 * Function to to search pokemons with tiping in some letters. The function will check if the searched keyword will match some of the pokemons
 */
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