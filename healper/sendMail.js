const sgMail = require("@sendgrid/mail");
import Users from "./database/schema"

export default function sendMail(id, mom_photo, dad_photo, name, email) {
  return new Promise((resolve, reject) => {
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
          mom_photo: mom_photo,
          dad_photo: dad_photo,
          email: email,
        });

        try {
          const savedData = await userData.save();
          console.log("Data inserted:", savedData);
          resolve(true);
        } catch (error) {
          console.error("Error inserting data:", error);
          reject(error);
        }
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
}
