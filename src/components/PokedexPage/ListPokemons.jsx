 
import PokeCard from './PokeCard'
import "./ListPokemon.css"
const ListPokemons = ({pokemons}) => {
  return (
<div className='lp' >
   {
     pokemons?.map(pokeInfo=>(
    <PokeCard
      key={pokeInfo.url}
      pokeInfo={pokeInfo}
    />
   ))
    
    
   }
   </div>
  )
}

export default ListPokemons