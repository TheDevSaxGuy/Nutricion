import React from 'react';
import Login from '../pages/Login';
import Modal from '../components/Modal';
import {Link} from 'react-router-dom'; 
import FormEdit from '../components/FormEdit';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const PatientInfo = props =>{
    let showEdit= false;
    console.log(props.patient);
    const medidas=()=>{
        console.log('tomar medidas')
    }
    const edit = ()=>{
        showEdit= !showEdit;
        console.log(showEdit);

    }   
    
    const emoji = patient =>{
        const gender = patient.gender;
        const type = patient.type;
        switch (type) {
            case 'Nino':
                if(gender=='Hombre')  
                {return '👦';}
                else{return '👧';}
            case 'Adolescente' :  
                if(gender=='Hombre')
                {return '🧑';}
                else{return '🧒';}
            case 'Adulto':  
                if(gender=='Hombre')
                {return '👨';}
                else{return '👩'; }  
            default:
                return '👽';
        }
    }
    return(
    <div className="Tabs-container">
    <Tabs>
        <TabList>
                <Tab title="Paciente"> Hola </Tab>
                <Tab title="Editar Informacion"> Edit</Tab>
        </TabList>
        <TabPanel>    
        <div className="PatientInfo">
            <div className="PatientInfo-container">
                <div className="PatientInfo-content">
                    <div className="PatientInfo-avatar">
                        <img src={props.patient.photo} alt=""/>
                    </div>
                <div className="PatientInfo-profile">
                    <h2>{props.patient.firstName} {props.patient.lastName}</h2>
                    <span>{emoji(props.patient)}</span>
                    <p>{props.patient.description}
                    <i>
                    {props.patient.gender==='Male' &&'♂'}
                    {props.patient.gender==='Female'&&'♀'}
                    </i>
                    </p>
                <div className="PatientInfo-type">
                    <button className="PatientInfo-btn" onClick={medidas}>
                        Tomar medidas
                    </button>
                </div>
                {
                props.login ?
                <div className="PatientInfo-profile-adopt">
                    <div className="PatientInfo-item">
                        <h3>Datos del paciente</h3>
                        <span>Medida 1</span>
                        <h4>15cm</h4>
                        <span>Medida 2</span>
                        <h4>18cm</h4>
                    </div>
                </div>:
                <div className="Nutritionist-Login">
                    <h3>Debes iniciar sesión como nutriologa para ver esta sección</h3>
                    <Login/>
                </div>
                }

            </div>        
            </div>
        </div>
        </div>
            
            </TabPanel>
            <TabPanel>
                <FormEdit patient={props.patient}/>
            </TabPanel>
    
    </Tabs>
    </div>
    )

}

export default PatientInfo;