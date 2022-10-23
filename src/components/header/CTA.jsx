import React from "react";
import CV from "../../assets/Or_Azaria_-_Full_Stack_Developer_C.V.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Le`ts Talk
      </a>
    </div>
  );
};

export default CTA;