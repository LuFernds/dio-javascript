const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 10
let offiset = 0

const maxRecords = 151


function loadPokemonItens(offiset,limit){
    pokeApi.getPokemons(offiset,limit).then((pokemons = []) =>  {
        //pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
            
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}"
                    alt="${pokemon.name}">
                </div>    
            </li>
        `).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offiset, limit)

loadMoreButton.addEventListener('click',() => {
    offiset += limit
    const qtdRecordNextPage = offiset + limit

    if(qtdRecordNextPage >= maxRecords){
        const newLimit = maxRecords - offiset
        loadPokemonItens(offiset, newLimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }else{
        loadPokemonItens(offiset, limit)
    }
})
