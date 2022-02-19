import React from 'react';
import {Message} from './components';
import './App.css'

const text = "This is my first React App!"

function App() {
  return (
    <div className='wrapper'>
      <h1 className='heading'>React App</h1>
      <Message text={text}/>
    </div>
  );
}

export default App;
