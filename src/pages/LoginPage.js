import React, {useContext, useEffect, useState} from 'react';
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import {AuthContext} from "../contexT/AuthContext";


export const LoginPage = () =>{
    const auth = useContext(AuthContext)
    const message = useMessage();
    const {loading, request, error, clearError} = useHttp();
    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => {
        window.M.updateTextFields()
    }, [])


    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    // const registerHandler = async () => {
    //     try {
    //         const data = await request('/api/items/register', 'POST', {...form})
    //         message(data.message)
    //     } catch (e) {
    //     }
    // }

    const reg = async () =>{
        try{
       await request(window.location.href = "http://localhost:3000/registration")
    }catch (e) {
           console.log(e,'errooooooooooooooor')
        }}



    const loginHandler = async () => {
        try {
            const data = await request('/api/items/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        } catch (e) {
        }
    }


    return(
        <div>
            <div className="row col s6 offset-s3">
                <div className="card col s6 offset-s3" >
                        <div className="card-content white-text col s6 offset-s3 m8">
                            <span
                                className="card-title col s6 offset-s6"
                            >Authorization</span>
                        </div>


                        <div className="input-field col s7 offset-s1">
                            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                            <i className="material-icons prefix" >email</i>

                            <input
                                placeholder="Email"
                                id="email"
                                type="text"
                                name="email"
                                className="yellow-input "
                                onChange={changeHandler}
                            />
                        </div>

                        <div className="input-field col s7 offset-s1">
                            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                            <i className="material-icons prefix">lock</i>
                            <input
                               placeholder="Password"
                               id="password"
                               type="password"
                               name="password"
                               className="yellow-input"
                              onChange={changeHandler}
                        />
                        </div>

                        <div className="card-action col s4 offset-s1">
                            <button
                                className="btn amber darken-4 "
                                disabled={loading}
                                onClick={loginHandler}

                            >
                                Sign in
                            </button>
                        </div>
                      <div className="card-action col s4 offset-s1">
                            <button
                                className="btn yellow accent-2 black-text "
                                onClick={reg}
                                disabled={loading}
                            >
                                Registration
                            </button>
                        </div>
                    </div>
            </div>
        </div>
)
}

