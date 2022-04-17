import React, { useEffect } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Home from './routs/Home/Home';
import Profile from './routs/Profile/Profile';
import Chats from './routs/Chats/Chats';
import Chat from './routs/Chat/Chat';
import TestApi from './routs/TestApi/TestApi';
import LogIn from './routs/LogIn/LogIn';
import SignUp from './routs/SignUp/SignUp';
import Container  from '@mui/material/Container';
import { useDispatch, useSelector} from 'react-redux';
import { initAuthAction, logOutUserThunk} from './store/user/actions';
import {PrivateRoute} from './hocs/PrivateRoute';
import {PublicRoute} from './hocs/PublicRoute';
import {getIsAuth} from './store/user/selectors';
import Button from '@mui/material/Button';





function App() {
  const dispatch = useDispatch();
  const authed = useSelector(getIsAuth);

 
  useEffect(()=> {
    dispatch(initAuthAction);
  });

function logOutHandler () {
  dispatch(logOutUserThunk)
}
  return (
    <Container>
        <ul style={{display:'flex', listStyleType:'none'}}>
            <Link to="/" style={{marginRight: '20px'}}>Home</Link>
            <Link to="/api">API</Link>
            <Button variant="contained" size="medium" onClick={logOutHandler}> Log Out </Button>
        </ul>
  
        <Switch>
        
          <PublicRoute auth={authed}  exact path="/" component={Home}/>
          <PublicRoute  auth={authed} exact path ="/login" component={LogIn}/>
          <PublicRoute  auth={authed} exact path ="/signup" component={SignUp}/> 
      

          <PrivateRoute auth={authed} exact path="/profile" component={Profile}/>

          <Route path="/chats">
      <Chats>
          <Switch> 
            <Route path="/chats/:chatId" component={Chat}/>
            <Route>
                <h2> 404 Chat not found</h2>
            </Route>
          </Switch>
      </Chats>
      </Route>
       

        <PublicRoute auth={authed} path="/api" component={TestApi}/>
    
        <Route>
          <h2> 404 Page not found</h2>
        </Route>

      </Switch>

    </Container>
  );
}

export default App;
