import React, { useState } from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';


export default () => {
    const [petName, setPetName] = useState('');
    const [petType, setPetType] = useState('');
    const[petDescription, setPetDescription] = useState('');
    const [skillOne, setSkillOne] = useState('');
    const [skillTwo, setSkillTwo] = useState('');
    const [skillThree, setSkillThree] = useState('');

    const [errors, setErrors] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pet/add', 
        {
            petName: petName,
            petType: petType,
            petDescription: petDescription,
            skillOne: skillOne,
            skillTwo: skillTwo,
            skillThree: skillThree
        })
        .then(res => {
            console.log(res.data);
            if(res.data.hasOwnProperty('error')){
            const errorRes = res.data.error.errors;
            const errorArr = [];
            for(const key of Object.keys(errorRes)){
                errorArr.push(errorRes[key].message);
            }
            setErrors(errorArr);}
            else{
                navigate('/')
            }
        })
        .catch(err => console.log("There is an error on add a pet form submit: " + err))
    }


    const headerStyle = {
        display: "flex",
        backgroundColor: "#77B7D0",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 20px"
    }

    const formStyle = {
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: 25
    }

    const labelStyle = {
        display: "inline-block",
        width: 130,
        textAlign: "left"
    }


    return(
        <div>

            <div style={headerStyle}>
                <h1 style={{color: "white"}}>Pet Shelter</h1>
                <h2 style={{color:"white" }}>Know a pet needing a home?</h2>
                <Link to={'/'} style={{border: "2px solid white", padding: 10, color: "white"}}>back to home</Link>
            </div>

            <form onSubmit={onSubmitHandler} style={formStyle}>
                
                
                <div>
                    <h3 style={{visibility: "hidden"}}> test</h3>
                    <div>
                        <label style={labelStyle}>Pet Name</label>
                        <input type='text' onChange = {e => setPetName(e.target.value)} />
                    </div>
                    
                    <div>
                        <label style={labelStyle}>Pet Type</label>
                        <input type='text' onChange = {e => setPetType(e.target.value)} />
                    </div>
                    
                    <div>
                        <label style={labelStyle}>Pet Description</label>
                        <input type='text' onChange = {e => setPetDescription(e.target.value)} />
                    </div>

                    <div style={{marginTop: 20}}>
                        <input type='submit' />
                        <button onClick={e => {navigate('/')}} >Cancel</button>
                    </div>
                </div>
                
                <div>
                    <h3>Pet Skills (optional)</h3>
                    <div>
                        <label style={labelStyle}>Pet Skill 1</label>
                        <input type='text' onChange = {e => setSkillOne(e.target.value)} />
                    </div>
                    
                    <div>
                        <label style={labelStyle}>Pet Skill 2</label>
                        <input type='text' onChange = {e => setSkillTwo(e.target.value)} />
                    </div>
                    
                    <div>
                        <label style={labelStyle}>Pet Skill 3</label>
                        <input type='text' onChange = {e => setSkillThree(e.target.value)} />
                    </div>
                </div>
                
                
            </form>
            <div>
                {errors.map((error, i) => <p key={i} style={{color: "red"}}>{error}</p>)}
            </div>
        </div>
    )






}