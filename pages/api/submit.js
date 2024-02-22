import createOrder from "../../healper/paypal";
import saveFiles from "../../healper/saveFiles";
import Users from "../../healper/database/schema";
import generateUUID from "../../healper/generateUUID";
import main from "../../healper/database/connect";
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
  await main().catch((err) => console.error(err));
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Error parsing form:", err);
      res.status(500).json({ error: "Internal Server Error" , err:err});
      return;
    }
    const name = fields.name[0];
    const email = fields.email[0];
    const id = generateUUID();

    let paths = await saveFiles(files, id)
      .then(async (json) => {
        console.log("photos", json);
        await sendMail(
          json.mom_photo,
          json.dad_photo,
            name,
            email
          ).then(async ()=>{
            const userData = new Users({
              order_id: id,
              name: name,
              mom_photo: json.mom_photo,
              dad_photo: json.dad_photo,
              email: email,
            });
            
            await userData
              .save()
              .then((savedData) => {
                console.log("Data inserted:", savedData);
                return res.status(200).json(savedData);
              })
              .catch((error) => {
                console.error("Error inserting data:", error);
                return res.status(200).json(error);
              });
          })
            .catch((err) => {
              console.log(err);
            })
        
      })
      .catch(function (err) {
        console.log("Promise Rejected");
        console.log(err);
        return res.status(500).json(err);
      });
  });
  // Parse incoming form data using a Promise
  // fs.unlink(newPath, function (err) {
  //   if (err) return console.log(err);
  //   console.log("file deleted successfully");
  // });\
};
