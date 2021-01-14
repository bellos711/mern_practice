import React, {useState} from "react";
import axios from "axios";


const PokemonApi = (props)=>{
    const [pokemonName, setPokemonName] = useState([])

    const theStyle = {
        // color: "red",
        // backgroundColor: "pink",
        width: "33%",
        margin: "0 auto",
    }

    const onClick = (event)=>{
        console.log("fetch");
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807').then(response=>{
            // console.log(response);
            // console.log(`specific data ${response.data.count}`)
            setPokemonName(response.data.results);
        })
    }

    // function pokemonFromMap(pokeName, index){
    //     return(
    //         <li key={index}>{pokeName.name}</li>
    //     )
    // } 

    return(
        <div style={theStyle}>
            <button 
            className="btn"
            onClick={onClick}
            >
                Fetch Pokemon
            </button>

            <ul>
                {
                    pokemonName.map((pokeName, index)=>{
                        return(<li key={index}>{pokeName.name}</li>)
                    })

                    // pokemonName.map(pokemonFromMap)
                }
            </ul>

        </div>
    );
}

export default PokemonApi;