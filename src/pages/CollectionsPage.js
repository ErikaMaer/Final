import React, {useState, useCallback,useEffect} from "react";
import {useHttp} from "../hooks/http.hook";
import './regAndLogPages.css'
import Card from "./componentCard/card";

//const {loading} = useHttp();

export const CollectionsPage =()=>{
    let [cards] = useState([]);
    const {loading, request} = useHttp();

    const addCollection = async () => {
        try {
            await request('/api/items/collection', 'POST');
            // console.log(arr,'arrrrrrrrrrr');
        } catch (e) {
        }
    }
    const getCollection=async()=>{
        try{
            await request('/api/items/collection', 'GET');
        }catch (e) {
        }
    }
    const add = async () =>{
            try{
                await request(window.location.href = "http://localhost:3000/addCollection")
            }catch (e) {
                console.log(e,'errooooooooooooooor')
            }}


        return (
            <div>
                <div className="widget col s1 offset-1 ">
                    <h3 className="widget-title">Menu:</h3>
                    <ul className="widget-list">
                       <button
                           disabled={loading}
                           onClick={add}
                       >Add collection
                       </button>
                       {/* <li><a onClick={add}>Add collection</a></li>*/}

                    </ul>
                    </div>
                    <ul className="collection">
                        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                        <li className="collection-item img">
                            <img src={require("./chanel.jpg")} alt=""/>

                            <span className="collection-header"><strong>Chanel</strong></span>
                            <a href="#!" className="secondary-content"><i className="material-icons">edit</i></a>
                                <p>Chanel - is a luxury company that focuses on high fashion and ready-made clothes, luxury products,
                                    and accessories.In his youth, Gabrielle Chanel gained the nickname Coco from her time as a chanteuse.
                                    As a fashion designer, Coco Chanel catered to women's taste for elegance in dress, with blouses and suits,
                                    trousers and dresses, and jewellery of simple design, that replaced the opulent,
                                    over-designed, and constrictive clothes and accessories of 19th-century fashion.
                               </p>
                        <span className="collection-theme">Beauty</span>
                        </li>

                    </ul>
                {/*<button*/}
                {/*    disabled={loading}*/}
                {/*    onClick={addCollection}>*/}
                {/*</button>*/}


                {/*<div className="row col s3 offset-1">*/}
                {/*/!*<Card coll={cards} key={cards._id}/>*!/*/}
                {/*</div>*/}

            </div>
        );
};



















 // export const Collections=()=> {
 //         return(
 //        <div>
 //            <div className="row col s2 offset-s1">
 //                <button
 //                    className=" col s offset-s "
 //                    //onClick={<Parent/>}
 //                >
 //                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
 //                <i className="material-icons col s offset-s" >add</i>
 //                </button>
 //              <Card/>
 //        </div>
 //        </div>
 //        )
 //     }

