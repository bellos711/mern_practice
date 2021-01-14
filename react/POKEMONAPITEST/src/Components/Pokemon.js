import {useEffect} from 'react';

const Pokemon = (props) =>{

    // useEffect(() =>{
    //     fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    //     .then(res=> res.json())
    //     .then(res => props.setPokemon(res.results))
    // });

    const onClick= event =>{
        console.log("hello friend");
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(res=> res.json())
        .then(res => props.setPokemon(res.results))
    }

    return(

        <div>
            <button onClick={onClick}>Catch em' all</button>
            {props.pokemon.map((val, idx) =>{
                return(
                    <p key={idx}>{val.name}</p>
                )
            })}
        </div>
    );
}

export default Pokemon;