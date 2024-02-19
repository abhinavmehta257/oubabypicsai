// var fs = require("fs");
import fs from "fs/promises";

export default function saveFiles(files, id) {
  return new Promise(
    async (resolve, reject) => {
      try {
        const momImage = files.momImage;
        const dadImage = files.dadImage;
        console.log(momImage[0].filepath, dadImage[0].filepath, id);

        const momFileExtension = momImage[0].originalFilename
          .split(".")
          .reverse()[0];
        const dadFileExtension = dadImage[0].originalFilename
          .split(".")
          .reverse()[0];

        const newMomFileName = `uploaded_mom_${id}.${momFileExtension}`;
        const newMomImgPath = `${__dirname}/${newMomFileName}`;

        const newDadFileName = `uploaded_dad_${id}.${dadFileExtension}`;
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
        await fs.rename(dadImage[0].filepath, newDadImgPath);

        // Move momImage
        await fs.rename(momImage[0].filepath, newMomImgPath);

        resolve({ mom_photo: newMomImgPath, dad_photo: newDadImgPath });
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
