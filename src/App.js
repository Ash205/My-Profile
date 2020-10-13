import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Contact from './Contact'
import ProjectList from './ProjectList';
import './App.css';

function App(){
  return (
    <Router>
    <div className="container">
      <Nav />
      <Switch> 
        <Route path='/' exact><Home/></Route>
        <Route path='/projects' exact>  <ProjectList /> </Route>
        <Route path='/about' exact><About/></Route>
        <Route path='/contact' exact><Contact/></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
// GKTC-9FZR-RP35W