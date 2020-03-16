import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {RegistrationPage} from "./pages/RegistrationPage";
import {LoginPage} from "./pages/LoginPage";
import {Collections} from "./pages/CollectionsPage";

export const useRoutes = isAuthenticated =>{
    if(isAuthenticated){
        return(
            <Switch>
                <Route path ="/collections" exact>
                    <Collections />
                </Route>
                <Redirect to ="/collections"/>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/login" exact>
                <LoginPage/>
            </Route>
            <Route path="/registration" exact>
                <RegistrationPage/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}