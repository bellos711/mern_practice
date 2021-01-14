import axios from 'axios';

export const StarWars = props =>{
    

    const OnChange= (event) =>{
        props.setType(event.target.value)
    }

    const onSubmit= (event) =>{
        event.preventDefault();
        console.log(`the id selected ${event.target.inputID.value}`);
        let id = event.target.inputID.value;

        axios.get(`https://swapi.dev/api/${props.type}/${id}`)
        .then(response => props.setResData(response.data));
    }

    const displayDataStyle = {
        width: "50%",
        margin: "0 auto",
        border: "2px solid silver",
    }


    return(
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="query">Search for:</label>
                <select htmlFor="query" id="" onChange={OnChange} >
                    <option value="people">People</option>
                    <option value="planets" selected>Planets</option>
                    <option value="starships">StarShips</option>
                </select>

                <label htmlFor="inputID">ID:</label>
                <input type="number" name="inputID" min="1" />

                <input type="submit" value="Search"/>
            </form>

            {/* ------------------------------------------------------------------- */}

            {props.resData !== null ? <h1>{props.resData.name}</h1> : ''}

            {props.type === 'people' && props.resData !== null 
            ? <div style={displayDataStyle}>
                <ul style={{"listStyle":"none"}}>
                    <li>Height: {props.resData.height} cm</li>
                    <li>Mass: {props.resData.mass} kg</li>
                    <li>Hair Color: {props.resData.hair_color}</li>
                    <li>Skin: {props.resData.skin_color}</li>
                </ul>
            </div> : ''}


            {props.type === 'planets' && props.resData !== null 
            ? <div style={displayDataStyle}>
                <ul style={{"listStyle":"none"}}>
                    <li>Climate: {props.resData.climate}</li>
                    <li>Terrain: {props.resData.terrain}</li>
                    <li>Surface Water: {props.resData.surface_water === 0 ? 'false' : 'true'}</li>
                    <li>Population: {props.resData.population}</li>
                </ul>
            </div> : ''}


            {props.type === 'starships' && props.resData !== null 
            ? <div style={displayDataStyle}>
                <ul style={{"listStyle":"none"}}>
                    <li>Model: {props.resData.model}</li>
                    <li>Manufacturer: {props.resData.manufacturer}</li>
                    <li>Cost: {props.resData.cost_in_credits}</li>
                    <li>Crew Size: {props.resData.crew}</li>
                </ul>
            </div> : ''}

        </div>
    )
}