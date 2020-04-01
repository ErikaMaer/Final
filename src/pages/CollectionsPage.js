import React, {useState, useCallback, useEffect, useContext} from "react";
import {useHttp} from "../hooks/http.hook";
import {CardsList} from "./componentCard/CardsList";
import {useHistory} from 'react-router-dom'
import {AuthContext} from "../contexT/AuthContext";
import {Loader} from "../componentS/Loader";
import './CollectionPage.css'

//const {loading} = useHttp();

export const CollectionsPage =()=>{
    let [cards, setCards] = useState([]);
    const history=useHistory();
    const {token}= useContext(AuthContext)
    const {loading, request} = useHttp();

    const fetchCards = useCallback(async ()=>{
        try{
            const fetched = await request('/api/card', 'GET', null,{
                Authorization: `Bearer ${token}`
            })
            setCards(fetched)
        }catch (e) {}
    },[token,request])

    useEffect(()=>{
    fetchCards()
    },[fetchCards])

    if(loading){
        return <Loader/>
    }

    const add = async () =>{
            try{
                await history.push(`/addCollection`)
            }catch (e) {
                console.log(e,'errooooooooooooooor')
            }}


        return (
            <div>
                <div className="widget col s1 offset-1 ">
                    <h3 className="widget-title">Menu:</h3>
                    <ul className="widget-list">
                       <a href ="/addCollection" onClick={add}
                       >Add collection
                       </a>
                    </ul>
                    </div>
                {!loading && <CardsList cards={cards}/>}
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

