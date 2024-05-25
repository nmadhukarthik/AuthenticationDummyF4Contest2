import React from 'react';
//import ReactDOM from 'react-dom/client';
import Login from "./login"
import "./style.scss";
import Auth from "./Auth";
import { useRef} from "react";
//import "./style.scss"

const App = () =>{

    const authRef = useRef(new Auth());
    return (
        <div className="container">
            <Login auth={authRef.current}/>
        </div>
    )
}

export default App