import './App.css';
import {BrowserRouter as Router,Switch,Route, Redirect} from "react-router-dom"

import Login from './router/login/login.js';
import Manager from './router/manager/manager.js'
import Patient from './router/patient/patient.js';
// import Employee from './router/Employee.js';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/manager' render = {() => {return (localStorage.getItem('accessToken') == 1) ? <Manager/> : <Redirect to='/'/>} } />
        <Route path='/patient' render = {() => {return (localStorage.getItem('accessToken') == 3) ? <Patient/> : <Redirect to='/'/>} } />

        {/* <Route exact path='/user/employee' component={() => <Manager authorized={2}/>}/>
        <Route exact path='/user/patient' component={() => <Manager authorized={3}/>}/> */}
      </Switch>
    </Router>
  );
}

export default App;
