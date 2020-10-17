import React, {useContext} from 'react';
import AuthApi from './AuthApi';
import Cookies from 'js-cookie';
import './Login.css';

const Login = ()=>{
    const Auth = useContext(AuthApi);
    const handleOnClick = ()=>{
        Auth.setAuth(true);
        Cookies.set("user", "loginTrue");
    }
    return (
        <div className="login-container">
            <div className="form-box">
            <img src="/logo192.png" alt=''/>
            <input id="loginname" className="input" type="text" placeholder="Username" name="username" />
            <input id="loginpass" className="input" type="password" placeholder="Password" name="password" />
            <button className="login-button" onClick={handleOnClick}>Login</button>
            </div>
        </div>
    )
  }

  export default Login;