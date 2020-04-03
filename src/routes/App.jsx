import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from '../components/Layout';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Patient from '../pages/Patient';
import '../styles/global.css';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/pacientes/:id" component={Patient}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/panel" component={Dashboard} />
        <Route component={NotFound} />

      </Switch>
    </Layout>
  
  </BrowserRouter>  

);

export default App;