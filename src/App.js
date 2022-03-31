import React from 'react';
import {Switch, Route, Link, BrowserRouter} from 'react-router-dom';
import Home from './routs/Home/Home';
import Profile from './routs/Profile/Profile';
import Chats from './routs/Chats/Chats';
import Chat from './routs/Chat/Chat';
import Shiba from './routs/Shiba/Shiba';
import Container  from '@mui/material/Container';
import {Provider} from 'react-redux';
import {store} from './store';
import {persistor} from './store/index';
import { PersistGate } from 'redux-persist/integration/react';





function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
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
              <Link to="/shiba">Shiba API</Link>
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

        <Route path="/shiba" component={Shiba}/>

        <Route>
          <h2> 404 Page not found</h2>
        </Route>

      </Switch>

        </BrowserRouter>

    </Container>
    </PersistGate>
    </Provider>
  );
}

export default App;
