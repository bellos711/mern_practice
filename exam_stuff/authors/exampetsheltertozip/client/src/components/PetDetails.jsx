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

    

    function handleLike(){
        const updateLike = {
            
            likes: 77
        }
        axios.put(`http://localhost:8000/api/pets/like/${props.id}`, updateLike)
        .then(res => {
            
        })
        .catch(err => {
            console.log(err)
        });
    }


    const headerStyle = {
        display: "flex",
        backgroundColor: "#77B7D0",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 20px"
    }

    const boxStyle = {
        border: "2px solid #77B7D0",
        margin: "5%",
        padding: "5%",
        textAlign: "left"
    }

    const labelStyle = {
        fontSize: "1.2rem",
        color: "#77B7D0",
        display: "inline-block",
        width: 120
    }


    return (
        <div>
            <div style={headerStyle}>
                <h1 style={{color: "white"}}>Pet Shelter</h1>
                <Link style={{color: "white", border: "2px solid white", padding: 10}} to={'/'}>back to home</Link>
            </div>
            <div 
            style={{
                display: "flex", 
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0px 20px"
                }}>
                <h2 >Details about: {pet.petName}</h2>
                <button 
                style={{
                    border: "2px solid black",
                    backgroundColor: "red",
                    padding: 10,
                    color: "white"
                }} 
                onClick={adoptHandler} id={pet._id} >Adopt {pet.petName}</button>
            </div>

            <div style={boxStyle}>
                <div>
                    <label style={labelStyle}>Pet Type:</label> <span>{pet.petType}</span>
                </div>
                
                <div>
                    <label style={labelStyle}>Description: </label> <span>{pet.petDescription}</span>
                </div>

                <div>
                    <label style={labelStyle}>Skills: </label>
                    <span>
                        <ul>
                            {pet.skillOne ? <li>{pet.skillOne}</li>: ''}
                            {pet.skillTwo ? <li>{pet.skillTwo}</li>: ''}
                            {pet.skillThree ? <li>{pet.skillThree}</li>: ''}
                        </ul>
                    </span>
                </div>
                
                <label style={labelStyle}>Like(s):</label> <span>{pet.likes}</span>
                <div>
                    <button onClick={e=>{}}>Like {pet.petName}</button>
                </div>
            </div>
        </div>
    )
}