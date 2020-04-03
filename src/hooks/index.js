import {useState, useEffect} from 'react';

const useGetPatients =(url)=>{
    console.log('hooks');

    const [patients, setPatients] = useState([]);
    useEffect(()=>{
        fetch(url).then(response => response.json()).then(data =>{
            setPatients(data)});
    },[]);

//const[estado, funcionactualiza]useState(estadoinicial)
return patients;
}

export default useGetPatients;