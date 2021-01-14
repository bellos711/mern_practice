import React, {useState} from "react"

const UserForm = (props) => {
    

    const {inputs, setInputState} = props;
    const [firstNameErrorState, setFirstNameErrorState] = useState("");
    const [lastNameErrorState, setLastNameErrorState] = useState("");
    const [emailErrorState, setEmailErrorState] = useState("");
    const [passwordErrorState, setPasswordErrorState] = useState("");
    const [confirmPasswordErrorState, setConfirmPasswordErrorState] = useState("");

    const formDivStyle = {
        backgroundColor: "silver",
        padding: 15,
        margin: "0px auto",
        marginBottom: 10,
        border: "1px solid black",
        borderRadius: "15px",
        width: "50%",
    }

    const handleFormChange = (event)=>{
        console.log(`first name on form test is ${inputs.firstName}`);

        setInputState({
            ...inputs,[event.target.name]: event.target.value
        });
    };
    

    return(
        <div>
            <form  style={{marginTop: 15}}>
                <div style={formDivStyle}>
                    <label htmlFor="" style={{display: "inline-block", width: 150, textAlign: "left"}}>First Name: </label>
                    <input type="text" onChange={handleFormChange} name="firstName"/>
                </div>
                <div style={formDivStyle}>
                    <label htmlFor="" style={{display: "inline-block", width: 150, textAlign: "left"}}>Last Name: </label>
                    <input type="text" onChange={handleFormChange} name="lastName"/>
                </div>
                <div style={formDivStyle}>
                    <label htmlFor="" style={{display: "inline-block", width: 150, textAlign: "left"}}>Email: </label>
                    <input type="text" onChange={handleFormChange} name="email"/>
                </div>
                <div style={formDivStyle}>
                    <label htmlFor="" style={{display: "inline-block", width: 150, textAlign: "left"}}>Password: </label>
                    <input type="text" onChange={handleFormChange} name="password"/>
                </div>
                <div style={formDivStyle}>
                    <label htmlFor="" style={{display: "inline-block", width: 150, textAlign: "left"}}>Confirm Password: </label>
                    <input type="text" onChange={handleFormChange} name="confirmPassword"/>
                </div>
                {/* <button type="submit">Submit Form</button> */}
            </form>
        </div>
        

        
        
    );
};

export default UserForm;