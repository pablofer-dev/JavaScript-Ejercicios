const axios = require('axios');
const pokemon = async () => {
    await axios.get('https://pokeapi.co/api/v2/pokemon?limit=999').then((responde) => {
        console.log(responde.data);
    })
}
console.log(pokemon());