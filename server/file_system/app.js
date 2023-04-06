//npx kill-port 3001

const express = require("express");
const mongoose = require("mongoose");

// for file uploads
const path = require("path");
const crypto = require("crypto");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const fs = require("fs");
const stream = require("stream");
const methodOverride = require("method-override");
require("dotenv/config");

const app = express();

//setup view engine
app.set("view engine", "ejs");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// setting up buffers
const bufferSize = 64 * 1024; // 64 KB buffer size
const buffer = new stream.PassThrough({ highWaterMark: bufferSize });

//import routes
const userRoutes = require("./routes/users");

//redirect all requests to router
app.use("/", userRoutes);

//Connect to DB
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));

// init gfs and make it 
let gfs;

db.once("open", () => {
  console.log("Connected to Database");
  //initialise stream for file upload
  gridfsBucket = new mongoose.mongo.GridFSBucket(db.db, {
    bucketName: "uploads",
  });
  gfs = Grid(db.db, mongoose.mongo);
  gfs.collection("uploads");
});

// Create storage engine
const storage = new GridFsStorage({
  url: process.env.DATABASE_URL,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          //this should match the collection name in mongo
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});

//Get requests initial route
app.get("/", (req, res) => {
  gfs.files.find().toArray((err, files) => {
    // Check if files
    if (!files || files.length === 0) {
      res.render("index", { files: false });
    } else {
      files.map((file) => {
        if (
          file.contentType === "image/jpeg" ||
          file.contentType === "image/png"
        ) {
          file.isImage = true;
        } else {
          file.isImage = false;
        }
      });
      //we render this parameter to our view
      res.render("index", { files: files });
    }
  });
});

// we can use upload var as middleware to upload to db
const upload = multer({ storage });

//upload requests to the database are processed here and not with router
//inside single we put the name put under file in the ejs
app.post("/upload", upload.single("file"), (req, res) => {
  //later on I need to connect this section to the rest of the mongo upload
  // res.json({file: req.file});
  //redirect back to homepage
  res.redirect("/");
  console.log(
    `The file was successfully uploaded and saved as ${req.file.filename}`
  );
});

//load files faster through a pipeline
app.get("/files", (req, res) => {
  gfs.files.find().toArray((err, files) => {
    // Check if files
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: "No files exist",
      });
    }

    // Files exist
    return res.json(files);
  });
});

//load specific files stored in the system
app.get("/files/:filename", (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    //Check if files exist and then display them
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "No such file exists",
      });
    }

    //if the file exists
    return res.json(file);
  });
});

//load specific image and display the image
app.get("/image/:filename", async (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    //Check if files exist and then display them
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "No such file exists",
      });
    }

    //if the file exists, check if image
    if (file.contentType === "image/jpeg" || file.contentType === "image/png") {
      //read the output to browser
      const readStream = gridfsBucket.openDownloadStream(file._id);
      //takes very long time to complete, implement a buffer/pipeline || compression algorithm
      readStream.pipe(res);
    } else {
      res.status(404).json({ err: "Unsuported image type" });
    }
  });
});

//Listening to server -boot up
app.listen(3001);
