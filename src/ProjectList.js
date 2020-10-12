import React from 'react';
import Project from './Project';
import './App.css';

function ProjectList(){
  return (
    <div className="project-list-container">
      <Project name="Covid19 Protocol" link="https://vithack.herokuapp.com/"/>
      <Project name="Speech Suite" link="https://vithack.herokuapp.com/"/>
    </div>
  );
}

export default ProjectList;