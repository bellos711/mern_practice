import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';



export default props => {
    const [petName, setPetName] = useState('');
    const [petType, setPetType] = useState('');
    const[petDescription, setPetDescription] = useState('');
    const [skillOne, setSkillOne] = useState('');
    const [skillTwo, setSkillTwo] = useState('');
    const [skillThree, setSkillThree] = useState('');

    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
        .then(res => {
            setPetName(res.data.pet.petName);
            setPetType(res.data.pet.petType);
            setPetDescription(res.data.pet.petDescription);
            setSkillOne(res.data.pet.skillOne);
            setSkillTwo(res.data.pet.skillTwo);
            setSkillThree(res.data.pet.skillThree);
        }).catch(err => console.log(err))
    }, [props._id] )

    const updatePet = e => {
        e.preventDefault();
        const updatePet = {
            petName: petName,
            petType: petType,
            petDescription: petDescription,
            skillOne: skillOne,
            skillTwo: skillTwo,
            skillThree: skillThree
        }
        
        axios.put(`http://localhost:8000/api/pets/update/${props.id}`, updatePet)
        .then(res => {
            // console.log(res.data);
            // const errorRes = res.data.error.errors;
            // const errorArr = [];
            // for(const key of Object.keys(errorRes)){
            //     errorArr.push(errorRes[key].message);
            // }
            // setErrors(errorArr);
            // navigate(`/pets/${props.id}`)
            console.log(res.data);
            if(res.data.hasOwnProperty('error')){
            const errorRes = res.data.error.errors;
            const errorArr = [];
            for(const key of Object.keys(errorRes)){
                errorArr.push(errorRes[key].message);
            }
            setErrors(errorArr);}
            else{
                navigate(`/pets/update/${props.id}`)
            }
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
        <div >
            <div style={headerStyle}>
                <h1 style={{color:"white" }}>Pet Shelter</h1>
                <h2 style={{color:"white" }}>Edit {petName}</h2>
                <Link style={{color:"white", border: "2px solid white", padding: 10}} to={'/'}>back to home</Link>
            </div>

            <form onSubmit={updatePet} style={formStyle}>
                
                <div>
                    <h3 style={{visibility: "hidden"}}>test </h3>
                    <div>
                        <label style={labelStyle}>Pet Name</label>
                        <input type='text' name='petName' value={petName} onChange = {e => setPetName(e.target.value)} />
                    </div>
                    
                    <div>
                        <label style={labelStyle}>Pet Type</label>
                        <input type='text' name='petType' value={petType} onChange = {e => setPetType(e.target.value)} />
                    </div>
                    
                    <div>
                        <label style={labelStyle}>Pet Description</label>
                        <input type='text' name='petDescription' value={petDescription} onChange = {e => setPetDescription(e.target.value)} />
                    </div>
                    
                    <div style={{marginTop: 20}}>
                        <input type='submit' value='Edit Pet' />
                        <button onClick={e => {navigate('/')}} >Cancel</button>
                    </div>
                </div>

                <div>
                    <h3>Pet Skills (optional)</h3>
                    <div>
                        <label style={labelStyle}>Pet Skill 1</label>
                        <input type='text' name='skillOne' value={skillOne} onChange = {e => setSkillOne(e.target.value)} />
                    </div>
                    
                    <div>
                        <label style={labelStyle}>Pet Skill 2</label>
                        <input type='text' name='skillTwo' value={skillTwo} onChange = {e => setSkillTwo(e.target.value)} />
                    </div>
                    
                    <div>
                        <label style={labelStyle}>Pet Skill 3</label>
                        <input type='text' name='skillThree' value={skillThree} onChange = {e => setSkillThree(e.target.value)} />
                    </div>
                </div>
            </form>

            <div>
                {errors.map((err, i) => <p key={i}>{err}</p>)}
            </div>
        </div>
    )


}