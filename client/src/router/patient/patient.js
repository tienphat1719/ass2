import React, { Component } from 'react';
import {Switch,Route,Link, Redirect} from "react-router-dom"

import './patient.css';

import Nav from './nav';
import PatientHome from './patient_home';

function Patient() {

  const users = { date: '01/01/2022', nextdate: '01/01/2023', diagnosis: 'Cancer', fee: '1$' }

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