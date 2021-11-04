import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'

const PatientHome = () => {
    const [patient, setPatient] = useState()

    useEffect(() => {
        Axios.get('http://localhost:3001/api/patient/getOne', {
            params:{
                Pcode: localStorage.getItem('token')
            }
        }).then((res) => {
            setPatient(res.data[0])
        })
    }, [])

    
    return(
        <div>
            This is patient user: 
            {patient.P_fname}
        </div>

    )
}

export default PatientHome