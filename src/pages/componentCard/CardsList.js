import React from "react";
import './card.css'
import {Link} from "react-router-dom";
//import PropTypes from 'prop-types';


export const CardsList=({cards})=> {
    // const history=useHistory();
    if (!cards.length){
        return <p className="center">Not collections</p>
    }


    // const editCollection = async () =>{
    //     try{
    //         await history.push(`/editCollection/:id`)
    //     }catch (e) {
    //         console.log(e,'errooooooooooooooor')
    //     }}

    return (
<div>
        { cards.map(card=>{
                return (
                    <ul className="collection" key={card._id}>
                        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                        <li className="collection-item">
                            {/*<img className="img" src={require("./chanel.jpg")} alt=""/>*/}
                            <span className="collection-header"><strong>{card.title}</strong></span>
                            <Link to={`/editCollection/${card._id}`}>Edit</Link>
                            <p>{card.description}</p>
                            <span className="collection-theme">Beauty</span>
                        </li>

                    </ul>
                )
                    // <a href="#!" className="secondary-content "><i className="material-icons black">edit</i></a>
            // onClick={editCollection}
            })}
</div>
)
}

////////////////////////////////

// <div className="card col s4 offset-s1">
//     <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
//     <div className="card-image waves-effect waves-block waves-light">
//         <img className="activator" src={require("../chanel.jpg")}/>
//     </div>
//     <div className="card-content">
//                         <span className="card-title activator grey-text text-darken-4">{coll.title}<i
//                             className="material-icons right">more_vert </i></span>
//         <button
//             className="btn amber darken-4 "
//         >Open</button>
//     </div>
//     <div className="card-reveal">
//             <span className="card-title grey-text text-darken-4">Card Title<i
//                 className="material-icons right " >close</i></span>
//         <p>{coll.description}</p>
//         <button>Delete</button>
//         <button>Edit</button>
//     </div>
// </div>


/////////////////////////////////////////



// Card.propTypes={
//     todo: PropTypes.object.isRequired,
// }
// export default Card


// return (
//     <div className="card col s4 offset-s1">
//         {/*<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>*/}
//         {/*<div className="card-image waves-effect waves-block waves-light">*/}
//         {/*    <img className="activator" src={require("./office.jpg")}/>*/}
//         {/*</div>*/}
//         <div className="card-content">
//                         <span className="card-title activator grey-text text-darken-4">{coll.title}<i
//                             className="material-icons right">more_vert </i></span>
//             <button
//                 className="btn amber darken-4 "
//             >Open</button>
//         </div>
//         <div className="card-reveal">
//             <span className="material-icons right " >close</span>
//             <p>{coll.description}</p>
//             <button>Delete</button>
//             <button>Edit</button>
//         </div>
//     </div>
// )