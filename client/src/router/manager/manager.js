import React, {useState, useEffect} from 'react'
import {Switch,Route,Link, Redirect} from "react-router-dom"
import Axios from 'axios'

import Nav from './nav'
import ManagerHome from './manager_home'
import ManagerEmployee from './manager_employee'
import ManagerDepartment from './manager_department'
import ManagerMedication from './manager_medication'
import ManagerPatient from './manager_patient'

const Manager = () => {
    const [code, setCode] = useState()
    const [lname, setLname] = useState('')
    
    const [newLname, setNewLname] = useState('')

    const submitForm = () => {
        Axios.post('http://localhost:3001/api/patient/insert', {
        P_code: code,
        P_lname: lname,

        }).then(() => {alert('ins success')})
    }

    const deleteButton = (P_code) => {
        Axios.delete(`http://localhost:3001/api/patient/delete/${P_code}`).then(() => {alert('del success')})
    }

    const updateButton = (P_code) => {
        Axios.put('http://localhost:3001/api/patient/update', {
        P_code: P_code,
        P_lname: newLname,

        }).then(() => {alert('update success')})
    }

    return(
      <div>
        <Nav />
        <Switch>
            <Route exact path='/manager'> 
              <ManagerHome />
            </Route>

            <Route path='/manager/home'> 
              <ManagerHome />
            </Route>

            <Route path='/manager/employee'> 
              <ManagerEmployee />
            </Route>

            <Route path='/manager/department'> 
              <ManagerDepartment />
            </Route>

            <Route path='/manager/medication'> 
              <ManagerMedication />
            </Route>

            <Route path='/manager/patient'> 
              <ManagerPatient />
            </Route>
        </Switch>
      </div>
      // <div className="App">
      //   <h1>Hospital App</h1>
      //   <h2>Insert employee</h2>
      //   <div  className="form">
      //     <label>Code</label>
      //     <input type='text' onChange = {(e) => {setCode(e.target.value)}}/>

      //     <label>Last Name</label>
      //     <input type='text' onChange = {(e) => {setLname(e.target.value)}}/>

          

      //     <button onClick={submitForm}>Submit</button>

    
      //     {patientList.map((val) => {
      //       return (
      //         <div>
      //           <h1>patient: {val.P_code}, name: {val.P_lname}</h1>
      //           <button onClick = {() => {deleteButton(val.P_code)}}>Delete</button>
      //           <input type='text' onChange = {(e) => {setNewLname(e.target.value)}}/>
      //           <button onClick = {() => {updateButton(val.P_code)}}>Update</button>
      //         </div>
      //       )
      //     })}

      //   </div>
      // </div>    
    )
}

export default Manager