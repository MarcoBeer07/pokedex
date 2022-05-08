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
        document.getElementById("pokemonBigView").style.backgroundColor = '#f5f5f5'
    } else if (type == 'electric') {
        document.getElementById("pokemonBigView").style.backgroundColor = '#B3EE3A'
    } else if (type == 'fairy') {
        document.getElementById("pokemonBigView").style.backgroundColor = '#f3d0f7'
    } else if (type == 'ground') {
        document.getElementById("pokemonBigView").style.backgroundColor = '#8B7E66'
    } else if (type == 'fighting') {
        document.getElementById("pokemonBigView").style.backgroundColor = '#666969'
    } else if (type == 'psychic') {
        document.getElementById("pokemonBigView").style.backgroundColor = '#36e3bb'
    } else if (type == 'rock') {
        document.getElementById("pokemonBigView").style.backgroundColor = '#47301f'
    } else if (type == 'dragon') {
        document.getElementById("pokemonBigView").style.backgroundColor = '#36e007'
    } else if (type == 'ghost') {
        document.getElementById("pokemonBigView").style.backgroundColor = '#453747'
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
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#f5f5f5'
    } else if (type == 'electric') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#B3EE3A'
    } else if (type == 'fairy') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#f3d0f7'
    } else if (type == 'ground') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#8B7E66'
    } else if (type == 'fighting') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#666969'
    } else if (type == 'psychic') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#36e3bb'
    } else if (type == 'rock') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#47301f'
    } else if (type == 'dragon') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#36e007'
    } else if (type == 'ghost') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#453747'
    }
}

function setRightColorSearchView(j) {
    let type = allPokemons[j]['types'][0]['type']['name'];

    if (type == 'grass') {
        document.getElementById("pokemonBox" + j).style.backgroundColor = '#99C262'
    } else if (type == 'fire') {
        document.getElementById("pokemonBox" + j).style.backgroundColor = '#FF3030'
    } else if (type == 'water') {
        document.getElementById("pokemonBox" + j).style.backgroundColor = '#1C86EE'
    } else if (type == 'poison') {
        document.getElementById("pokemonBox" + j).style.backgroundColor = '#8a2be2'
    } else if (type == 'bug') {
        document.getElementById("pokemonBox" + j).style.backgroundColor = '#54FF9F'
    } else if (type == 'normal') {
        document.getElementById("pokemonBox" + j).style.backgroundColor = '#f5f5f5'
    } else if (type == 'electric') {
        document.getElementById("pokemonBox" + j).style.backgroundColor = '#B3EE3A'
    } else if (type == 'fairy') {
        document.getElementById("pokemonBox" + j).style.backgroundColor = '#f3d0f7'
    } else if (type == 'ground') {
        document.getElementById("pokemonBox" + j).style.backgroundColor = '#8B7E66'
    } else if (type == 'fighting') {
        document.getElementById("pokemonBox" + j).style.backgroundColor = '#666969'
    } else if (type == 'psychic') {
        document.getElementById("pokemonBox" + j).style.backgroundColor = '#36e3bb'
    } else if (type == 'rock') {
        document.getElementById("pokemonBox" + j).style.backgroundColor = '#47301f'
    } else if (type == 'dragon') {
        document.getElementById("pokemonBox" + j).style.backgroundColor = '#36e007'
    } else if (type == 'ghost') {
        document.getElementById("pokemonBox" + j).style.backgroundColor = '#453747'
    }
}