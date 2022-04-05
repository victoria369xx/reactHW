import React from "react"; 

export  function LogIn () {

    return (
        <div>
        <h2> Log In </h2>
        <form> 
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button type="submit">Log up</button>
        </form>
        </div>
    )
}