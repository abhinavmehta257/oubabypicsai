// var fs = require("fs");
import fs from "fs/promises";

export default function saveFiles(files, id) {
  return new Promise(
    async (resolve, reject) => {
      try {
        const momImage = files.momImage;
        const newMomFileName = `uploaded_mom_${id}.${
          momImage.name.split(".").reverse()[0]
        }`;
        const newMomImgPath = `${__dirname}/${newMomFileName}`;

        const dadImage = files.dadImage;
        const newDadFileName = `uploaded_dad_${id}.${
          dadImage.name.split(".").reverse()[0]
        }`;
        const newDadImgPath = `${__dirname}/${newDadFileName}`;

        // Move dadImage
        // await fs.rename(dadImage.path, newDadImgPath, (err) => {
        //   if (err) {
        //     console.error("Error moving file:", err);
        //     res.status(500).json({ error: "Internal Server Error" });
        //     return;
        //   }
        //   fs.rename(momImage.path, newMomImgPath, (err) => {
        //     if (err) {
        //       console.error("Error moving file:", err);
        //       res.status(500).json({ error: "Internal Server Error" });
        //       return;
        //     }
        //   });
        // });

        // Move dadImage
        await fs.rename(dadImage.path, newDadImgPath);

        // Move momImage
        await fs.rename(momImage.path, newMomImgPath);

        resolve({ mom_photo: newMomImgPath, dad_file: newDadImgPath });
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
