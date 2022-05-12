import React from 'react';
import './aboutus.scss';
import { Link } from 'react-router-dom';
import ShareLink from 'react-facebook-share-link'
import zouzi from "./image/zahwa.png";
import soso from "./image/suhaila.png";
import maya from "./image/maya.png";
import marzok from "./image/marzok.png";
import yasser from "./image/yasser.png";
import nour from "./image/nour.png";
import mahmoud from "./image/mahmoud.png";
import facebook from "./image/facebook-logo.png"
import insta from "./image/instagram (1).png"
import twitter from "./image/twitter (1).png"

function  About () {
 
    return (
        <section class="bg-light mt-5" id="tourist">    
        <div class="containe">
          <div class="row text-center">
           
              <div class="about-section">
                 <h1 id='a'>About Us Page</h1>
                 <p>Etfarag is a streaming service that offers a wide variety of award-winning TV shows, movies on thousands of internet-connected devices.</p>
                 <p>There's always something new to discover and new TV shows and movies are added every week!</p>
              </div>
             <div className='t'><h2 >Our Team</h2></div> 
              <div class="row">

                 <div className='f'> 
                <div class="column">
                  <div class="card">
                    <img src={zouzi} class="rounded"/>
                       <div class="container">
                          <h2>Zahwa Tarek</h2>
                          <ShareLink link='https://your-site.com/some-page'>
                             {link => (
                             <a href={"https://twitter.com/zahhwaxx"} target='_blank'><img src={twitter} alt="twiteer" className="email"/></a>
                              )}
                          </ShareLink>

                          <ShareLink link='https://your-site.com/some-page'>
                             {link => (
                             <a href={"https://www.facebook.com/zahwa.tarek.54"} target='_blank'><img src={facebook} alt="facbook" className="email"/></a>
                              )}
                          </ShareLink>

                          <ShareLink link='https://your-site.com/some-page'>
                             {link => (
                             <a href={"https://instagram.com/zahwax?utm_medium=copy_link"} target='_blank'><img src={insta} alt="insta" className="email"/></a>
                              )}
                          </ShareLink>
                       </div>
                    </div>
                </div>
    

                <div class="column">
                  <div class="card">
                  <img src={soso} class="rounded"/>
                       <div class="container">
                          <h2>Suhaila Mahmoud</h2>
                           <ShareLink link='https://your-site.com/some-page'>
                             {link => (
                             <a href={"https://twitter.com/suheila_mahmoud"} target='_blank'><img src={twitter} alt="twiteer" className="email"/></a>
                              )}
                          </ShareLink>

                          <ShareLink link='https://your-site.com/some-page'>
                             {link => (
                             <a href={"https://www.facebook.com/suheila.sabri.3"} target='_blank'><img src={facebook} alt="facbook" className="email"/></a>
                              )}
                          </ShareLink>

                          <ShareLink link='https://your-site.com/some-page'>
                             {link => (
                             <a href={"https://instagram.com/suheila_mahmoud?utm_medium=copy_link"} target='_blank'><img src={insta} alt="insta" className="email"/></a>
                              )}
                          </ShareLink>
                       </div>
                    </div>
                </div>


                <div class="column">
                  <div class="card">
                  <img src={maya} class="rounded"/>
                       <div class="container">
                          <h2>Maya Mohamed</h2>
                          <ShareLink link='https://your-site.com/some-page'>
                             {link => (
                             <a href={"https://www.facebook.com/profile.php?id=100007031440290"} target='_blank'><img src={twitter} alt="twiteer" className="email"/></a>
                              )}
                          </ShareLink>

                          <ShareLink link='https://your-site.com/some-page'>
                             {link => (
                             <a href={"https://www.facebook.com/profile.php?id=100007031440290"} target='_blank'><img src={facebook} alt="facbook" className="email"/></a>
                              )}
                          </ShareLink>

                          <ShareLink link='https://your-site.com/some-page'>
                             {link => (
                             <a href={"https://instagram.com/mayamohamed20001?utm_medium=copy_link"} target='_blank'><img src={insta} alt="insta" className="email"/></a>
                              )}
                          </ShareLink>
                       </div>
                    </div>
                </div></div>


                <div class="column">
                  <div class="card">
                  <img src={marzok} class="rounded"/>
                       <div class="container">
                          <h2>Abdelrahman Marzok</h2>
                          <ShareLink link='https://your-site.com/some-page'>
                             {link => (
                             <a href={"https://www.facebook.com/Abdulrhman.marzok.17"} target='_blank'><img src={twitter} alt="twiteer" className="email"/></a>
                              )}
                          </ShareLink>

                          <ShareLink link='https://your-site.com/some-page'>
                             {link => (
                             <a href={"https://www.facebook.com/Abdulrhman.marzok.17"} target='_blank'><img src={facebook} alt="facbook" className="email"/></a>
                              )}
                          </ShareLink>

                          <ShareLink link='https://your-site.com/some-page'>
                             {link => (
                             <a href={"https://instagram.com/abdelrhmanmrzok?utm_medium=copy_link"} target='_blank'><img src={insta} alt="insta" className="email"/></a>
                              )}
                          </ShareLink>
                       </div>
                    </div>
                </div>


                <div class="column">
                  <div class="card">
                  <img src={yasser} class="rounded"/>
                       <div class="container">
                          <h2>Mohamed Yasser</h2>
                          <ShareLink link='https://your-site.com/some-page'>
                             {link => (
                             <a href={"https://twitter.com/mohamed2511200"} target='_blank'><img src={twitter} alt="twiteer" className="email"/></a>
                              )}
                          </ShareLink>

                          <ShareLink link='https://your-site.com/some-page'>
                             {link => (
                             <a href={"https://www.facebook.com/profile.php?id=100026964491447"} target='_blank'><img src={facebook} alt="facbook" className="email"/></a>
                              )}
                          </ShareLink>

                          <ShareLink link='https://your-site.com/some-page'>
                             {link => (
                             <a href={"https://instagram.com/mohamedyasser9960?utm_medium=copy_link"} target='_blank'><img src={insta} alt="insta" className="email"/></a>
                              )}
                          </ShareLink>
                       </div>
                    </div>
                </div>


                <div class="column">
                  <div class="card">
                  <img src={nour} class="rounded"/>
                       <div class="container">
                          <h2>Nour Morgan</h2>
                          <ShareLink link='https://your-site.com/some-page'>
                             {link => (
                             <a href={"https://twitter.com/nourmorgan01"} target='_blank'><img src={twitter} alt="twiteer" className="email"/></a>
                              )}
                          </ShareLink>

                          <ShareLink link='https://your-site.com/some-page'>
                             {link => (
                             <a href={"https://www.facebook.com/nour.morgan.58"} target='_blank'><img src={facebook} alt="facbook" className="email"/></a>
                              )}
                          </ShareLink>

                          <ShareLink link='https://your-site.com/some-page'>
                             {link => (
                             <a href={"https://instagram.com/nour_morgan01?utm_medium=copy_link"} target='_blank'><img src={insta} alt="insta" className="email"/></a>
                              )}
                          </ShareLink>
                       </div>
                    </div>
                </div>


                <div class="column">
                  <div class="card">
                  <img src={mahmoud} class="rounded"/>
                       <div class="container">
                          <h2>Mahmoud Said</h2>
                          <ShareLink link='https://your-site.com/some-page'>
                             {link => (
                             <a href={"https://twitter.com/MahmouddSaidd"} target='_blank'><img src={twitter} alt="twiteer" className="email"/></a>
                              )}
                          </ShareLink>

                          <ShareLink link='https://your-site.com/some-page'>
                             {link => (
                             <a href={"https://www.facebook.com/Mahmouddsaidd"} target='_blank'><img src={facebook} alt="facbook" className="email"/></a>
                              )}
                          </ShareLink>

                          <ShareLink link='https://your-site.com/some-page'>
                             {link => (
                             <a href={"https://instagram.com/mahmoudsaidd?utm_medium=copy_link"} target='_blank'><img src={insta} alt="insta" className="email"/></a>
                              )}
                          </ShareLink>
                       </div>
                    </div>
                </div>

           </div>
         </div>
       </div> 
      </section> 
      
     
   );
   
  }
  export default  About;