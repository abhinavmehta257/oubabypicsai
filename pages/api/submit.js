import createOrder from "../../healper/paypal";
import saveFiles from "../../healper/saveFiles";
import sendMail from "../../healper/sendMail";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var formidable = require("formidable");
var fs = require("fs");

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  if (req.method !== "POST") {
    return;
  }
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Error parsing form:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    const name = fields.name;
    const email = fields.email;

    let paths = await saveFiles(files, name)
      .then((json) => {
        console.log(json);
      })
      .then(async function (value) {
        // await sendMail(value.mom_photo, value.dad_file, name, email).catch(
        //   (err) => {
        //     console.log(err);
        //   }
        // );
        console.log(value);
      })
      .catch(function (err) {
        console.log("Promise Rejected");
        console.log(err);
      });
  });
  // Parse incoming form data using a Promise
  // fs.unlink(newPath, function (err) {
  //   if (err) return console.log(err);
  //   console.log("file deleted successfully");
  // });\
  return res.json(json);
};
