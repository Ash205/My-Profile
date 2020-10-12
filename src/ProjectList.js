import React from 'react';
import Project from './Project';
import './App.css';

function ProjectList(){
  return (
    <div className="project-list-container">
      <div className="project-row">
      <Project name="Covid19 Protocol" link="https://vithack.herokuapp.com/" img="/logo192.png"/>
      <Project name="Speech Suite" link="https://vithack.herokuapp.com/" img="/logo192.png"/>
      <Project name="Smart Farmers' Assistant" link="https://vithack.herokuapp.com/" img="/logo192.png"/>
      </div>
      <div className="project-row">
      <Project name="Covid19 Protocol" link="https://vithack.herokuapp.com/" img="/logo192.png"/>
      <Project name="Speech Suite" link="https://vithack.herokuapp.com/" img="/logo192.png"/>
      <Project name="Smart Farmers' Assistant" link="https://vithack.herokuapp.com/" img="/logo192.png"/>
      </div>
    </div>
  );
}

export default ProjectList;