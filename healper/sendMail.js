const sgMail = require("@sendgrid/mail");
var fs = require("fs");

export default async function sendMail(mom_photo, dad_photo, name, email) {
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
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error.response.body);
    });
}
