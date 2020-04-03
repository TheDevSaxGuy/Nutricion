import React,{useState} from 'react';
import moment from 'moment';
const PatientItem = props =>{

    moment.locale('es');
    const date = moment(props.patient.date, 'YYYYMMDD').fromNow();

    return(
    <div className="Patients">
    <div className="Patients-cover" style={{
        background: `url('${props.patient.photo}')`
    }}>
        <span>
            {props.patient.type ==='Niño' &&'👦'}
            {props.patient.type==='Adult' &&'👨'}
        </span>
        <div className="Patients-type">
            {props.patient.type}
        </div>
    </div>
    <div className="Patients-content">
        <div className="Patients-head">
<h2>
    {console.log(props.patient)}
    {console.log(typeof props.patient.firstName)}
    {props.patient.firstName} {props.patient.lastName} </h2>
        <i>
            {props.patient.gender==='Male' &&'♂'}
            {props.patient.gender==='Female'&&'♀'}
        </i>
        </div>
    <p>{props.patient.description}</p>
        <div className="Patients-date">
            <i className="fas fa-calendar-alt"/>
            <span>{date}</span>
        </div>
    </div>
</div>);

}

export default PatientItem;