// Libraries
import express from "express";
import multer from "multer";

//Database Model
import { imageModel } from "../../database/allModel";

//Upload to s3
import { s3Upload } from "../../Utils/AWS/s3";

const Router = express.Router();

//multer config
const storage = multer.memoryStorage();
const upload = multer({ storage });

/*
Route       /image
Des         Uploads given image to s3 bucket, and saves file link to mangodb
Params      none
Access      Public
Method      POST    
*/
Router.post("/", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;

    //s3 bucket options
    const bucketOptions = {
      Bucket: "zomato-clone-master",
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: "public-read", //Acess Control List
    };

    const uploadImage = await s3Upload(bucketOptions);

    return res.status(200).json({ uploadImage });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;