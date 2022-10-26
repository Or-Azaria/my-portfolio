import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h5>get in touch</h5>
      <h2>contact me</h2>
      <div className="container contact__container">
        <article className="contact__options">
          <h4>Email</h4>
          <p>azriaor@gmail.com</p>
          <a href="mailto:azriaor@gmail.com"></a>
        </article>
        {/* End of contact options */}
        <form action=""></form>
      </div>
    </section>
  );
};

export default Contact;
