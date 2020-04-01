import React from "react";
import './card.css'
import {Link} from "react-router-dom";


export const CardItemsList =({items})=> {
    // const history=useHistory();
    if (!items.length){
        return <p className="center">No items</p>
    }

    return (
        <div>
            { items.map(item=>{
                return (
                    <ul className="collection" key={item._id}>
                        <li className="collection-item">
                            <span className="collection-header">{item.title}</span>
                            <p>{item.description}</p>
                        </li>
                    </ul>
                )
            })}
        </div>
    )
}
