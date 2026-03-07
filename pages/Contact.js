import React from 'react'
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";
function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage: `url(${PizzaLeft})`}}></div>
        <div className='rightSide'>
        <h1> Contact Us </h1>

          <form id="contact-form" method="POST">
  <div className="form-group">
    <label htmlFor="name">Full Name :</label>
    <input name="name" placeholder="Enter full name..." type="text" />
  </div>

  <div className="form-group">
    <label htmlFor="email">Email :</label>
    <input name="email" placeholder="Enter email..." type="email" />
  </div>

  <div className="form-group">
    <label htmlFor="message">Message :</label>
    <textarea
      rows="6"
      placeholder="Enter message..."
      name="message"
      required
    ></textarea>
  </div>

  <button type="submit">Send Message</button>
</form>
        
        </div>
      
    </div>
  );
}

export default Contact
