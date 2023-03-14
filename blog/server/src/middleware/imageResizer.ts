import sharp from "sharp";
import { writeFileSync } from "fs";

export default (req: any, res: any, next: any) => {
  sharp(req.file.path)
    .resize(125, 125)
    .toBuffer((err, buf) => {
      if (err) return next(err);

      writeFileSync(`${req.file.destination}/${req.file.filename}`, buf);

      next();
    });
};
