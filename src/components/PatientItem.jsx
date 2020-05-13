import React,{useState} from 'react';
import moment from 'moment';

const PatientItem = props =>{
    moment.locale('es');
    const date = moment(props.patient.date, 'YYYYMMDD').fromNow();
{/* Emojis 
    Child male:👦
    Child female:👧
    Teen male:🧑
    Teen female: 🧒
    Adult male: 👨
    Adult female👩
*/}
    const emoji = patient =>{
        const gender = patient.gender;
        const type = patient.type;
        switch (type) {
            case 'Nino':
                if(gender=='Hombre')  
                {return '👦';}
                else{return '👧';}
            case 'Adolescente' :  
                if(gender=='Mujer')
                {return '🧒';}
                else{return '🧑';}
            case 'Adulto':  
                if(gender=='Hombre')
                {return '👨';}
                else{return '👩'; }  
            default:
                return '👽';
        }
    }
    return(
    <div className="Patients">
    <div className="Patients-cover" style={{
        background: `url('${props.patient.photo}')`
    }}>
        <span>
            {emoji(props.patient)}
            {/*props.patient.type ==='Child' &&'👦'}
            {props.patient.type==='Adult' &&'👨'*/}
        </span>
        <div className="Patients-type">
            {props.patient.type}
        </div>
    </div>
    <div className="Patients-content">
        <div className="Patients-head">
<h2>
    {props.patient.firstName} {props.patient.lastName} </h2>
        <i>
            {props.patient.gender==='Hombre' &&'♂'}
            {props.patient.gender==='Mujer'&&'♀'}
        </i>
        </div>
    <p>{props.patient.description}</p>
        <div className="Patients-date">
            <i className="fas fa-calendar-alt" style={{ color: 'blue' }}/>
            <span>{date}</span>
        </div>
    </div>
</div>);

}

export default PatientItem;