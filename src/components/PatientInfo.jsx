import React from 'react';

const PatientInfo = props =>{
    
    return(
    <div className="PatientInfo">
        <div className="PatientInfo-container">
            <div className="PatientInfo-content">
            <div className="PatientInfo-avatar">
                <img src={props.patient.photo} alt=""/>
            </div>
            <div className="PatientInfo-profile">
                <h2>{props.patient.firstName}-{props.patient.lastName}</h2>
                <span>
                {props.patient.type ==='Niño' &&'👦'}
                {props.patient.type==='Adult' &&'👨'}
                </span>
                <p>{props.patient.description}</p>
                <i>
                {props.patient.gender==='Male' &&'♂'}
                {props.patient.gender==='Female'&&'♀'}
                </i>
            </div>
            <div className="PatientInfo-type">
                <button>
                    Tomar medidas
                </button>
            </div>
            <div className="PatientInfo-profile-adopt">
                <div className="PatientInfo-item">
                    <h3>Datos del paciente</h3>
                    <span>Medida 1</span>
                    <h4>15cm</h4>
                    <span>Medida 2</span>
                    <h4>18cm</h4>
                </div>
            </div>
            </div>
        </div>
    </div>)

}

export default PatientInfo;