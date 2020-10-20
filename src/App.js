import React, {useState, useContext, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AuthApi from './AuthApi';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Contact from './Contact'
import ProjectList from './ProjectList';
import LoginRoute from './LoginRoute'
import Login from './Login';
import PasswordManager from './PasswordManager';
import ProtectedRoute from './ProtectedRoute';
import './App.css';
import Cookies from 'js-cookie';
import TodoHandler from './Todo-List-App/TodoHandler'

function App(){
  const [auth, setAuth] = useState(false);
  const readCookie = ()=>{
    const user = Cookies.get("user");
    if(user) setAuth(true);
  }
  useEffect(()=>{readCookie();}, [])


  return (
    <AuthApi.Provider value={{auth, setAuth}}>
    <Router >
    <div className="container">
      <Nav />
      <Routes />
    </div>
    </Router>
    </AuthApi.Provider>
  );
}

const Routes = (props)=>{
    const Auth = useContext(AuthApi);
    return (
      <Switch> 
        <Route path='/' exact><Home /></Route>
        <LoginRoute path='/login' auth={Auth.auth} comp={Login} exact></LoginRoute>
        <Route path='/projects' exact>  <ProjectList /> </Route>
        <Route path='/about' exact>  <About /> </Route>
        <Route path='/error' exact> Error</Route>
        <Route path='/contact' ><Contact /></Route>
        <ProtectedRoute path='/dashboard' auth={Auth.auth} exact comp={Dashboard}></ProtectedRoute>



        <Route path='/projects/password-manager' exact><PasswordManager /></Route>
        <Route path='/projects/todo-list' exact><TodoHandler /></Route>
      </Switch>
    );
}

const Dashboard = ()=>{
  const Auth = useContext(AuthApi);
  const handleOnClick = ()=>{
      Auth.setAuth(false);
      Cookies.remove("user");
  }
  return (
      <div>
          <button onClick={handleOnClick}>Logout</button>
      </div>
  )
}

// const Login = ()=>{
//   const Auth = useContext(AuthApi);
//   const handleOnClick = ()=>{
//       Auth.setAuth(true);
//       Cookies.set("user", "loginTrue");
//   }
//   return (
//       <div>
//           <button onClick={handleOnClick}>Login</button>
//       </div>
//   )
// }

// const LoginRoute = ({auth, comp: Component, ...rest})=>{
//   return (
//       <Route {...rest}
//       render={()=>!auth ? (<Component/>) : (<Redirect to='/dashboard' />)
//       }/>
//   );
// }

// const ProtectedRoute = ({auth, comp: Component, ...rest})=>{
//   return (
//       <Route {...rest}
//       render={()=>auth ? (<Component/>) : (<Redirect to='/login' />)
//       }/>
//   );
// }

export default App;