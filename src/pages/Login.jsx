import React from 'react';
import { auth } from 'firebase';
import { provider } from '../utils/firebase';

const Login =(props)=>{
    const loginFacebook = ()=>{
        auth().signInWithPopup(provider).then(({ user })=>{
            props.history.push('/panel');

        })
    }

    const logoutFacebook =()=>{
        auth().signOut().then(()=>{
            props.history.push('/')
        });
    }
    return(
        <div className="Login">
        <div className="Login-container">
            <div className="Login-content">
                <h2>Crear Cuenta o Iniciar Sesion</h2>
                <button onClick={loginFacebook}>
                    <i className="fab fa-facebook-square"> </i>
                    <span>Iniciar sesion con Facebook</span>
                </button>
                <button onClick={logoutFacebook}>
                    <span>Cerrar sesión</span>
                </button>
            </div>
        </div>
        </div>
        )
        
}
export default Login;