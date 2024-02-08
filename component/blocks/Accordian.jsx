import React from "react";

function Accordian({ question, answer, index }) {
  return (
    <div className="accordion-item">
      <input type="checkbox" id={"accordion" + index} />
      <label htmlFor={"accordion" + index} className="accordion-item-title">
        <span className="icon"></span>
        {question}
      </label>
      <div className="accordion-item-desc">{answer}</div>
    </div>
  );
}

export default Accordian;
