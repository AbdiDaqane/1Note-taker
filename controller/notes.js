//Middleware functions handling exchange data with note service and error
const noteService = require("../service/notes");

//Middleware function sends all notes as response
const get = async (req, res, next) => {
  try {
    res.json(await noteService.getNote());
  } catch (error) {
    next(error);
  }
};

//Middleware function saves note to db and send saved new note as reponse
const save = async (req, res, next) => {
  try {
    const { title, text } = req.body;

    const newNote = { title, text };

    res.status(201).json(await noteService.saveNote(newNote));
  } catch (error) {
    next(error);
  }
};

//Middleware function removes note with id params from request
const remove = async (req, res, next) => {
  try {
    await noteService.deleteNote(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  get,
  save,
  remove,
};
//cncsnd djjjf 
// njjnnvf
//dfjd