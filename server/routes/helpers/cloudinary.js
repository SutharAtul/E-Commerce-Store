const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
    cloud_name: "dbwxgk4gi",
    api_key: "827845927683991",
    api_secret: "_pC_aaa8z-54HGR6Im3WAJy5_TY",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
    const result = await cloudinary.uploader.upload(file, {
      resource_type: "auto",
    });
  
    return result;
}

const upload = multer({ storage });


module.exports = { upload, imageUploadUtil };
