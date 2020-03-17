import React from "react";

export const RegistrationPage=()=>{
    return(
        <div>
            <div className="row col s6 offset-s3">
            <div className="card col s6 offset-s3" >
                        <div className="card-content white-text col s6 offset-s3 m8 ">
                            <span
                                className="card-title col s6 offset-s5"
                            >Registration</span>
                        </div>


                        <div  className="input-field col s7 offset-s1 ">
                            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                            <i className="material-icons">person</i>
                            <input
                                placeholder="Name"
                                id="name"
                                type="text"
                                name="name"
                                className="yellow-input col s6 offset-s2"
                            />
                        </div>

                        <div className="input-field col s7 offset-s1">
                            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                            <i className="Large material-icons">email</i>
                            <input
                                placeholder="Email"
                                id="email"
                                type="text"
                                name="email"
                                className="yellow-input col s6 offset-s2"
                            />

                        </div>

                        <div className="input-field col s7 offset-s1">
                            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                            <i className="Large material-icons">lock</i>
                            <input placeholder="Password"
                                   id="password"
                                   type="password"
                                   name="password"
                                   className="yellow-input col s6 offset-s2"
                            />
                        </div>

                        <div className="card-action col s6 offset-s4">

                            <button
                                className="btn yellow accent-3 black-text  "
                            >
                                Register
                            </button>
                        </div>
                    </div>

            </div>
        </div>
    )
}