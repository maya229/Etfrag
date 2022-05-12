import 'swiper/swiper.min.css'
import CookieConsent from "react-cookie-consent";
//import CookieConsent, { Cookies } from "react-cookie-consent";
import './App.scss';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Routes from './config/Routes';
import LRoutes from './config/Lroute';


function App() {
  return (

    <BrowserRouter>
    <LRoutes/>
     <Route render={props => (
       <>
           <Header {...props}/>
           <Routes/>
           <Footer/>
           <CookieConsent debug={true}
  location="bottom"
  buttonText="Agree!"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#1725CB" }}
  buttonStyle={{ color: "#FFFF", background: "#14ACDC" , fontSize: "20px" }}
  expires={150}
>
  This website uses cookies to enhance the user experience.{" "}
  <span style={{ fontSize: "10px" }}> </span>
</CookieConsent>

       </>
     )}/>
    </BrowserRouter>
  );
}

export default App;
