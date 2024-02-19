import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { PaymentForm } from "./blocks/PaymentForm";
import { useState, useEffect } from "react";
import Loader from "./blocks/Loader";

const Paypal = ({ orderID }) => {
  const [clientToken, setClientToken] = useState(null);
  const initialOptions = {
    "client-id":
      "AQGA4DlWXghmQf5lfnFXqqh64MYkaPt55Kzk_-E2D4ltBIV19Jp-9x1qk9M-N9Un0Y3Z5ndzhfDLvz_I",
    "data-client-token": clientToken,
    components: "hosted-fields,buttons",
    "enable-funding": "paylater,venmo",
    "data-sdk-integration-source": "integrationbuilder_ac",
    "disable-funding": "",
  };

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/token", {
        method: "POST",
      });
      const { client_token } = await response.json();
      console.log(client_token);
      setClientToken(client_token);
    })();
  }, []);
  return (
    <>
      {clientToken ? (
        <PayPalScriptProvider options={initialOptions}>
          <PaymentForm />
        </PayPalScriptProvider>
      ) : (
        <div>
          <Loader color={"primary"} />
        </div>
      )}
    </>
  );
};

export default Paypal;
