import React, {useCallback, useContext, useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import {useHttp} from "../hooks/http.hook";
import{AuthContext} from "../contexT/AuthContext";
import {Loader} from "../componentS/Loader";
import {EditCard} from "../componentS/EditCard";


export const EditCollectionPage = ()=>{
    const [card, setCard]= useState(null)
    const {token}=useContext(AuthContext)
    const {request, loading}=useHttp()
    const CardId = useParams().id

    const getCard= useCallback(async ()=>{
        try{
            const fetched =await request(`/api/card/${CardId}`, 'GET', null,{
                Authorization: `Bearer ${token}`
            })
            setCard(fetched)
        }catch (e) {}
    },[token,CardId,request])
    useEffect(()=>{
    getCard()
    },[getCard])


if(loading){
    return <Loader/>
}

    // const deleteColl = async () =>{
    //      try {
    //                 await request('/api/items/create/delete', 'DELETE', {id : checkedUser._id})
    //             } catch (e) {
    //             }
    //
    //         setCard(await request('/api/items/create', 'GET'))}

    const back = async () =>{
        try{
            await request(window.location.href = "http://localhost:3000/collections")
        }catch (e) {
            console.log(e,'errooooooooooooooor')
        }}

return(
        <div>
            <ul className="header ">
                <li className="header-title col s4 offset-3">Edit collection:</li>
            </ul>
            <div className="widget col s1 offset-1 ">
                <ul className="widget-list">
                    <a //onClick={deleteColl}
                    >Delete collection
                    </a>
                </ul>
                <a className="text black-text"
                    onClick={back}
                >Back</a>
            </div>
            { !loading && card && <EditCard card={card} />}
        </div>

)
}