import React, {useContext, useEffect, useState} from "react";
import './AddCollectionPage.css'
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../contexT/AuthContext";
import {useMessage} from "../hooks/message.hook";
import {useHistory} from "react-router-dom";
export const AddCollectionPage=()=>{
    const { loading, request, error, clearError} = useHttp();
    const auth=useContext(AuthContext)
    const message = useMessage();
    const history=useHistory();
    const [card, setCard]=useState({
        title: '', description:''
    })
    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const createCollection = async ()=> {
        try {
            const data = await request('/api/card/collection', 'POST', {...card},
                {Authorization:`Bearer ${auth.token}`})
            console.log(data,'dataaaaaaaaaaaaaaa')
            await history.push(`/collections`)
        } catch (e) {
            console.log(e,'errooooooooooooooor')
        }
    }

    const changeHandler = event => {
        setCard({...card, [event.target.name]: event.target.value})
    }

    const back = async () =>{
        try{
            await request(window.location.href = "http://localhost:3000/collections")
        }catch (e) {
            console.log(e,'errooooooooooooooor')
        }}

    return (
        <div>
            <ul className="header ">
                <li className="header-title col s4 offset-3">Create Collection</li>
            </ul>
            <div className="widget col s1 offset-1 ">
                <ul className="widget-list">
                    <li><a href="">Choose a theme</a></li>
                </ul>
            </div>
            <ul className="collection">
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                <li className="collection-item img">
                    <div className="input-field col s7 offset-s1">
                        <input
                            placeholder="Name of collection"
                            id="title"
                            type="text"
                            name="title"
                            className="yellow-input"
                            value={card.title}
                            onChange={changeHandler}



                        />
                    </div>

                    <div className="input-field col s7 offset-s1">
                        <input
                            placeholder="Description"
                            id="description"
                            type="text"
                            name="description"
                            className="yellow-input"
                            value={card.description}
                            onChange={changeHandler}
                        />
                    </div>

                    <button
                        className="btn brown darken-3 "
                        onClick={createCollection}
                       // disabled={loading}
                    >
                        Create
                    </button>

                </li>

            </ul>
            <a
                className="text black-text"
                onClick={back}
            >
                Back
            </a>
        </div>

    );
};
