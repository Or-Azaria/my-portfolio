import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
const Contact = () => {
  return (
    <section id="contact">
      <h5>get in touch</h5>
      <h2>contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>azriaor@gmail.com</h5>
            <a href="mailto:azriaor@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine />
            <h4>messenger</h4>
            <h5>or azaria</h5>
            <a href="http://m.me/or.azarya.5">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <h4>whatsApp</h4>
            <a href="http://api.whatsapp.com/send?phone=+972545617176">
              Send a message
            </a>
          </article>
        </div>
        {/* End of contact options */}
        <form action=""></form>
      </div>
    </section>
  );
};

export default Contact;
