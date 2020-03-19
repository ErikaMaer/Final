import React from "react";

export const Collections=()=>{
    return(
        <div>
            <div className="row col s4 offset-s2">
                <div className="card col s3 offset-s1">
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src={require("../office.jpg")}/>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">Card Title<i
                            className="material-icons right">more_vert</i></span>
                        <button
                            className="btn amber darken-4 "
                        >Open</button>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">Card Title<i
                            className="material-icons right">close</i></span>
                        <p>Collection</p>
                    </div>
                </div>


                <div className="card col s3 offset-s1">
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src={require("../office.jpg")}/>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">Card Title<i
                            className="material-icons right">more_vert</i></span>
                        <button
                            className="btn amber darken-4 "
                        >Open</button>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">Card Title<i
                            className="material-icons right">close</i></span>
                        <p>Collection</p>
                    </div>
                </div>





                <div className="card col s3 offset-s1">
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src={require("../office.jpg")}/>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">Card Title<i
                            className="material-icons right">more_vert</i></span>
                        <button
                            className="btn amber darken-4 "
                        >Open</button>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">Card Title<i
                            className="material-icons right">close</i></span>
                        <p>Collection</p>
                    </div>
                </div>



        </div>
        </div>
    )
}