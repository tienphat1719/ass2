import React, {useState, useEffect} from 'react'

import Axios from 'axios'

import './manager_medication.css'

const ManagerMedication = () => {
 
    const [newLname, setNewLname] = useState('')

    const [medicationList, setPaList] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3001/api/medication/getAll').then((res) => {
        setPaList(res.data)
        })
    }, [])

    const deleteButton = (P_code) => {
        Axios.delete(`http://localhost:3001/api/medication/delete/${P_code}`).then(() => {alert('del success')})
    }

    const updateButton = (P_code) => {
        Axios.put('http://localhost:3001/api/medication/update', {
        P_code: P_code,
        P_lname: newLname,

        }).then(() => {alert('update success')})
    }

    return(
        <div>
            This is manager user interact with medication
        
            {medicationList.map((val) => {
                return (
                <div className = 'medicationList'>
                    <h1>medication: {val.Mcode}, name: {val.M_name}</h1>
                    <button onClick = {() => {deleteButton(val.Mcode)}}>Delete</button>
                    <input type='text' onChange = {(e) => {setNewLname(e.target.value)}}/>
                    <button onClick = {() => {updateButton(val.Mcode)}}>Update</button>
                </div>
                )
            })}
        </div>

    )
}

export default ManagerMedication