import "./login.scss"
import user from "./image/user (1).png"
import { Link } from 'react-router-dom';
import { checkboxClasses } from "@mui/material";
function  Login () {
 
    return (
         <div className='cont'>
           
           <div className='container'>
             
             <div className="title1">
             <img src={user} alt="login" />
               </div>
             <div className="input1">
               <input type="Username" placeholder="Username" className="name1"/>
               <input type="password" placeholder="password" className="name1"/>
             </div>
              </div>
              <p className="link1">
                 <a> Forgot Password?</a> 
              </p>
             <div class="clearfix1">
         <button type="button" class="cancelbtn1"><Link to="/">Login</Link></button>
            
              
         </div >
    
       </div>
      
     
   );
  }
   
    
  
  
  export default  Login;