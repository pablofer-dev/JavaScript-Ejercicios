const axios = require('axios');

async function pokemons() {
    lista = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100').then(function (response) {
        return response.data;
    }).catch(function (e) {
        console.log(e);
    });
    return lista;
}
pokemons().then(function (response) {
    console.log(response);
});