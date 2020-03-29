import React from "react";
import {Navbar} from "../componentS/Navbar";
import './AddCollectionPage.css'
export const AddCollectionPage=()=>{


    return (
        <div>
        <Navbar/>

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
                            name="name"
                            className="yellow-input"
                            // onChange={changeHandler}
                        />
                    </div>

                    <div className="input-field col s12">
                        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                        <i className="material-icons prefix">edit</i>
                        <textarea id="textarea1" className="materialize-textarea"></textarea>
                        <label htmlFor="textarea1">Description</label>
                    </div>



                </li>

            </ul>

        </div>
    );
};
