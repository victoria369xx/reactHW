import React, {useState} from 'react';
import './App.css';
import  {MessageList}  from './components';
import {Form} from './components'


function App() {

  const [list, setList] = useState ([
   {author: "Jack", text: "Hello please call me"},
  {author: "Megan", text: "I need to buy some books"} 
  ])

  function updateList (msg) {
    setList (list => list.push({author:`${msg.author}`, text:`${msg.text}`})) 
    console.log(list)
  }

  return (
    <div className='wrapper'>
      <h1 className='heading'>React App</h1>
     <MessageList list={list}/>
      <Form onSent={updateList}/>
    </div>
  );
}

export default App;
