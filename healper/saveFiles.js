// var fs = require("fs");
import fs from "fs/promises";
var cloudinary = require('cloudinary').v2;

export default function saveFiles(files, id) {
  cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.COUDINARY_API_KEY,
  api_secret: process.env.COUDINARY_API_SECRET
});
let mom_photo,dad_photo;
  return new Promise(
    async (resolve, reject) => {
      try {
        const momImage = files.momImage;
        const dadImage = files.dadImage;
        await cloudinary.uploader.upload(momImage[0].filepath, { tags: id }, function (err, image) {
          console.log();
          console.log("** File Upload");
          if (err) { console.warn(err); }
          console.log("image uploaded");
          mom_photo = image.url;
        }); 
        await cloudinary.uploader.upload(dadImage[0].filepath, { tags: id }, function (err, image) {
          console.log();
          console.log("** File Upload");
          if (err) { console.warn(err); }
          console.log("image uploaded");
          dad_photo = image.url;
        });        

        resolve({ mom_photo,dad_photo });
      } catch (error) {
        console.error("Error:", error);
        reject({ error: "Internal Server Error" });
      }
    },
    (error) => {
      console.log(error);
    }
  );
}

