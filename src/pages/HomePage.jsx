import FormTrainer from "../components/HomePage/FormTrainer"
import "./HomePage.css"

const HomePage = () => {
  return (
    <div>
        
        <img className="img"  src="POKEDEX.png" alt="" />
        <h2 className="h2"> Hi Trainer </h2>
       <p className="p">to see the information of the pokemon tell me your trainer name</p>
       <FormTrainer/>
    </div>
  )
}

export default HomePage