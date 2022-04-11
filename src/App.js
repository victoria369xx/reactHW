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
import {getIsAuth} from './store/user/selectors';
import { initAuthAction } from './store/user/actions';
import {PrivateRoute} from './hocs/PrivateRoute';
import {PublicRoute} from './hocs/PublicRoute';





function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);

  useEffect(()=> {
    dispatch(initAuthAction);
  });

  return (
    <Container>
        <ul style={{display:'flex', listStyleType:'none'}}>
            <Link to="/" style={{marginRight: '20px'}}>Home</Link>
            <Link to="/profile" style={{marginRight: '20px'}}>Profile</Link>
            <Link to="/api" >API</Link>
        </ul>
  
        <Switch>
        <Switch>
          <PublicRoute auth={isAuth} exact path="/" component={Home}/>
          <PublicRoute auth={isAuth} exact path ="/login" component={LogIn}/>
          <PublicRoute auth={isAuth} exact path ="/signup" component={SignUp}/> 
        </Switch> 


        <Switch> 
        <PrivateRoute auth={isAuth} exact path="/profile" component={Profile}/>
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
        </Switch> 

        <PublicRoute auth={isAuth} path="/api" component={TestApi}/>
    
        <Route>
          <h2> 404 Page not found</h2>
        </Route>

      </Switch>

    </Container>
  );
}

export default App;
