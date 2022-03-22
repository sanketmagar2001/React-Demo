import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({authenticate}) => {

    const navigate = useNavigate();

    const loginUser = () =>{
        authenticate();
        navigate("App")
    }
    return (
        <div style={{
            margin: 'auto',
            width: 500,
            border: '3px solid green',
            padding: 10,
         }}>   
            <h1 style={{
                textAlign:'center',
                color:'black'
            }}>
                Please Authenticate to continue...
            </h1>
            <button style={{
               padding:12,
               borderRadius:25,
               fontSize:15,
               marginLeft:20
            }} onClick={loginUser}>Login</button>
        </div>
    );
};

export default Login;