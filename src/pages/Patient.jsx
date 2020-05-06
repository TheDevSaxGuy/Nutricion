import React from 'react';
import PatientInfo from '../components/PatientInfo';
import {connect} from 'react-redux';
import Login from '../pages/Login';

const Patient = props=>{
const patient = props.location.state;
return(
    <div className="Patient">
        <div className="Patient-container">
            <div className="Patient-item">
                <PatientInfo patient={patient} login={props.login}/>
            </div>
        </div>
    </div>
);
}
const mapstateToProps= state =>{
    return{
        login: state.login,
    }
}

export default connect(mapstateToProps)(Patient);