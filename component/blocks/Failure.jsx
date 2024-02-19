import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
function Failure() {
  const router = useRouter();
  const { id, status } = router.query;
  return (
    <div className="failed-icon">
      <img width={"100px"} src="./assets/icons/fail.png" alt="" />
      <h1>Transaction failed</h1>
      <p>
        your order {id} failed due to some issue. The amount will automatically
        be send back to your account if it was diducted. Feel free to contact us
        at <br></br>
        <a href="mailto:support@ourbabypicsai.com">support@ourbabypicsai.com</a>
      </p>
      <a className="btn" href="/">
        Back to home
      </a>
    </div>
  );
}

export default Failure;
