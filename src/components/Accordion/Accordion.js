import React, { useState, useRef, useEffect } from "react";
import "./Accordion.css";

function Accordion(props) {
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toogleActive = () => {
    setActive(!active);
  };

  const titleStyle = {
    fontWeight: 600,
  };

  return (
    <div className="accordion-section">
      <button className="accordion-title" onClick={toogleActive}>
        <p style={titleStyle}>{props.title} </p>
      </button>

      <div ref={contentRef} className="accordion-content">
        {props.children}
      </div>
    </div>
  );
}

export default Accordion;
