import React from "react";

export const LoginPage=()=>{
    return(
        <div>
            <div className="row">
                <div className="card col s6 offset-s3">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title"
                                  >Authorization</span>
                        </div>

                        <div style={{marginLeft: 20}}  className="input-field  ">

                            <input

                                placeholder="Enter your email address"
                                   id="email"
                                   type="text"
                                   name="email"
                                   className="yellow-input"
                            />
                            <label htmlFor="first_name">Email</label>
                        </div>


                        <div style={{marginLeft: 20}}className="input-field">
                            <input placeholder="Enter the password"
                                   id="password"
                                   type="password"
                                   name="password"
                                   className="yellow-input"
                            />
                            <label htmlFor="first_name">Password</label>
                        </div>

                        <div className="card-action">

                            <button
                                className="btn orange darken-3"
                            >
                                Sign in
                            </button>

                            <button
                                className="btn teal lighten-4 black-text"
                                style={{marginLeft: 10}}
                            >
                                Registration
                            </button>
                        </div>
                        </div>

                    </div>
                </div>
            </div>


    )
}