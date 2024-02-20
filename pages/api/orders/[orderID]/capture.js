import { captureOrder } from "../../../../healper/paypal";
import sendMail from "../../../../healper/sendMail";
import Users from "../../../../healper/database/schema";
import { log } from "console";
const path = require("path");

export default async (req, res) => {
  try {
    console.log('url :',req.url);
    const userId = req.url.split('?id=')[1]
    const { orderID } = req.query;
    const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
    const getUser = Users.findOne({ order_id: userId });
    console.log(getUser);
    // await sendMail(
    //   getUser.mom_photo,
    //   getUser.dad_photo,
    //   getUser.name,
    //   getUser.email
    // )
    //   .catch((err) => {
    //     console.log(err);
    //   })
    //   .then((value) => {
    //     return res.status(httpStatusCode).json({ message: "Email sent to user" ,...jsonResponse});
    //   });
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to capture order." });
  }
};
