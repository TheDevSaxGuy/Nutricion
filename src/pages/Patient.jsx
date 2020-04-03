import React from 'react';
import PatientInfo from '../components/PatientInfo';

const Patient = props=>{
console.log('patients');
const patient = props.location.state;
return(
    <div className="Patient">
        <div className="Patient-container">
            <div className="Patient-item">
                <PatientInfo patient={patient}/>
            </div>
        </div>
    </div>
);
}

export  default Patient;