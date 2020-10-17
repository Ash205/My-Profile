import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const LoginRoute = ({auth, comp: Component, ...rest})=>{
    return (
        <Route {...rest}
        render={()=>!auth ? (<Component/>) : (<Redirect to='/dashboard' />)
        }/>
    );
}

export default LoginRoute;