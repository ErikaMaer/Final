import React, {useContext} from "react";
import {useHistory} from 'react-router-dom';
import {AuthContext} from "../contexT/AuthContext";
import './componentS.css'

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
            <div className="nav-wrapper col s8">
                <div>
                    {/*<a href="#!" className="brand-logo">Collections</a>*/}
                            <input
                                className="input-nav col s6 offset-3"
                                placeholder="Search"/>
                </div>
                     <ul id="nav-mobile" className="right hide-on-med-and-down">
                         <li><a href ="/" onClick={logoutHandler}>Logout</a></li>
                    </ul>
                </div>

        </nav>




    )
}
// <div className="input-field col s6">
//     <input id="last_name" type="text" className="validate"/>
//     <label htmlFor="last_name">Last Name</label>
// </div>



// <ul id="nav-mobile" className="right hide-on-med-and-down">
//     <li><a href ="/" onClick={logoutHandler}>Logout</a></li>
//
// </ul>



// <div className="nav-wrapper purple darken-1" style ={{ padding: '0 2rem'}}>
//     <div className="nav-wrapper purple darken-1">