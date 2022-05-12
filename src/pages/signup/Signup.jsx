import './signup.scss';
import { Link } from 'react-router-dom';
import facbook from "./image/facebook-circular-logo.png";
import insta from "./image/instagram.png";
import twit from "./image/twitter.png";



function  Signup () {
 
  return (




       <div className='cont'>
         
         <div className='container'>
           
           <div className="title"><h1>Sign up</h1></div>
           <div className="input">
             <input type="email" placeholder="Email" className="name"/>
             <input type="password" placeholder="password" className="name"/>
           </div>
           
           <div class="clearfix">
       <button type="button" class="btn1"><Link to="/">sign up</Link></button>
  

           </div>
            <p className="link">
            <Link to="/login/login">You already have an account?</Link>
            </p>
            
       </div >
       <div className="img"> 
           <img src={facbook} alt="facbook" className="email"/>
           
           <img src={twit} alt="twiteer" className="email"/>
           
           <img src={insta} alt="insta" className="email"/>
        </div>
     </div>
    
   
 );
}
 
  


export default  Signup;