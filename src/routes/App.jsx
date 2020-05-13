import React, {useEffect}from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {auth} from '../utils/firebase';
import {setLogin, setUser} from '../actions/';
import Layout from '../components/Layout';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Patient from '../pages/Patient';
import Social from '../pages/Social';
import FormEdit from '../components/FormEdit';
import '../styles/global.css';


const App = props => {
  console.log('props en App',props);
  useEffect(()=>{
    auth().onAuthStateChanged((user)=>{
      if(user){
        props.setUser(user);
        props.setLogin(true);
      }
    });
  },[]);

return(
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/pacientes/:id" component={Patient}/>
        <Route exact path="/pacientes/editar/:id" component={FormEdit}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/panel" component={Dashboard} />
        <Route exact path="/social" component={Social} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  
  </BrowserRouter>  

);
}
const mapDispatchToProps={
  setLogin,
  setUser,
}

export default connect(null,mapDispatchToProps)(App);