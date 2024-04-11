import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import ListPokemons from "../components/PokedexPage/ListPokemons"
import SelectType from "../components/PokedexPage/SelectType"
import "./PokedexPage.css"


const PokedexPage = () => {

   const[pokeSearch,setPokeSearch]=useState("")

   const [typeSelected, setTypeSelected] = useState('all Pokemons')

  const inputSearch =useRef()

   const trainer = useSelector(states => states.trainer)
   const url ='https://pokeapi.co/api/v2/pokemon/?limite=20&offset=0'
  const[pokemons, getPokemons,getPokeByType] =useFetch(url)

   useEffect(()=>{
    if(typeSelected === 'all Pokemons'){
      getPokemons()
    }else{
      getPokeByType(typeSelected)
    }
   },[typeSelected])


   const handleSubmit = e =>{
            e.preventDefault()
            setPokeSearch(inputSearch.current.value.trim().toLowerCase())

   }        

   const pokemonsFiltered= pokemons?.results.filter(poke=>{
        return poke.name.includes(pokeSearch)
   })
   

  return (
    <div>
      <header className="header1" />
      <header className="header2"/>
       <img className="img"  src="POKEDEX.png" alt="" />
        <p className="p">Welcome<span className="span">{ trainer}</span>, here you can find your favorite pokemon </p>
        <form className="form" onSubmit={handleSubmit}>
           <input className="input1" ref ={inputSearch}type="text" />
           <button className="button1">SEARCH</button>

        </form>
        <SelectType
         setTypeSelected ={setTypeSelected}
        />
        <ListPokemons
         pokemons={pokemonsFiltered}/>
    </div>
  )
}

export default PokedexPage