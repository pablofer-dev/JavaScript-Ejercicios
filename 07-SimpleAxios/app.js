const axios = require('axios');
const pokemons = []
async function pokemon() {
    await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100').then(response => pokemons.push(response.data.results)
    )
}
pokemon().then(() => console.log(pokemons[0][0].name + " " + pokemons[0][0].url));

