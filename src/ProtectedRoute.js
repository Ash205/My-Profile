import React from 'react';
import {Redirect, Route} from 'react-router-dom';
// import Auth from './Auth';

// export default function ProtectedRoute({comp: Component, ...rest}) {
//     console.log(Auth.isAuthenticated());
//     return (
//         <Route {...rest}
//         render={props=>{
//             if(Auth.isAuthenticated()){
//                 return <Component {...props} />;
//             }
//             else{
//                 return <Redirect to={
//                     {
//                         pathname: '/login',
//                         state: {from: props.location}
//                     } }/>;
//                 }
//             }   
//         }/>
//     );
// }

export default function ProtectedRoute({auth, comp: Component, ...rest}){
    return (
        <Route {...rest}
        render={()=>auth ? (<Component/>) : (<Redirect to='/login' />)
        }/>
    );
}
