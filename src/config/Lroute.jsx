import React from "react";


import { Route, Switch } from "react-router-dom";
import Login from "../pages/signup/Login/Login";
import Contact from "../pages/contactus/Contactus";
import About from "../pages/aboutus/Aboutus";
const LRoutes = () => {
    return(
    

          <Switch> 
              <Route path="/login/login" 
                     component={Login} />
              <Route path="/contact/ContactUs" 
                     component={Contact} />    
               <Route path="/about/AboutUs" 
                     component={About} />          
        </Switch>
    
        
        
        
    );
}
export default LRoutes;