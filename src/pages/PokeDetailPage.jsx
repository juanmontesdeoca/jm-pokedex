import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import "./PokeDetailPage.css"




const PokeDetailPage = () => {
  
  const {name}= useParams()
   

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`
  const [ pokemon, getPokemon] = useFetch(url)
    

  useEffect(()=>{
    getPokemon()
  },[name])


  return (
    <div className="div">
      <header>
        <img  className="card__img1" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        <h3 className=  "card__name1" >{pokemon?.name}</h3>
        <ul className="card__types1">
          {
            pokemon?.types.map(typeInfo => (
              <li className="card__type1" key={typeInfo.type.url}>{typeInfo.type.name}</li>
            ))
          }
          
          <hr  className="card__hr"/>
          
        </ul>
        <ul className="card__list1">
          {
            pokemon?.stats.map(statInfo => (
              <li className="card__stat1"
               key={statInfo.stat.url}>
                <span className="card__stat__label1">{statInfo.stat.name}</span>
                <span className={`card__stat_value1 color-${pokemon?.types[0].type.name}`}>{statInfo.base_stat}</span>
                
              </li>
            ))
          }
        </ul>
   
      
        
        </header>
    </div>
  )
}

export default PokeDetailPage