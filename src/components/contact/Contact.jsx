import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contact.scss";



/*emilsjs
serviceID: service_j88re0k
userID: user_78DBQP8ccCImt6cOqAasH
*/

export default function Contact() {
  const [message, setMessage] = useState(false);  
  const [focused, setFocused] = useState(false);

  const form = useRef();

  const handleFocus = (e) => {
    setFocused(true);  
  };

  const sendEmail = (e) => {
    console.log("estoy")
    e.preventDefault();

    emailjs.sendForm('service_j88re0k', 'template_5wleswg', form.current, 'user_78DBQP8ccCImt6cOqAasH')
      .then((result) => {
          console.log(result.text);
          setMessage(true);
      }, (error) => {
          console.log(error.text);          
      });
  };

  return (
    <div className="contact" id="contact">
      <div className="svgContainer" >
                <svg viewBox="0 0 500 100" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
                    <path d="M0.00,49.99 C150.00,150.00 271.49,-49.99 500.00,49.99 L500.00,0.00 L0.00,0.00 Z" style={{stroke: 'none', fill: '#EEEEF0'}}></path>
                </svg>
      </div>
      <div className="contactContainer">
        <div className="left">
          <h2>Contacto</h2>
          <span>Quieres hacer alguna pregunta, saludar, pedir mi currículum o ver si podemos construir algo increible juntos?. !Dejame un mensaje, me encantaría saber de ti!</span>
          <div className="messageResult">{message && <span>Gracias por tu mensaje, Te contenstaré muy pronto :) &#x1F609;</span>}</div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Name" name="name" required={true} onBlur={handleFocus} focused={focused.toString()} />
            <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
              <input type="text" name="b_92d05ec37b6b20eb59660f3e7_470ba96778" tabIndex="-1" value="" />
            </div>
            <input type="text" placeholder="Email" name="email" required={true} onBlur={handleFocus} focused={focused.toString()}/>
            <textarea placeholder="Message" name="message" required={true} onBlur={handleFocus} focused={focused.toString()}></textarea>
            <button type="submit">Enviar</button>            
          </form>
        </div>
        <div className="right">
          <div className="contactImg">
            <img src="assets/contact.svg" alt="" />
            {/*<a href='https://www.freepik.com/vectors/flat'>Flat vector created by freepik - www.freepik.com</a>-->*/}
          </div>
        </div>
      </div>
    </div>
  );
}
