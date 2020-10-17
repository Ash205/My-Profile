import React from 'react';
import './Home.css';
import Auth from './Auth';

function Home(){
  console.log(Auth.isAuthenticated());
  return (
    <div className="home-container">
        <h3>HOME</h3>
    </div>
  );
}

/* <button onClick={
  ()=>{
    // Auth.login(()=>{history.push('./contact');
    // window.location.reload(false);})
    Auth.login();
  }
}> Login </button> */

export default Home;