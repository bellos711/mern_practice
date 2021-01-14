import React, {useState, useEffect} from 'react';
import axios from "axios";
import {navigate} from "@reach/router";

const DisplayAuthors = props => {

    const [name, setName] = useState();

    useEffect(() => {
        axios
        .get("http://localhost:8000/api/authors/" + props.id )
        .then((res) => {
            console.log("edditing this item: ", res);
            setName(res.data.author.name);

        })
        .catch((err) => {
            console.log(err);
        });
    }, [props.id]);

function handleSubmit(event) {
        event.preventDefault();
        const editAuthors = {
        name: name,

        };
    axios
    .put("http://localhost:8000/api/authors/update/" + props.id, editAuthors)
    .then((res) => {
        console.log(res);
        navigate("/authors");
    })
    .catch((err) => {console.log(err);
    });
    console.log("handling submit");
}

    return (
        <div>
            <h1>Edit Author</h1>
            <form onSubmit={(e)=> {handleSubmit(e);}} >
                <input 
                type="text"
                // placeholder={name}   
                onChange={e => {setName(e.target.value)}}
                value={name}
                />
                <button>Save Changes</button>
            </form>
        </div>
    )
}


export default DisplayAuthors
