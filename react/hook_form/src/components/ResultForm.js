import React, {useState} from "react";

const ResultForm = (props) => {
    const {firstName, lastName, email, password, confirmPassword} = props.inputResult;
    return(
        <div>
            <h2>Result:</h2>
            {
                (firstName.length >=2) ?
                <h3>Entered First Name: {firstName}</h3> :
                <h3 style={{color:'red'}}>First Name must be 2 or more characters</h3>
            }
            
            {
                (lastName.length >=2) ?
                <h3>Entered Last Name: {lastName}</h3> :
                <h3 style={{color:'red'}}>Last Name must be 2 or more characters</h3>
            }

            {
                (email.length >=5) ?
                <h3>Entered Email: {email}</h3> :
                <h3 style={{color:'red'}}>email must be 5 or more characters</h3>
            }

            {
                (password.length >=8) ?
                <h3>Entered Password: {password}</h3> :
                <h3 style={{color:'red'}}>password must be 8 or more characters</h3>
            }
            
            {
                (password == confirmPassword && confirmPassword.length>0) ?
                <h3>Entered Confirm Password: {confirmPassword}</h3> :
                <h3 style={{color:'red'}}>password must match</h3>
            }
            
            
        </div>
    );
};

export default ResultForm;