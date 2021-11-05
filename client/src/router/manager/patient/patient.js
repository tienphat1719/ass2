import React, {useState, useEffect} from 'react'
import {Switch,Route,Link, Redirect} from "react-router-dom"
import Axios from 'axios'

import './patient.css'
import PatientAdd from './patientAdd'
import PatientSearch from './patientSearch'

const NavPatient = () => {
    return(
        <nav>
            <Link className='nav-links' to='/manager/patient/add'>
                Add
            </Link>     

            <Link className='nav-links' to='/manager/patient/search'>
                Search
            </Link>
        </nav>
    )
}

const Patient = () => {

    const [newLname, setNewLname] = useState('')

    const [patientList, setPaList] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3001/api/patient/getAll').then((res) => {
        setPaList(res.data)
        })
    }, [])

    const deleteButton = (P_code) => {
        Axios.delete(`http://localhost:3001/api/patient/delete/${P_code}`).then(() => {alert('del success')})
    }

    const updateButton = (P_code) => {
        Axios.put('http://localhost:3001/api/patient/update', {
        P_code: P_code,
        P_lname: newLname,

        }).then(() => {alert('update success')})
    }

    const [searchPatient, setSearchPatient] = useState('')

    return(
        <div className='managerPatient'>
            <NavPatient />
            <Switch>
                <Route path='/manager/patient/add'>
                    <PatientAdd />
                </Route>

                <Route path='/manager/patient/search'>
                    <PatientSearch />
                </Route>
            </Switch>


            This is manager user interact with patient

            <div className = 'patientList'>
                {patientList.map((val) => {
                    return (
                    <div className='patientList_item'>
                        <div>patient: {val.Pcode}, name: {val.P_fname + ' ' + val.P_lname}</div>
                        
                        {/* <button onClick = {() => {deleteButton(val.P_code)}}>Delete</button>
                        <input type='text' onChange = {(e) => {setNewLname(e.target.value)}}/>
                        <button onClick = {() => {updateButton(val.P_code)}}>Update</button> */}
                        <div>
                            <button className='delete'>Delete</button>
                            <button className='update'>Update</button>
                        </div>
                    </div>
                    )
                })}

                
            </div>
            
        </div>

    )
}

export default Patient