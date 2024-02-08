import { captureOrder } from "../../../../healper/paypal";
export default async (req, res) => {
  try {
    console.log(req.query);
    const { orderID } = req.query;
    const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to capture order." });
  }
};
