const sgMail = require("@sendgrid/mail");
import Users from "../healper/database/schema";

export default async function sendMail(id,mom_photo, dad_photo, name, email) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "abhinavmehta801@gmail.com", // Change to your recipient
    from: "store@adigitalize.com", // Change to your verified sender
    subject: "new order😁😁😁",
    content: [
      {
        type: "text/html",
        value: `
        Name: ${name},
        email: ${email},
        mom photo: ${mom_photo},
        dad photo: ${dad_photo},
        `,
      },
    ],
    attachments: [],
  };

  sgMail
    .send(msg)
    .then(async () => {
      console.log("Email sent");
      const userData = new Users({
        order_id: id,
        name: name,
        mom_photo:mom_photo,
        dad_photo: dad_photo,
        email: email,
      });
      
      await userData
        .save()
        .then((savedData) => {
          console.log("Data inserted:", savedData);
          return savedData;
        })
        .catch((error) => {
          console.error("Error inserting data:", error);
          return error;
        });
      return true;
    })
    .catch((error) => {
      console.error(error);
      return error
    });
    
}
