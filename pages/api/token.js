import { generateClientToken } from "../../healper/paypal";
export default async (req, res) => {
  try {
    const { jsonResponse, httpStatusCode } = await generateClientToken();
    console.log(jsonResponse);

    return res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error("Failed to generate client token:", error);
    return res.status(500).send({ error: "Failed to generate client token." });
  }
};
