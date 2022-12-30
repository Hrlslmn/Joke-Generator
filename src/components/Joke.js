import { useState } from "react";
import './joke.css'
import Axios from 'axios';
const Joke = () => {
    const[joke,setJoke]= useState("")
    const[jokeID, setJokeID] = useState("")
    const getJoke = () =>{
        Axios.get("https://official-joke-api.appspot.com/random_joke").then(
        (response)=>{
        setJoke(response.data.setup +"..."+response.data.punchline)
        setJokeID("Joke ID: "+ response.data.id)
    })
    }
    return ( 
        <>
            <div className="jokeSection">
                <button onClick={getJoke}>Get Joke Right Now</button><br></br>
                <h2>{joke}</h2><br></br>
                <h3>{jokeID}</h3>
            </div>
        </>
     );
}
 
export default Joke;