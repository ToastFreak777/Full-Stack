import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const [_, ext] = file.originalname.split(".");
    cb(null, `${uniqueSuffix}.${ext}`);
  },
});

export default multer({ storage: storage });
