import React from "react";
import './card.css'
import {Link} from "react-router-dom";
import TodoList from "../../Todo/TodoList";


export const CardItemsList =({items})=> {
    // const history=useHistory();
    if (!items.length){
        return <p className="center">No items</p>
    }

    return (
        <table className ="table centered highlight">
            <thead>
            <tr>
                <th>Title</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            { items.map(item=>{
                return (
                    <tr key={item._id}>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}
