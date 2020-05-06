import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const Nav =props =>(
    <div className="Nav">
        <ul>
            <li>
            <Link to ="/"> Inicio</Link>
            </li>
            <li>
            {props.login ? 
            <Link to ="/panel"> Mi cuenta</Link>
            :
            <Link to ="/login"> Iniciar Sesíon</Link>
            }
            </li>
            <li>
            <a onClick={props.showModal}> Nuevo Paciente</a>
            </li>
        </ul>

    </div>
);

const mapstateToProps= state =>{
    return{
        login: state.login,
    }
}

export default connect(mapstateToProps)(Nav);