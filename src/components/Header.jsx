import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Nav from '../components/Nav';
import Modal from '../components/Modal';
import Login from '../pages/Login';
import Form from '../components/Form';

const Header = props=>{

    const [modal, setModal] = useState(false)
    const showModal = () =>{
        setModal(!modal)
    }

return(
    <div className="Header">
        <div className="Header-container">
            <div className="Header-content">
                <div className="Header-logo">
                    <Link to ="/">
                    <img src="https://i.imgur.com/gX9QbOu.pngs" alt="nutricion"/>
                    </Link>
                    <h1>Nutricion</h1>
                </div>
                <div className="Header-nav">
                    <Nav showModal={showModal} />
                </div>
            </div>
        </div>
        <Modal show={modal} close={showModal}>
            {props.login ?
            <Form />:
            <div className="Modal-login">
                <Login />
            </div>
        }
        </Modal>
    </div>
);
}

const mapSateToProps= state =>{
    return {login: state.login}
};

export default connect(mapSateToProps)(Header);