import React, { useEffect } from 'react';
import {Switch, Route, Link, BrowserRouter} from 'react-router-dom';
import Home from './routs/Home/Home';
import Profile from './routs/Profile/Profile';
import Chats from './routs/Chats/Chats';
import Chat from './routs/Chat/Chat';
import TestApi from './routs/TestApi/TestApi';
import Container  from '@mui/material/Container';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {store} from './store'; 

import {getIsAuth} from './store/user/selectors';
import { initAuthAction } from './store/user/actions';
import {PrivateRoute} from './hocs/PrivateRoute';
import {PublicRoute} from './hocs/PublicRoute';




function App() {
  const isAuth = useSelector(getIsAuth); 
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(initAuthAction)
  })

  return (
    <Provider store={store}>
      
    <Container>
       <BrowserRouter>

        <ul style={{display:'flex', listStyleType:'none'}}>
            <li style={{marginRight:'20px'}}>
            <Link to="/">Home</Link>
            </li>
            <li style={{marginRight:'20px'}}>
            <Link to="/profile">Profile</Link>
            </li>
            <li style={{marginRight:'20px'}}>
            <Link to="/chats">Chats</Link>
            </li>
            <li>
              <Link to="/api">API</Link>
            </li>
            <li>
              <Link to="/logIn"> Log In</Link>
            </li>
            <li>
              <Link to="/signUp">Sign Up</Link>
            </li>
        </ul>
  
        <Switch>
        <PublicRoute exact path="/" auth={isAuth} component={Home}/>

        <PrivateRoute exact path="/profile" auth={isAuth} component={Profile}/>
      
        <PrivateRoute path="/chats">
        <Chats>
            <Switch> 
              <Route path="/chats/:chatId" component={Chat}/>
              <Route>
                  <h2> 404 Chat not found</h2>
              </Route>
            </Switch>
        </Chats>
        </PrivateRoute>

        <PublicRoute path="/api" component={TestApi}/>

        <PublicRoute>
          <h2> 404 Page not found</h2>
        </PublicRoute>

      </Switch>

        </BrowserRouter>

    </Container>
  
    </Provider>
  );
}

export default App;
