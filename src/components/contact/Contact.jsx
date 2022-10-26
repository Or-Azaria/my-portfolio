import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
const Contact = () => {
  return (
    <section id="contact">
      <h5>get in touch</h5>
      <h2>contact me</h2>
      <div className="container contact__container">
        <article className="contact__options">
          <MdOutlineEmail />
          <h4>Email</h4>
          <h5>azriaor@gmail.com</h5>
          <a href="mailto:azriaor@gmail.com"></a>
        </article>
        <article className="contact__options">
          <RiMessengerLine />
          <h4>messenger</h4>
          <h5>or azaria</h5>
          <a href="http://m.me/or.azarya.5"></a>
        </article>
        <article className="contact__options">
          <MdOutlineEmail />
          <h4>Email</h4>
          <h5>azriaor@gmail.com</h5>
          <a href="mailto:azriaor@gmail.com"></a>
        </article>
        {/* End of contact options */}
        <form action="">Send a message</form>
      </div>
    </section>
  );
};

export default Contact;
