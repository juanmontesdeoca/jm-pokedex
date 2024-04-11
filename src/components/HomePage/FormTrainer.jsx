import {useRef} from "react"
import { setTrainer } from "../../store/state/trainerSlice"
import { useDispatch } from "react-redux"
import{useNavigate} from 'react-router-dom'
import "./FormTrainer.css"

    const FormTrainer=()=>{
        const trainerInput = useRef()

      const dispatch = useDispatch()
      const navigate =useNavigate()

      const handleSubmit=(e)=>{
        e.preventDefault()
       dispatch( setTrainer(trainerInput.current.value.trim()))
       navigate('/pokedex')
      }

    

  return (
    
     <form className="form" onSubmit={handleSubmit}>

    <input className="input" ref={trainerInput} type="text"/>

    <button className="button">lets start</button>
    </form>
  )
}

export default FormTrainer