import React, { useState } from "react";
import Paypal from "./Paypal";
import Loader from "./blocks/Loader";
import { useRouter } from "next/router";
function Section7() {
  const router = useRouter();

  const [isFormSubmitted, setIsFormSubmitted] = useState(null);
  const [isTokenFetched, setIsTokenFetched] = useState(null);
  const [dadImage, setDadImage] = useState(null);
  const [momImage, setMomImage] = useState(null);
  const [customerName, setCustomerName] = useState(null);
  const [customerEmail, setCustomerEmail] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [orderID, setOrderId] = useState(null);

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
    setIsFormSubmitted(true);
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
        .then((response) => {
          setIsTokenFetched(true);
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setOrderId(data.order_id);
          router.query.id = data.order_id;
          router.push(router);
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
            <b>Limited Time Offer:</b> $̶1̶9̶<span> $9.95</span> for 4 photos of
            boy and 4 photos of girl delivered within an hour via email.
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
          {isTokenFetched ? (
            <Paypal />
          ) : (
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
              <div className="file-input">
                <label htmlFor="momImage">
                  {dadImage
                    ? dadImage.name.substring(0, 20) + "..."
                    : "Daddy's image"}
                </label>

                <input
                  type="file"
                  onChange={handleDadImageChange}
                  accept="image/*"
                />
                <div className="file-icon">
                  <img src="/assets/icons/folder.png" alt="" srcSet="" />
                </div>
              </div>
              <div className="file-input">
                <label htmlFor="momImage">
                  {momImage
                    ? momImage.name.substring(0, 20) + "..."
                    : "Mommy's image"}
                </label>
                <input
                  name="momImage"
                  type="file"
                  onChange={handleMomImageChange}
                  accept="image/*"
                />
                <div className="file-icon">
                  <img src="/assets/icons/folder.png" alt="" srcSet="" />
                </div>
              </div>

              {errorMsg && <p className="error-msg">{errorMsg}</p>}
              <button type="submit" disabled={isFormSubmitted}>
                {isFormSubmitted ? "processing..." : "Submit order $9.95"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Section7;
