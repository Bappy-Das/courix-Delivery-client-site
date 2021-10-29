import React from 'react';
import { Button } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
import './LogIn.css'
const Login = () => {
    const { singInUsingGoogle } = useAuth();
    const location = useLocation()
    const history = useHistory();
    const redirect_uri = location.state?.from || '/'
    console.log("Come from ", location.state?.from)

    const handleLogin = () => {
        singInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
                // setUser(result.user)
                // console.log(result.user)
            })
    }





    return (
        <div className="p-5 m-5  login-page">
            <Button onClick={handleLogin} className="text-center" variant="warning"><FcGoogle size="40" /> Sign in with Google</Button>
        </div>
    );
};

export default Login;