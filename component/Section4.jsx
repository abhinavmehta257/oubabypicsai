import React from "react";

function Section4() {
  return (
    <div className="section section-4">
      <h2 className="heading">
        See Your <span>Future Baby</span> With Our AI Baby Generator
      </h2>
      <div className="sides">
        <div className="side left">
          <div className="image">
            <img src="./assets/img/man.png" alt="" />
            <img src="./assets/img/women.png" alt="" />
          </div>
          <div className="text">
            <h3>1. Upload your photos</h3>
            <div>
              Attach them in the order form at the bottom of our website.
            </div>
          </div>
        </div>
        <div className="side right">
          <div className="image">
            <img src="./assets/img/boy.png" alt="" />
            <img src="./assets/img/girl.png" alt="" />
          </div>
          <div className="text">
            <h3>2. Receive child photos</h3>
            <div>
              Receive two sets (boy and girl) of photos via email and start
              sharing them with friends and family!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
