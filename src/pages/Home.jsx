import React from 'react';
import useGetPatients from '../hooks/' ;
import PatientItem from '../components/PatientItem';
import {Link} from 'react-router-dom';

const API = 'https://us-central1-nutricion-5bee5.cloudfunctions.net/api';

const Home = ()=>{
const patients = useGetPatients(API);
console.log(patients);
return(
    <div className="Home">
        <div className="Home-container">
            <div className="Home-items">
                {patients.map((patient, index)=>
                    <Link key={index} to ={{
                        pathname:`/pacientes/${index}-${patient.firstName}-${patient.lastName}`,
                        state: {...patient}
                    }}>
                        <PatientItem patient={patient} key={`patient-${index}`}/>
                    </Link>
                )}
            </div>
        </div>
    </div>
);
}
export default Home;