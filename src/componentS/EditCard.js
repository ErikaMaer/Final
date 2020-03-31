import React from "react";

export const EditCard =({card}) =>{
    return(
        <ul className="collection" key={card._id}>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            <li className="collection-item">
                <span className="collection-header"><p>You title:{card.title}</p></span>
                <p>You description:{card.description}</p>
                <p>You theme:<span className="collection-theme">Beauty</span></p>
            </li>
        </ul>
    )
}

