import React from "react";
import mail from "../assets/svg/mail.svg";
import tel from "../assets/svg/tel.svg";
import illustrationContact from "../assets/contact.png";
import "../styles/contact.css";

function Contact() {
  return (
    <div className="global-contact-container">
      <div className="title-illustration-container">
        <h1>Contact</h1>
        <img src={illustrationContact} className="illustration" alt="Logo mail" />
      </div>

      <div className="contact-container">
        <div className="contact-bloc">
          <a className="contact-image-box" href="tel:0499857095">
            <img src={tel} alt="Logo téléphone" />
          </a>
          <div className="contact-info">
            <p>Numéro</p>
            <a href="tel:0499857095" className="contact-link">
              0499 85 70 95
            </a>
          </div>
        </div>

        <div className="contact-bloc">
          <a href="mailto:infos@wfes.be" className="contact-image-box">
            <img src={mail} alt="Logo mail" />
          </a>
          <div className="contact-info">
            <p>E-mail</p>
            <a href="mailto:infos@wfes.be" className="contact-link">
              infos@wfes.be
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
