const sgMail = require("@sendgrid/mail");
var fs = require("fs");

export default async function sendMail(file1, file2, name, email) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  console.log("files:", file1, file2);
  // Read file contents as base64
  const file1Str = fs.readFileSync(file1).toString("base64");
  const file2Str = fs.readFileSync(file2).toString("base64");
  const msg = {
    to: "abhinavmehta801@gmail.com", // Change to your recipient
    from: "store@adigitalize.com", // Change to your verified sender
    subject: "new order😁😁😁",
    content: [
      {
        type: "text/html",
        value: `
        Name: ${name},
        email: ${email}
        `,
      },
    ],
    attachments: [
      {
        content: file1Str,
        filename: "mom photo",
        type: "image/png",
        disposition: "attachment",
      },
      {
        content: file2Str,
        filename: "dad photo",
        type: "image/png",
        disposition: "attachment",
      },
    ],
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
