import React from "react";
import './card.css'
import {Link} from "react-router-dom";


export const CardsList=({cards})=> {
    // const history=useHistory();
    if (!cards.length){
        return <p className="center">No collections</p>
    }

    return (
<div>
        { cards.map(card=>{
                return (
                    <ul className="collection" key={card._id}>
                        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                        <li className="collection-item">
                            {/*<img className="img" src={require("./chanel.jpg")} alt=""/>*/}
                            <p className="edit"><Link to={`/editCollection/${card._id}`}>Edit</Link></p>
                            <Link to={`/cardItems/${card._id}`}><p className="collection-header">{card.title}</p></Link>
                            <p>{card.description}</p>
                            <p className="par">{card.theme}</p>
                        </li>

                    </ul>
                )

            })}
</div>
)
}
