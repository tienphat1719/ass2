import './App.css';
import {useState, useEffect} from 'react'
import Axios from 'axios'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"

import Manager from './router/manager.js';
import Login from './router/login.js';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path={['/','/login']} component={Login}/>
        <Route exact path='/user/manager' component={() => <Manager authorized={1}/>}/>
      </Switch>
    </Router>
  );
}

export default App;
