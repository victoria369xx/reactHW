import React, {useState} from "react";
import './Form.css'

export function Form (props){
    const [text, setMsgText] = useState('');
    const [author, setMsgAuthor] = useState('');
    let [msg, setMsg] = useState({});

    function clearForm () {
        setMsgText(" ");
        setMsgAuthor(" ");
    }

    function submitHandler (event) {
            event.preventDefault();
            if (author === " ") {
                alert ('Укажите автора сообщения!')
                return
            }
            if (text === " ") {
                alert ('Введите текст сообщения!')
                return
            }
            setMsg(msg = {author:author,text:text})
            props.onSent(msg)
            clearForm();
    }
    return (
        <form onSubmit={submitHandler} className="form">
            <input type='text' className="input" value={author} onChange={event => setMsgAuthor(event.target.value)} placeholder='Author' required/>
            <input type='text' className="input" value={text} onChange={event => setMsgText(event.target.value)} placeholder='Text' required/>
            <button type='submit' className="submitBtn"> Send </button>
        </form>
    )
}