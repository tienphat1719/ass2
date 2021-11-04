import React from 'react';
import {Switch,Route} from "react-router-dom"

import './patient.css';

import Nav from './nav';
import PatientHome from './patient_home';

function Patient() {

return (
    <div className="container">
      <Nav/>
      <Switch>
        <Route exact path='/patient'> 
          <PatientHome/>
        </Route>

        <Route path='/patient/home'>
          <PatientHome/>
        </Route>
      </Switch>
    </div>
);
}

export default Patient;