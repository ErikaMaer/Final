import React from "react";

export const RegistrationPage=()=>{
    return(
        <div>
            <div className="row">
                <div className="card col s6 offset-s3">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span
                                className="card-title"
                            >Registration</span>
                        </div>


                        <div  className="input-field  ">
                            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                            <i className="Large material-icons">person</i>
                            <input
                                style={{marginLeft: 60}}
                                placeholder="Name"
                                id="name"
                                type="text"
                                name="name"
                                className="yellow-input"
                            />


                        </div>



                        <div className="input-field  ">
                            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                            <i className="Large material-icons">email</i>
                            <input
                                style={{marginLeft: 60}}
                                placeholder="Email"
                                id="email"
                                type="text"
                                name="email"
                                className="yellow-input"
                            />

                        </div>

                        <div className="input-field">
                            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                            <i className="Large material-icons">lock</i>
                            <input placeholder="Password"
                                   style={{marginLeft: 60}}
                                   id="password"
                                   type="password"
                                   name="password"
                                   className="yellow-input"
                            />
                        </div>

                        <div className="card-action">

                            <button
                                className="btn teal lighten-4 black-text"
                                style={{marginLeft: 140}}
                            >
                                Register
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}