const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
  res.json({ message: "File uploaded successfully" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});