import React, {useState} from "react";

export function Form (props){
    const [text, setMsgText] = useState('');
    const [author, setMsgAuthor] = useState('');
    let [msg, setMsg] = useState({});

    function submitHandler (event) {
            event.preventDefault();
            setMsg(msg = {author:author,text:text})
            props.onSent(msg)
    }
    return (
        <form onSubmit={submitHandler}>
            <input type='text' value={author} onChange={event => setMsgAuthor(event.target.value)} placeholder='Author' required/>
            <input type='text' value={text} onChange={event => setMsgText(event.target.value)} placeholder='Text' required/>
            <button type='submit'>Send</button>
        </form>
    )
}