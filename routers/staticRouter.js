//Static Router handles all incoming request for static pages
const express = require("express");
const path = require("path");
const staticRouter = express.Router();

//Set static root to public
staticRouter.use(express.static("public"));

//Get Endpoint serving index.html
staticRouter.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../Develop/public/index.html"))
);

//Get Endpoint serving notes.html
staticRouter.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "../Develop/public/notes.html"))
);

module.exports = staticRouter;