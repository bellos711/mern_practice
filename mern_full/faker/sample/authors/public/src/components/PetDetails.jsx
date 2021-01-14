import React, { useEffect, useState } from 'react';
import {navigate} from '@reach/router';
import { Link } from '@reach/router';
import axios from 'axios';

export default props => {
    const [pet, setPet] = useState({})
    const [likes, setLikes] = useState(0)
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
        .then(res => setPet(res.data.pet))
    }, [])

    const adoptHandler = e => {
        axios.delete(`http://localhost:8000/api/pets/delete/${props.id}`)
        .then(res => {
            console.log(res)
            navigate('/')
        }).catch(err => console.log(err))
        
    }

    // const likesPet = _id => {
    //     axios.put(`http://localhost:8000/api/like/${props.id}`, {
    //         likes
    //     }).then(res => {console.log(res)})
    // }


    return (
        <div>
            <h1>Shelter of the Pets!</h1>
            <Link to={'/'}>back to home</Link>
            <h2>Details about: {pet.petName}</h2>
            <button onClick={adoptHandler} id={pet._id} >Adopt {pet.petName}</button>
            <h3>Pet Type: {pet.petType}</h3>
            <h3>Description: {pet.petDescription} </h3>
            <h3>Skills: 
                <ul>
                    {pet.skillOne ? <li>{pet.skillOne}</li>: ''}
                    {pet.skillTwo ? <li>{pet.skillTwo}</li>: ''}
                    {pet.skillThree ? <li>{pet.skillThree}</li>: ''}
                </ul>
            </h3>
            <p>Likes: {pet.likes}</p>
    <button>Like {pet.petName}</button>
        </div>
    )
}