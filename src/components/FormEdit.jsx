import React,{useState} from 'react';
import {connect} from 'react-redux';
import {storage, database }from '../utils/firebase';

const Form =props =>{
    const patient = props.patient;
    console.log('Paciente',patient)
    let [patientPhoto,setPatientPhoto]=useState('');
    const [sendForm,setSendForm]= useState(false);
    const handleSubmit=event=>{
        console.log('foto',patientPhoto);
        event.preventDefault();
        const form  = new FormData(event.target);
        const newDate = new Date().toISOString();

        let firstName = form.get('firstName');
        let lastName = form.get('lastName');
        let type = form.get('type');
        let description = form.get('description');
        let gender=form.get('gender');

        if (patientPhoto==''){
            console.log('No modificar foto');
            patientPhoto = patient.photo;
        }
        else{
            console.log('Modifico foto')
        }

        if(firstName.length==0)
            firstName=patient.firstName;

        if(lastName.length==0){
            lastName=patient.lastName;}
        if(type=="seleccionar")
            type=patient.type;
        if(description.length==0)
            description=patient.description;
        if(gender=="seleccionar")
            gender=patient.gender;
        
        console.log('fname',firstName);


        const data = {
            'firstName':firstName,
            'lastName':lastName,
            'type':type,
            'description':description,
            'gender': gender,
            'photo': patientPhoto,
            'profilePic':props.user.photoURL,
            'userContact':props.user.email,
            'userName':props.user.displayName,
        }
        
        console.log('data',data)
        database.ref('patients/'+patient.id).update(data).then(() => setSendForm(true)).catch(()=>setSendForm(false))
    }

    const onChange = event =>{
        const file = event.target.files[0];
        const storageRef = storage.ref();
        const name= (+new Date())+'-'+file.name;
        const uploadFile = storageRef.child(name).put(file);

        uploadFile.then((snapshot)=>{
            snapshot.ref.getDownloadURL().then(downloadUrl=>{
                setPatientPhoto(downloadUrl)}
                );
        })
    }
    
    return(
    <div className="Form">
        <div className="Form-head">
            <h2> Editar información  </h2>
        </div>
        {sendForm&&
        <div className="Form-sent">
            <span>Guardado con Exito!</span>
        </div>
        }
        {!sendForm&&
        <div className ="Form-item">
            <form onSubmit={handleSubmit}>
                <input name="firstName" type="text" placeholder={patient.firstName}/>
                <input name="lastName" type="text" placeholder={patient.lastName}/>
                <select name="type">
                    <option disable="true" value="seleccionar">{patient.type}</option>
                    <option value="Nino">Niño</option>
                    <option value="Adolescente">
                        Adolescente
                    </option>
                    <option value="Adulto">Adulto</option>
                </select>
                <select name="gender">
                    <option disable="true" value ="seleccionar">{patient.gender}</option>
                    <option value="Hombre">Hombre</option>
                    <option value="Mujer">Mujer</option>
                </select>
                <input name="description" type="text" placeholder={patient.description}/>
                <input type="file" name="photo" onChange={onChange}/>
                <button>Enviar</button>
            </form>
        </div>
}

    </div>

);
}
const mapStateToProps = state =>{
    return{
        user: state.user,    }
}

export default connect(mapStateToProps)(Form);