import multer from "multer";
import { nanoid } from "nanoid";
import { resolve } from "path";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(
      null,
      resolve("C:\\Users\\arbaa\\practice_typescript\\my-project3", "uploads"),
    );
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = nanoid(8);
    cb(null, uniqueSuffix + ".pdf");
  },
});
const upload = multer({ storage: storage }).single("pdf");
export { upload };
//# sourceMappingURL=upload.middleware.js.map
