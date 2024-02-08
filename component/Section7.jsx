import React, { useState } from "react";
import Paypal from "./Paypal";

function Section7() {
  const [dadImage, setDadImage] = useState(null);
  const [momImage, setMomImage] = useState(null);
  const [customerName, setCustomerName] = useState(null);
  const [customerEmail, setCustomerEmail] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleDadImageChange = (e) => {
    const file = e.target.files[0];
    validateAndSetImage(file, setDadImage);
    setErrorMsg("");
  };

  const handleMomImageChange = (e) => {
    const file = e.target.files[0];
    validateAndSetImage(file, setMomImage);
    setErrorMsg("");
  };

  const validateAndSetImage = (file, setImage) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const image = new Image();
        image.src = e.target.result;

        image.onload = () => {
          setImage(file);
          setErrorMsg("");
        };

        image.onerror = () => {
          setErrorMsg("Invalid image file. Please select a valid image.");
        };
      };

      reader.readAsDataURL(file);
    } else {
      setErrorMsg("Please select a file.");
    }
  };

  const handleNameChange = (e) => {
    const name = e.target.value;
    setCustomerName(name);
    setErrorMsg("");
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setCustomerEmail(email);
    setErrorMsg("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!dadImage || !momImage || !customerName || !customerName) {
      setErrorMsg("please provide all the data");
      return;
    }

    // Use FormData to handle file uploads
    const formData = new FormData();
    formData.append("name", customerName);
    formData.append("email", customerEmail);
    formData.append("dadImage", dadImage);
    formData.append("momImage", momImage);

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div id="section-7" className="section section-7">
      <div className="text">
        <div className="heading">
          See Your <span>Future Baby</span> With Our AI Baby Generator
        </div>
        <div className="body">
          <div className="sub-text">
            {" "}
            <b>Limited Time Offer:</b> $̶1̶9̶<span> $4.95</span> htmlFor 4 photos
            of boy and 4 photos of girl delivered within an hour via email.
            One-Time Payment. No Subscription.
            <div className="list-item">
              <img src="./assets/icons/item.png" alt="" />
              Delivered Within An Hour ⚡
            </div>
            <div className="list-item">
              <img src="./assets/icons/item.png" alt="" />
              Trusted By 1,000+ Customers ⭐
            </div>
            <div className="list-item">
              <img src="./assets/icons/item.png" alt="" />
              44,000+ Photos Already Generated 👼
            </div>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={handleNameChange}
              placeholder="Enter your name"
            />
            <input
              type="email"
              onChange={handleEmailChange}
              placeholder="Enter your email"
            />
            <input
              type="file"
              onChange={handleDadImageChange}
              accept="image/*"
            />
            <input
              type="file"
              onChange={handleMomImageChange}
              accept="image/*"
            />
            {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
            <button type="submit">Submit order $4.95</button>
          </form>
          <Paypal />
        </div>
      </div>
    </div>
  );
}

export default Section7;
