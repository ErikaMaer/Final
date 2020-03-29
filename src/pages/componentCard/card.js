import React from "react";
//import PropTypes from 'prop-types';

function Card({coll}) {
    return (
    <div className="card col s4 offset-s1">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={require("../chanel.jpg")}/>
        </div>
        <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">{coll.title}<i
                            className="material-icons right">more_vert </i></span>
            <button
                className="btn amber darken-4 "
            >Open</button>
        </div>
        <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Card Title<i
                className="material-icons right " >close</i></span>
            <p>{coll.description}</p>
            <button>Delete</button>
            <button>Edit</button>
        </div>
    </div>
)
}
// Card.propTypes={
//     todo: PropTypes.object.isRequired,
// }
export default Card


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