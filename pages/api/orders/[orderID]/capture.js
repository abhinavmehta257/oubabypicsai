import { captureOrder } from "../../../../healper/paypal";
import sendMail from "../../../../healper/sendMail";
import Users from "../../../../healper/database/schema";
const path = require("path");
import { useSearchParams } from "next/navigation";

export default async (req, res) => {
  try {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    console.log(id);
    const { orderID } = req.query;
    const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
    const getUser = Users.findOne({ order_id: id });
    await sendMail(
      getUser.mom_photo,
      getUser.dad_photo,
      getUser.name,
      getUser.email
    )
      .catch((err) => {
        console.log(err);
      })
      .then((value) => {
        return res.status(200).json({ message: "Email sent to user" });
      });
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to capture order." });
  }
};
