import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
function SuccessIcon() {
  const router = useRouter();
  const { id, status } = router.query;
  return (
    <div className="success-icon">
      <img width={"100px"} src="./assets/icons/success.png" alt="" />
      <h1>Order Successful</h1>
      <p>
        your order {id} was successful, please check your provided email for
        confirmation. We'll send the generated pictures within few hours. feel
        free to contact us at{" "}
        <a href="mailto:hey@ourbabypicsai.com">hey@ourbabypicsai.com</a>
      </p>
      <a className="btn" href="/">
        Back to home
      </a>
    </div>
  );
}

export default SuccessIcon;
