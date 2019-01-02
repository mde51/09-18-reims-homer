require("dotenv").config();
const connection = require("./helpers/db.js");
const http = require("http");
const path = require("path");
const multer = require("multer");
const upload = multer({
  dest: "tmp/",
  fileFilter: function(req, file, cb) {
    if (file.mimetype !== "image/png") {
      return cb(null, false);
    } else {
      cb(null, true);
    }
  },
  limits: {
    fileSize: 3 * 1024 * 1024
  }
});
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
<<<<<<< HEAD
const authRouter = require("./routes/auth/auth.js");
const passport = require("passport");
const multer = require("multer");
const fs = require("fs");

const upload = multer({
  dest: "tmp/",
  fileFilter: function(req, file, cb) {
    if (file.mimetype !== "image/png") {
      return cb(null, false);
    } else {
      cb(null, true);
    }
  },
  limits: {
    fileSize: 3 * 1024 * 1024
  }
});
=======
const authRouter = require("./routes/auth/auth");
>>>>>>> 9877caac5994d22753c32c46ec72bbb757d0625c

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("youhou");
});

app.use("/auth", authRouter);

<<<<<<< HEAD
app.get("/profile", passport.authenticate("jwt", { session: false }), function(
=======
app.post("/uploaddufichier", upload.array("monfichier"), function(
>>>>>>> 9877caac5994d22753c32c46ec72bbb757d0625c
  req,
  res,
  next
) {
  req.files.map(file =>
    fs.rename(file.path, "public/images/" + file.originalname, function(err) {
      if (err) {
        res.send("problème durant le déplacement");
      } else {
        res.send("Fichier uploadé avec succès");
      }
    })
  );
});

app.post("/uploaddufichier", upload.array("monfichier"), function(
  req,
  res,
  next
) {
  req.files.map(file =>
    fs.rename(file.path, "public/images/" + file.originalname, function(err) {
      if (err) {
        res.send("problème durant le déplacement");
      } else {
        res.send("Fichier uploadé avec succès");
      }
    })
  );
});

let server = app.listen(process.env.PORT || 5000, function() {
  console.log("Listening on port " + server.address().port);
});
