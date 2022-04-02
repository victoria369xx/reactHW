import React from 'react';
import {Switch, Route, Link, BrowserRouter} from 'react-router-dom';
import Home from './routs/Home/Home';
import Profile from './routs/Profile/Profile';
import Chats from './routs/Chats/Chats';
import Chat from './routs/Chat/Chat';
import TestApi from './routs/TestApi/TestApi';
import Container  from '@mui/material/Container';
import {Provider} from 'react-redux';
import {store} from './store';






function App() {

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
        </ul>
  
        <Switch>
        <Route exact path="/" component={Home}/>

        <Route exact path="/profile" component={Profile}/>
      
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

        <Route path="/api" component={TestApi}/>

        <Route>
          <h2> 404 Page not found</h2>
        </Route>

      </Switch>

        </BrowserRouter>

    </Container>
  
    </Provider>
  );
}

export default App;
