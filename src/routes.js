// import React from "react";
// import {Switch, Route, Redirect} from "react-router-dom";
// import {RegistrationPage} from "./pages/RegistrationPage";
// import {LoginPage} from "./pages/LoginPage";
// import {Collections} from "./pages/CollectionsPage";
//
// export const useRoutes = isAuthenticated =>{
//     if(isAuthenticated){
//         return(
//             <Switch>
//                 <Route path ="/collections" exact>
//                     <Collections />
//                 </Route>
//                 <Redirect to ="/collections"/>
//             </Switch>
//         )
//     }
//     return (
//         <Switch>
//             <Route path="/" exact>
//                 <LoginPage/>
//             </Route>
//             <Route path="/registration" exact>
//                 <RegistrationPage/>
//             </Route>
//             <Redirect to="/"/>
//         </Switch>
//     )
// }

import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage";
import {CollectionsPage} from "./pages/CollectionsPage";
import {RegistrationPage} from "./pages/RegistrationPage";
import {AddCollectionPage} from "./pages/AddCollectionPage";
import {EditCollectionPage} from "./pages/EditCollectionPage";
import {AdminPage} from "./pages/AdminPage";

export const useRoutes = isAuthenticated =>{
    if(isAuthenticated){
        return(
            <Switch>
                <Route path ="/collections" exact>
                    <CollectionsPage />
                </Route>
                <Route path="/addCollection" exact>
                    <AddCollectionPage />
                </Route>
                <Route path ="/editCollection/:id">
                    <EditCollectionPage />
                </Route>
                <Route path="/items" exact>
                    <AdminPage  />
                </Route>
                <Redirect to ="/collections"/>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <LoginPage />
            </Route>
            <Route path="/registration" exact>
                <RegistrationPage />
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}