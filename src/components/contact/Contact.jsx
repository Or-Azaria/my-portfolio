import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";

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
        {/* End of contact options */}
        <form action="">Send a message</form>
      </div>
    </section>
  );
};

export default Contact;
