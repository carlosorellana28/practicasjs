// // importamos los paquetes
// import fetch from 'node-fetch';

// creamos la consulta fetch para la url de pockemon

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((response)=> response.json())
    .then((pockemon)=>{
            const elemento = pockemon.forms
            const gameIndices = pockemon.game_indices


        console.log(elemento[0].name)
        console.log(gameIndices[0].game_index)
    })

