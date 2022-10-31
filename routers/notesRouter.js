//Notes Router handle incoming request from /notes
const express = require("express");
const notesRouter = express.Router();
const { get, save, remove } = require("../controller/notes");

//Desinate different endpoints to its desired middleware function from Controller
notesRouter.route("/").get(get).post(save); // /api/notes/
notesRouter.route("/:id").delete(remove); // /api/notes/:id

module.exports = notesRouter;