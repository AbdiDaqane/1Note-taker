//apiRouter handles all routes coming from /api
const express = require("express");
const notesRouter = require("./notesRouter");
const apiRouter = express.Router();

//Middleware: routes all /notes to notesRouter
apiRouter.use("/notes", notesRouter);

module.exports = apiRouter;