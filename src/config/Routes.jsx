import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Details from "../pages/details/Details";

import Signup from "../pages/signup/Signup"



const Routes = () => {
    return(
        <Switch>
            <Route
                path='/:category/search/:keyword/' 
                component={Catalog}
            />
             <Route
                path='/:category/:1/:2' 
                component={Signup}
            />
            <Route
                path='/:category/:id' 
                component={Details}
            />
            <Route
                path='/:category' 
                component={Catalog}
            />
            <Route
                path='/' 
                exact
                component={Home}
            />
            
    
        </Switch>
        
        
    );
}
export default Routes;