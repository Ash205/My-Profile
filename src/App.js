import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProjectList from './ProjectList';
import './App.css';

function App(){
  return (
    <Router>
    <div className="container">
      <Switch>
      <Route path='/projects' exact>  <ProjectList /> </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
