
import React, {useEffect, useState} from 'react';
import './App.css';
import  {MessageList}  from './components';
import {Form} from './components'

function App() {

  const [list, setList] = useState ([]);

  function updateList (msg) {
    const newList = [...list];
    newList.push(msg)
    setList (newList) 
  };

  useEffect(()=> {
    if (list.length === 0) {
      return;
    }

    const lastMsg = list[list.length - 1];

    if (lastMsg.author === "Bot") {
      return;
    }

    const botReply = {author: "Bot", text: "Your message has been sent"}

    setTimeout(()=>{
      updateList (botReply)
    }, 1000)

  })

  return (
    <div className='wrapper'>
      <h1 className='heading'>React App</h1>

     <MessageList list={list}/>
      <Form onSent={updateList}/>

    </div>
  );
}

export default App;
