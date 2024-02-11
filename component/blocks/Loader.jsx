import React from "react";

function Loader({ color }) {
  return (
    <div class="lds-ring">
      <div className={color}></div>
      <div className={color}></div>
      <div className={color}></div>
      <div className={color}></div>
    </div>
  );
}

export default Loader;
