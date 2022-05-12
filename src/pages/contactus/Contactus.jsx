    import React from "react";
    import con from "./image/contact.png";
    import "./contactus.scss";
    
    function Contact() {
      return (
        <div className="contact">
          <div
            className="leftSide"
            style={{ backgroundImage: `url(${con})` }}
          ></div>
          <div className="rightSide">
            <h1> Contact Us</h1>
    
            <form id="contact-form" method="GET">
              <label htmlFor="name">Full Name</label>
              <input name="name" placeholder="Enter full name..." type="text" />
              <label htmlFor="email">Email</label>
              <input name="email" placeholder="Enter email..." type="email" />
              <label htmlFor="message">Message</label>
              <textarea 
              className="Final"
                rows="4"
                placeholder="Enter message..."
                name="message"
                required
              ></textarea>
              <button type="submit"> Send!</button>
            </form>
          </div>
        </div>
      );
    }
    
    export default Contact;
