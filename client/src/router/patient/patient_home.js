import React, {useState, useEffect} from 'react'

import Axios from 'axios'

import './patient_home.css'

const PatientHome = () => {
    const [patient, setPatient] = useState({
        Pcode: '',
        P_fname: '',
        P_lname: '',
        P_dob: '',
        P_gender: '',
        P_phone: ''
    })

    const [checkStatus, setCheckStatus] = useState([])
    const checkPatientType = (P_type) => {
        // P_type = P_type.substring(0,2)
        // if(P_type == 'IP') {
        //     console.log('In patient')
        // } else {
            Axios.get('http://localhost:3001/api/examination/getAll',{
                params:{
                    Pocode: localStorage.getItem('token')
                }
            }).then((res) => {
                setCheckStatus(res.data)
            })
        //     console.log('out patient')
        // }
    }

    useEffect(() => {
        Axios.get('http://localhost:3001/api/patient/getOne', {
            params:{
                Pcode: localStorage.getItem('token')
            }
        }).then((res) => {
            setPatient(res.data[0])
            checkPatientType(patient.Pcode)
        })
    }, [])

    
    

    return(
        <div>
            This is patient user: {patient.P_fname + " " + patient.P_lname} born in {patient.P_dob} gender: {patient.P_gender} phone: {patient.P_phone} 
        
            {checkStatus.map((val) => {
                return (
                <div className = 'checkStatus'>
                    <h1>Exam of: {val.Pocode}, fee: {val.O_fee}</h1>
                </div>
                )
            })}
        </div>

    )
}

export default PatientHome