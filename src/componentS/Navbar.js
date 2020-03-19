import React, {useContext} from "react";
import {useHistory} from 'react-router-dom';
import {AuthContext} from "../contexT/AuthContext";

export const Navbar = () =>{
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event =>{
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <nav>
            <div className="nav-wrapper purple darken-1" style ={{ padding: '0 2rem'}}>
                <div className="nav-wrapper purple darken-1">
                    <span className="brand-logo">Collections</span>

                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href ="/" onClick={logoutHandler}>Logout</a></li>

                    </ul>
                </div>
            </div>
        </nav>

    )
}
// <div className="input-field col s6">
//     <input id="last_name" type="text" className="validate"/>
//     <label htmlFor="last_name">Last Name</label>
// </div>